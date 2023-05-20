import React from 'react';
import styles from '../styles/Banner.module.css';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {

  return (
    <div className={styles.bannerwrap}>
      <div className={styles.contentWrap}>
        <div className={styles.textWrap}>
          <h1 className={styles.bannerheader}>{"Altius Hospitals - A Place Safer Than Home"}</h1>
          <div className={styles.boxp}>
          {"Altius Hospitals, Bangalore has evolved as a leader in the healthcare system because of its integrated model that combines all services under one roof. From Cardiology and 24/7 emergency care to dialysis treatment and outpatient treatments- Altius offers it all! Our world-class chain of multi-specialty hospitals aims to treat people, not diseases. We use cutting-edge technology and harness health for all of our patients so they can live their best lives possible."}
          
          </div>
          <div className={styles.containerbtnwrap}>
            <button className={styles.containerbtns}>{"Make An Appointment →"}</button>
          </div>
          
        </div>
        <div className={styles.imageWrap}>
          <Image className={styles.bannerimg} height={500} width={500} src="/images/temp/Docs-1.webp" alt="Card img" />
        </div>
        
      </div>
    </div>
  );
}

export default Banner;


