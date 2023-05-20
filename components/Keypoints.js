import React from 'react'
import styles from '../styles/Keypoints.module.css';
import Image from 'next/image'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Keypoints = () => {

  return (
<div className={styles.container}>

<h1 className={styles.heading}>Altius Specialities</h1>
<hr className={styles.line}/>

<div className={styles.boxcontainer}>

    <div className={styles.box}>
      <div className={styles.imgkeywrap}>
    <Image
  src="/images/navbar/Navbar Icon Temporary.png"
  className={styles.imgkeypoint}
  alt="My image"
  height={80}
  width={80}

/>
</div>
        {/* <img src="/Altius Care @Home.png" alt=""/> */}
        <h3>{"Altius Care"}</h3>
    </div>


    
    <div className={styles.box}>
      <div className={styles.imgkeywrap}>
    <Image
  src="/images/navbar/Navbar Icon Temporary.png"
  className={styles.imgkeypoint}
  alt="My image"
  height={80}
  width={80}

/>
</div>
        
        <h3>{"Couples 1st approach"}</h3>

    </div>

    <div className={styles.box}>
      <div className={styles.imgkeywrap}>
    <Image
  src="/images/navbar/Navbar Icon Temporary.png"
  className={styles.imgkeypoint}
  alt="My image"
  height={80}
  width={80}

/>
</div>
        
        <h3>{"Cutting Edge Technology"}</h3>

    </div>

    <div className={styles.box}>
      <div className={styles.imgkeywrap}>
    <Image
  src="/images/navbar/Navbar Icon Temporary.png"
  className={styles.imgkeypoint}
  alt="My image"
  height={80}
  width={80}

/>
</div>
       
        <h3>{"High Success Rate"}</h3>

    </div>

    <div className={styles.box}>
      <div className={styles.imgkeywrap}>
    <Image
  src="/images/navbar/Navbar Icon Temporary.png"
  className={styles.imgkeypoint}
  alt="My image"
  height={80}
  width={80}

/>
</div>
      
        <h3>{"Insurance Accepted"}</h3>

    </div>

    <div className={styles.box}>
      <div className={styles.imgkeywrap}>
    <Image
  src="/images/navbar/Navbar Icon Temporary.png"
  className={styles.imgkeypoint}
  alt="My image"
  height={80}
  width={80}

/>
</div>
       
        <h3>{"Premium Facilities"}</h3>

    </div>

    <div className={styles.box}>
      <div className={styles.imgkeywrap}>
    <Image
  src="/images/navbar/Navbar Icon Temporary.png"
  className={styles.imgkeypoint}
  alt="My image"
  height={80}
  width={80}

/>
</div>
       
        <h3>{"Transparency in cost and Treatments"}</h3>

    </div>

    <div className={styles.box}>
      <div className={styles.imgkeywrap}>
    <Image
  src="/images/navbar/Navbar Icon Temporary.png"
  className={styles.imgkeypoint}
  alt="My image"
  height={80}
  width={80}

/>
</div>
        
        <h3>{"Zero Cost EMI"}</h3>

    </div>
 
    <div className={styles.box}>

      <div className={styles.imgkeywrap}>
    <Image
  src="/images/navbar/Navbar Icon Temporary.png"
  className={styles.imgkeypoint}
  alt="My image"
  height={80}
  width={80}

/>
</div>

        
        <h3>{"Affordable Treatments"}</h3>

    </div>

</div>
    
<div className={styles.containerbtnwrap}>
            <button className={styles.containerbtns}>{"View All Specialities →"}</button>
    </div>

</div>
  )
}

export default Keypoints