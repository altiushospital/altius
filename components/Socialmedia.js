import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/Socialmedia.module.css';

const Socialmedia = () => {
  return (
    <>
    <h6 className={styles.containerhead}>{"Share this:"}</h6>
    <div className={styles.containerlogowrap}>
        
        <div className={styles.containerlogo}>
            <Image
              src="/images/icons/facebook-coloured.png"
              alt="My Image"
              width={35}
              height={35}
              className={styles.image}
            />
          </div>
          <div className={styles.containerlogo}>
            <Image
              src="/images/icons/twitter-coloured.png"
              alt="My Image"
              width={35}
              height={35}
              className={styles.image}
            />
          </div>
          <div className={styles.containerlogo}>
            <Image
              src="/images/icons/whatsapp-coloured.png"
              alt="My Image"
              width={35}
              height={35}
              className={styles.image}
            />
          </div>
          <div className={styles.containerlogo}>
            <Image
              src="/images/icons/linkedin-coloured.png"
              alt="My Image"
              width={35}
              height={35}
              className={styles.image}
            />
          </div>

    </div>
    </>
  )
}

export default Socialmedia