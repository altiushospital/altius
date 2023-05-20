import React from 'react'
import styles from '../styles/Aboutus.module.css';
import Link from 'next/link';
import Image from 'next/image'
const Aboutus = () => {
    const redirectUrlC = 'https://altiushospital.com/contact-us/';

    const handleClickC = () => {
        window.location.href = redirectUrlC;
    }
  return (
    <div className={styles.aboutwrap}>
    <div className={styles.containerlogowrap}>
    
    <Link className={styles.containerlinklogo} href="https://fertilityhospital.vercel.app/">
                            <Image
                                src="/images/logo/Altius-logo.png"
                                alt="My Image"
                                width={3000}
                                height={1050}
                                className={styles.containerlogo}
                            />
                        </Link>
    </div>
      <div className={styles.containerheadwrap}>
      <h2 className={styles.containerhead}>{"About Us"}</h2>
        <p className={styles.containerpara}>
        
            {"Altius Hospitals, Bangalore, has evolved as a leader in the healthcare system because of its integrated model that combines all services under one roof. From Cardiology and 24/7 emergency care to dialysis treatment and outpatient treatments – Altius offers it all! Our world-class chain of multi-specialty hospitals aims to treat people, not diseases. We use cutting-edge technology and harness health for all our patients so they can live their best lives possible. The Altius team has the best medical professionals providing excellent care, coupled with their rich experience and expertise using state-of-the-art technology. The hospital also offers comprehensive heart care, diagnostics, and treatment. The patients can now avail  cardiac care with our state-of-the-art GE – IGS 520 cath lab."}
        </p>
        <div className={styles.containerbtnwrap}>
            <button onClick={handleClickC} className={styles.containerbtns}>Contact Us</button>
        </div>

      </div>
    </div>
  )
}

export default Aboutus
