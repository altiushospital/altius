import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Sliderinfrastructure.module.css';

const Sliderinfrastructure = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch('https://api-ap-south-1.hygraph.com/v2/clfarqru428bv01t88476g9cn/master', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODEzODU2NzcsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsZmFycXJ1NDI4YnYwMXQ4ODQ3Nmc5Y24vbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjJmYjM3ZGUwLWFjODUtNGE4MC1hOWIxLTI4NjgxMjMxMDEyMyIsImp0aSI6ImNsZ2YxbWM5aDE3amcwMXVsNm05bjc4NngifQ.vIwPkkque6RIg9VdrWJUqqFllEm4PokDJHh0rSafAJsuw60MMWYx617AoWNo0D_ZdGZiErVobHGIb6jFpPGfEkMy7BEopDGRDBQ2dRcON-YGBezA-8Es3yquF8spaYEkxaYKml4Qr0rxnk0jowqnDFvj729F7lXPRb1CIGHmwNSL96-E3NcR4Z666q-TLdojL8wfSuYj_h_squYH88xtvNc5bY9halE3qQodC2tas3OPuICUafPZmbqcdqHIcenb3bPDhLZHPWai-gUUcdpOz_55MMObsKsWsaXxyAdJz6mznyB_gy-ptd9IKP6bv2F8LvnG1sBxXhTiv_Wdh0OaYOP21cgVrx2uhXe0ebg2AZG4utbJ1LPrHtsOraehyC2phtRfvYK7Qd2oClP6ItRaTGt6glPgIBOfgBbv3P_eLA7Sr7IkMNYUpr26ackc1pSx0rr3-dqAFr1vmFUbsD6a_JKm2MYEiQ8gKSZXiE0uW0xTH9cOu6AXoqUAH8Ii6pGW-BcosYkxnn4oXvKdt4ET81ZjH6oGmjc4rk7pXio9udGAVXgyp6gJcNQRp_5aksxLkwdKfNHiuGAeEK7kGeri0D3MrAXfb3g__ghbfRCTfgvjPVIQtldCDslTWPvXsbrOztXTIBNo5Tlxv8d4UTuiZ6DkUdmk9YUJS2Jf8wjEBx8',
        },
        body: JSON.stringify({
          query: `
            query {
              galleries {
                id
                alttext
                img {
                  url
                }
              }
            }
          `,
        }),
      });

      const { data } = await response.json();
      setImages(data.galleries);
    }

    fetchImages();
  }, []);

  const items = [];

  for (let i = 0; i < images.length; i += 2) {
    const item = (
      <Carousel.Item key={images[i].id}>
        <div className={`d-flex justify-content-center ${styles.carouselItem}`}>
          <div className={`carousel-image ${styles.carouselImage}`}>
            <Image src={images[i].img[0].url} alt={images[i].alttext} width={600} height={400} />
          </div>
          {i + 1 < images.length && (
            <div className={`carousel-image ${styles.carouselImage}`}>
              <Image src={images[i + 1].img[0].url} alt={images[i + 1].alttext} width={600} height={400} />
            </div>
          )}
        </div>
      </Carousel.Item>
    );

    items.push(item);
  }

  return (
    <>
      <Carousel interval={null} indicators={true} prevIcon={<span className={`carousel-control-prev-icon ${styles.carouselControlIcon}`} />} nextIcon={<span className={`carousel-control-next-icon ${styles.carouselControlIconleft}`} />}>
        {items}
      </Carousel>
      <div className={styles.containerbtnwrap}>
        <button className={styles.morebtn}>{"Visit Today →"}</button>
      </div>
    </>
  );
};

export default Sliderinfrastructure;
