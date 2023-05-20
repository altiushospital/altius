import React from 'react';
import styles from '../styles/Lilfeet.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom'


function Lilfeet() {
    const redirectUrl = 'https://altiushospital.com/dr-b-ramesh/';

    const handleClick = () => {
        window.location.href = redirectUrl;
    }

    return (
        <div className={styles.bannerwrap}>
        <h1 className={styles.bannerheader}>{"A Haven For Every Mother & Child - Lil Feet"}</h1>

        <div className={styles.wrapper}>
                        
        <div className={styles.boxp}>
            {"Lil Feet offers the best maternity care and medical assistance in Bangalore for you and your child during and after your pregnancy. We believe in providing a comprehensive care experience that makes your journey to parenthood pleasant and memorable."} <br/>
            <button onClick={handleClick} className={styles.morebtn}>{"Learn More About Lilfeet →"}</button>
            </div>
        
        <div className={styles.box}>
        
            <Image 
            className={styles.bannerimg}
            src="/images/logo/lilfeet-logo.png"
            alt="Card img" 
            width={500}
            height={500}

            />
            </div>

            

            {/* <div className={styles.box}></div> */}
        </div>
        </div>
    )
}

export default Lilfeet