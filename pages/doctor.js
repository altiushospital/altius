import { gql, GraphQLClient } from 'graphql-request';
import React from 'react';
import Image from 'next/image';
import styles from '../styles/DoctorCarousel.module.css';
import TreatmentsDropdown from '@/components/Navbar'
import Aboutus from '@/components/Aboutus'

const Home = ({ doctors }) => {
  console.log(doctors)


  return (
    
    <div>
      <TreatmentsDropdown/>
      <h1 className={styles.header}>Our Doctors</h1>
      
    <div className={styles.container}>
        {doctors &&
          doctors.map((doctors) => (
            <div key={doctors.id} className={styles.wrapper}>
              <div>
              <Image src={doctors&& doctors.image && doctors.image[0].url ||""} className={styles.imgd} alt="slide_image" height={180} width={200}/>

              </div>
              
              <div className={styles.drdetailswrap}>
                <section className={styles.drwrap}>
                  <h1 className={styles.drname}>{doctors.name}</h1>
                  <p className={styles.drdetails}>{doctors.designation}</p>
                  <p className={styles.dredu}>{doctors.education}</p>
                </section>
                <button className={styles.btnD}>Book Appointment</button>
              </div>
            </div>
          ))}
      </div>
      <Aboutus/>
      </div>
    
  );
};

  export const getStaticProps = async () => {
    const url = process.env.ENDPOINT || "https://altiushospital.com";
  
    const graphQLClient = new GraphQLClient(url, {
      headers: {
        "Authorization": process.env.GRAPH_CMS_TOKEN || ""
      },
    });

  const query = gql`
    query {
      doctors {
        id
        name
        designation
        education
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
};

export default Home;
