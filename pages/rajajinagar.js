import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { gql, GraphQLClient } from 'graphql-request';
import Image from 'next/image';
import styles from '../styles/DoctorCarousel.module.css';
import TreatmentsDropdown from '@/components/Navbar'
import Keypoints from '@/components/Keypoints'
import Form from '@/components/Form'
import Footermain from '@/components/Footermain'
import Aboutus from '@/components/Aboutus'
import Socialmedia from '@/components/Socialmedia'
import Map from '@/components/Map'
import Link from 'next/link';
const HBRLayoutPage = ({ doctors }) => {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  useEffect(() => {
    const filtered = doctors.filter((doctor) => doctor.location === 'Rajajinagar');
    setFilteredDoctors(filtered);
  }, [doctors]);

  return (
    <>
    <div>
        <TreatmentsDropdown/>

      <h1 className={styles.header}>Rajajinagar</h1>
      
      <div className={styles.locationimgwrap}>
            <Image src="/images/img/banner/rajajinagar.png" className={styles.locationimg}  alt="hbr" height={500} width={1200}/>
            </div>
        <div className={styles.locationwrap}>
      <h1 className={styles.locationhead}>{"Rajajinagar- Bangalore"}</h1>
      <p className={styles.locationp}>{"Altius Hospitals is a world-class chain of multi-specialty hospitals operating across Bangalore that aims to treat people, not diseases.  Altius Hospital at HBR layout combines the best medical professionals along with cutting-edge technology in providing the best medical care. Over the last 18+ years, it has evolved as a leader in the healthcare system because of its integrated model that combines all services under one roof. From Cardiology to 24/7 emergency care, dialysis treatment, and outpatient treatments, we offer all.  Altius Hospitals has a network of highly skilled and experienced medical professionals in Bangalore who provide compassionate care while demonstrating exceptional knowledge.  The hospitals are well equipped with the latest diagnostic labs, facilities, and modern technologies to provide the best medical services."}</p>
      </div>
      <Keypoints/>
      <div className={styles.container}>
      <h1 className={styles.locationhead}>{"Doctors"}</h1>
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
    <Map/>
    <Aboutus/>
    <Socialmedia/>
    <Footermain/>
    </>
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
