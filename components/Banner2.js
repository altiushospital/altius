import React from 'react';
import styles from '../styles/Banner2.module.css';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner2 = () => {
  return (
    <div className={styles.bannerwrap}>
      <div className={styles.contentWrap}>
        <div className={styles.imageWrap}>
          <Image
            className={styles.bannerimg}
            height={1500}
            width={800}
            src="/images/temp/bannertemp.webp"
            alt="Card img"
          />
          <span className={styles.imgspan}>25+ years of experience</span>
        </div>

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
