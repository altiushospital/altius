import React from 'react'
import styles from '../styles/Keypoints.module.css';
import Image from 'next/image'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Keypoints = () => {

  return (
    <div className={styles.container}>

      <h1 className={styles.heading}>Altius Specialities</h1>
      <hr className={styles.line} />

      <div className={styles.boxcontainer}>

        <div className={styles.box}>
          <div className={styles.imgkeywrap}>
            <Image
              src="/images/logo/ct-scan.png"
              className={styles.imgkeypoint}
              alt="My image"
              height={80}
              width={80}

            />
          </div>
          <h3>{"CT Scan & X-Ray"}</h3>
        </div>



        <div className={styles.box}>
          <div className={styles.imgkeywrap}>
            <Image
              src="/images/logo/cardiac-sciences.png"
              className={styles.imgkeypoint}
              alt="My image"
              height={80}
              width={80}

            />
          </div>

          <h3>{"Cardiac Sciences"}</h3>

        </div>

        <div className={styles.box}>
          <div className={styles.imgkeywrap}>
            <Image
              src="/images/logo/neuro.png"
              className={styles.imgkeypoint}
              alt="My image"
              height={80}
              width={80}

            />
          </div>

          <h3>{"Neuro Sciences"}</h3>

        </div>

        <div className={styles.box}>
          <div className={styles.imgkeywrap}>
            <Image
              src="/images/logo/oncology.png"
              className={styles.imgkeypoint}
              alt="My image"
              height={80}
              width={80}

            />
          </div>

          <h3>{"Oncology"}</h3>

        </div>

        <div className={styles.box}>
          <div className={styles.imgkeywrap}>
            <Image
              src="/images/logo/laparoscopy.png"
              className={styles.imgkeypoint}
              alt="My image"
              height={80}
              width={80}

            />
          </div>

          <h3>{"Laparoscopy"}</h3>

        </div>

        <div className={styles.box}>
          <div className={styles.imgkeywrap}>
            <Image
              src="/images/logo/orthopedics.png"
              className={styles.imgkeypoint}
              alt="My image"
              height={80}
              width={80}

            />
          </div>

          <h3>{"Orthopaedics"}</h3>

        </div>



      </div>

      <div className={styles.containerbtnwrap}>
        <button className={styles.containerbtns}>{"View All Specialities →"}</button>
      </div>

    </div>
  )
}

export default Keypoints