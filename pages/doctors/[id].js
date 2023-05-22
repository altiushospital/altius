import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { gql, GraphQLClient } from 'graphql-request';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../../styles/Doctorappointment.module.css";
import TreatmentsDropdown from "../../components/Navbar"
import Footermain from "../../components/Footermain"

const DoctorPage = ({ doctor }) => {
  // Render the doctor's data in the page
  return (
    <>
    <TreatmentsDropdown/>
      <div className={styles.container}>
        <div className={styles.overlayImage}>
          <Image
            src="/images/img/banner/BG.png"
            alt="background"
            height={600}
            width={1600}
          />
        </div>
        {doctor && (
          <div key={doctor.id} className={styles.doctorwrap}>
            {doctor.image && (
              <Image
                src={doctor.image.url}
                alt={doctor.name}
                height={250}
                width={250}
                className={styles.docimg}
              />
            )}
            <div className={styles.docdetailwrap}>
              <h1 className={styles.dochead}>{doctor.name}</h1>
              <p className={styles.docdesg}>{doctor.designation}</p>
            </div>
          </div>
        )}
        <div className={styles.detailwrap}>
          <div className={styles.detaildoc}>
            <p className={styles.docedu}><span className={styles.detail}>Education:</span>{doctor.education}</p>

            <p className={styles.docedu}><span className={styles.detail}>Specialization:</span>{doctor.specialization}</p>
            <p className={styles.docedu}><span className={styles.detail}>Experience:</span>{doctor.experience}{"  years of exprience"}</p>
            <p className={styles.docedu}><span className={styles.detail}>Location:</span>{doctor.location}</p>
            <p className={styles.docedu}><span className={styles.detail}>Registration:</span>{doctor.registration}</p>
            <div className={styles.btnwrap}>
              <Link href={`/doctors/appointment/${encodeURIComponent(doctor.name)}`}>
                <button className={styles.btnD}>Book Appointment</button>
              </Link>
            </div>
            <div className={styles.containeryoutube}>
              <iframe
                width="500"
                height="315"
                src="https://www.youtube.com/embed/ZrfshZz57tA"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={styles.aboutdoc}>
            <h1 className={styles.aboutdochead}>About Doctor</h1>
            <div className={styles.aboutdocdescwrap}>
              <p className={styles.aboutdocdesc}>{doctor.about}</p>
            </div>

          </div>

        </div>

      </div>
      <Footermain/>
    </>
  );
};

export async function getServerSideProps(context) {
  const doctorId = context.query.id;
  const url = "https://api-ap-south-1.hygraph.com/v2/clfarqru428bv01t88476g9cn/master";

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODEzODU2NzcsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsZmFycXJ1NDI4YnYwMXQ4ODQ3Nmc5Y24vbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjJmYjM3ZGUwLWFjODUtNGE4MC1hOWIxLTI4NjgxMjMxMDEyMyIsImp0aSI6ImNsZ2YxbWM5aDE3amcwMXVsNm05bjc4NngifQ.vIwPkkque6RIg9VdrWJUqqFllEm4PokDJHh0rSafAJsuw60MMWYx617AoWNo0D_ZdGZiErVobHGIb6jFpPGfEkMy7BEopDGRDBQ2dRcON-YGBezA-8Es3yquF8spaYEkxaYKml4Qr0rxnk0jowqnDFvj729F7lXPRb1CIGHmwNSL96-E3NcR4Z666q-TLdojL8wfSuYj_h_squYH88xtvNc5bY9halE3qQodC2tas3OPuICUafPZmbqcdqHIcenb3bPDhLZHPWai-gUUcdpOz_55MMObsKsWsaXxyAdJz6mznyB_gy-ptd9IKP6bv2F8LvnG1sBxXhTiv_Wdh0OaYOP21cgVrx2uhXe0ebg2AZG4utbJ1LPrHtsOraehyC2phtRfvYK7Qd2oClP6ItRaTGt6glPgIBOfgBbv3P_eLA7Sr7IkMNYUpr26ackc1pSx0rr3-dqAFr1vmFUbsD6a_JKm2MYEiQ8gKSZXiE0uW0xTH9cOu6AXoqUAH8Ii6pGW-BcosYkxnn4oXvKdt4ET81ZjH6oGmjc4rk7pXio9udGAVXgyp6gJcNQRp_5aksxLkwdKfNHiuGAeEK7kGeri0D3MrAXfb3g__ghbfRCTfgvjPVIQtldCDslTWPvXsbrOztXTIBNo5Tlxv8d4UTuiZ6DkUdmk9YUJS2Jf8wjEBx8"
    },
  });

  const query = gql`
    query Doctor($id: ID!) {
      doctor(where: { id: $id }) {
        id
        name
        designation
        education
        specialization
        location
        experience
        registration
        about
        image {
          url
        }
      }
    }
  `;

  try {
    const data = await graphQLClient.request(query, { id: doctorId });
    const doctor = data.doctor;

    return {
      props: {
        doctor,
      },
    };
  } catch (error) {
    console.error('Error fetching doctor:', error);
    return {
      props: {
        doctor: null,
      },
    };
  }
}

export default DoctorPage;
