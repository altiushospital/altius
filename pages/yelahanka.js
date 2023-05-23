import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { gql, GraphQLClient } from 'graphql-request';
import Image from 'next/image';
import styles from '../styles/DoctorCarousel.module.css';
import TreatmentsDropdown from '@/components/Navbar'
import Aboutus from '@/components/Aboutus'
import Link from 'next/link';

const HBRLayoutPage = ({ doctors }) => {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  useEffect(() => {
    const filtered = doctors.filter((doctor) => doctor.location === 'Yelahanka');
    setFilteredDoctors(filtered);
  }, [doctors]);

  return (
    <div>
      <h1 className={styles.header}>Our Doctors</h1>
      
      <div className={styles.container}>
        {filteredDoctors.map((doctor, index) => (
          <div key={index} className={styles.wrapper}>
            <div>
            <Image src={doctor.image.url} className={styles.imgd}  alt={doctor.name} height={180} width={200}/>
            </div>
            <div className={styles.drdetailswrap}>
            <section className={styles.drwrap}>
              <h1 className={styles.drname}>{doctor.name}</h1>
              <p className={styles.drdetails}>{doctor.designation}</p>
              </section>
              <Link href={`/doctors/${doctors.id}`}>
                  <button className={styles.btnD}>Book Appointment</button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const url = "https://api-ap-south-1.hygraph.com/v2/clfarqru428bv01t88476g9cn/master";

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODEzODU2NzcsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsZmFycXJ1NDI4YnYwMXQ4ODQ3Nmc5Y24vbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjJmYjM3ZGUwLWFjODUtNGE4MC1hOWIxLTI4NjgxMjMxMDEyMyIsImp0aSI6ImNsZ2YxbWM5aDE3amcwMXVsNm05bjc4NngifQ.vIwPkkque6RIg9VdrWJUqqFllEm4PokDJHh0rSafAJsuw60MMWYx617AoWNo0D_ZdGZiErVobHGIb6jFpPGfEkMy7BEopDGRDBQ2dRcON-YGBezA-8Es3yquF8spaYEkxaYKml4Qr0rxnk0jowqnDFvj729F7lXPRb1CIGHmwNSL96-E3NcR4Z666q-TLdojL8wfSuYj_h_squYH88xtvNc5bY9halE3qQodC2tas3OPuICUafPZmbqcdqHIcenb3bPDhLZHPWai-gUUcdpOz_55MMObsKsWsaXxyAdJz6mznyB_gy-ptd9IKP6bv2F8LvnG1sBxXhTiv_Wdh0OaYOP21cgVrx2uhXe0ebg2AZG4utbJ1LPrHtsOraehyC2phtRfvYK7Qd2oClP6ItRaTGt6glPgIBOfgBbv3P_eLA7Sr7IkMNYUpr26ackc1pSx0rr3-dqAFr1vmFUbsD6a_JKm2MYEiQ8gKSZXiE0uW0xTH9cOu6AXoqUAH8Ii6pGW-BcosYkxnn4oXvKdt4ET81ZjH6oGmjc4rk7pXio9udGAVXgyp6gJcNQRp_5aksxLkwdKfNHiuGAeEK7kGeri0D3MrAXfb3g__ghbfRCTfgvjPVIQtldCDslTWPvXsbrOztXTIBNo5Tlxv8d4UTuiZ6DkUdmk9YUJS2Jf8wjEBx8"
    },
  });

  const query = gql`
    query AllDoctors {
      doctors {
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
    const data = await graphQLClient.request(query);
    const doctors = data.doctors;

    return {
      props: {
        doctors,
      },
    };
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return {
      props: {
        doctors: [],
      },
    };
  }
}

export default HBRLayoutPage;
