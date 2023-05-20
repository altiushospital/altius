import React, { useState, useEffect } from 'react';
import { GraphQLClient } from 'graphql-request'; 
import styles from '../styles/Banner2.module.css';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';


const Banner2 = () => {

  const url = 'https://api-ap-south-1.hygraph.com/v2/clfarqru428bv01t88476g9cn/master';

  const graphcms = new GraphQLClient(url, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODEzODU2NzcsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsZmFycXJ1NDI4YnYwMXQ4ODQ3Nmc5Y24vbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjJmYjM3ZGUwLWFjODUtNGE4MC1hOWIxLTI4NjgxMjMxMDEyMyIsImp0aSI6ImNsZ2YxbWM5aDE3amcwMXVsNm05bjc4NngifQ.vIwPkkque6RIg9VdrWJUqqFllEm4PokDJHh0rSafAJsuw60MMWYx617AoWNo0D_ZdGZiErVobHGIb6jFpPGfEkMy7BEopDGRDBQ2dRcON-YGBezA-8Es3yquF8spaYEkxaYKml4Qr0rxnk0jowqnDFvj729F7lXPRb1CIGHmwNSL96-E3NcR4Z666q-TLdojL8wfSuYj_h_squYH88xtvNc5bY9halE3qQodC2tas3OPuICUafPZmbqcdqHIcenb3bPDhLZHPWai-gUUcdpOz_55MMObsKsWsaXxyAdJz6mznyB_gy-ptd9IKP6bv2F8LvnG1sBxXhTiv_Wdh0OaYOP21cgVrx2uhXe0ebg2AZG4utbJ1LPrHtsOraehyC2phtRfvYK7Qd2oClP6ItRaTGt6glPgIBOfgBbv3P_eLA7Sr7IkMNYUpr26ackc1pSx0rr3-dqAFr1vmFUbsD6a_JKm2MYEiQ8gKSZXiE0uW0xTH9cOu6AXoqUAH8Ii6pGW-BcosYkxnn4oXvKdt4ET81ZjH6oGmjc4rk7pXio9udGAVXgyp6gJcNQRp_5aksxLkwdKfNHiuGAeEK7kGeri0D3MrAXfb3g__ghbfRCTfgvjPVIQtldCDslTWPvXsbrOztXTIBNo5Tlxv8d4UTuiZ6DkUdmk9YUJS2Jf8wjEBx8',
    },
  });
  
    const [banners, setImages] = useState([]);
  
    useEffect(() => {
      async function fetchCarouselImages() {
        const query = `{
          banners {
            id
            alttext
            banner {
              url
            }
          }
        }`;
  
        try {
          const { banners } = await graphcms.request(query);
          setImages(banners);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchCarouselImages();
    }, []);

  return (
    <div className={styles.bannerwrap}>
      <div className={styles.contentWrap}>
      {!!banners &&
          Array.isArray(banners) &&
          banners.map((image) => (
            <div className={styles.imageWrap} key={image.id}>
              <Image
                src={image.banner[0].url}
                className={styles.bannerimg}
                alt={image.text}
                height={500}
                width={800}
              />
              <span className={styles.imgspan}>25+ years of experience</span>
            </div>
          ))}

        <div className={styles.textWrap}>
          <h1 className={styles.bannerheader}>Altius Hospitals - A Place Safer Than Home</h1>
          <div className={styles.boxp}>
            Altius Hospitals, Bangalore has evolved as a leader in the healthcare system because of its integrated model that combines all services under one roof. From Cardiology and 24/7 emergency care to dialysis treatment and outpatient treatments- Altius offers it all! Our world-class chain of multi-specialty hospitals aims to treat people, not diseases. We use cutting-edge technology and harness health for all of our patients so they can live their best lives possible.
          </div>
          <div className={styles.containerbtnwrap}>
                        <span className={styles.spanwrap}>
                            <Image src="/images/navbar/Navbar Icon Temporary.png" alt="My Image" width={50} height={40} className={styles.containerimg} />
                            <p className={styles.pwrap}>Easy Appointment</p>
                        </span>
                        <span className={styles.spanwrap}>
                            <Image src="/images/navbar/Navbar Icon Temporary.png" alt="My Image" width={50} height={40} className={styles.containerimg} />
                            <p className={styles.pwrap}>Online Consultation</p>
                        </span>
                        <span className={styles.spanwrap}>
                            <Image src="/images/navbar/Navbar Icon Temporary.png" alt="My Image" width={50} height={40} className={styles.containerimg} />
                            <p className={styles.pwrap}>Professional Staff</p>
                        </span>
                        <span className={styles.spanwrap}>
                            <Image src="/images/navbar/Navbar Icon Temporary.png" alt="My Image" width={50} height={40} className={styles.containerimg} />
                            <p className={styles.pwrap}>24/7 Customer Service</p>
                        </span>

                    </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
