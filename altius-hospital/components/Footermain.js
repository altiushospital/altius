// import React from 'react'
// import styles from '../styles/Footermain.module.css';
// import Link from 'next/link';
// import Image from 'next/image'

// const Footermain = () => {
//   return (
//     <div className={styles.containerfooter}>
//       <h1  className={styles.containerhead}>
//         {"Our Locations"}
//       </h1>
//       <hr/>
//       <div className={styles.footerwrap}>
//       <Link className={styles.containerlink} href="https://goo.gl/maps/BgArtPEpbp2w8zcM6">
//       <p className={styles.containerpara}><Image className={styles.containerimg} src="/location transparent.png" alt="Altius image" height={50} width={50}/>{"HBR Layout"}</p>
//       </Link>
//       <Link className={styles.containerlink} href="https://goo.gl/maps/j2FfSEzFkgDQe5VW9">
//       <p className={styles.containerpara}><Image className={styles.containerimg} src="/location transparent.png" alt="Altius image" height={50} width={50}/>{"Rajajinagar"}</p>
//       </Link>
//       <Link className={styles.containerlink} href="https://goo.gl/maps/TPDV2bRGPK7Wr1aS6">
//       <p className={styles.containerpara}><Image className={styles.containerimg} src="/location transparent.png" alt="Altius image" height={50} width={50}/>{"R.R Nagar"}</p>
//       </Link>
//       </div>
//     </div>
//   )
// }

// export default Footermain


import React from 'react';
import styles from '../styles/Footermain.module.css';
import Link from 'next/link';
import Image from 'next/image'

const Footermain = () => {

  //------------------------ about us-----------------------//

  const redirectUrlvm = 'https://altiushospital.com/our-vision-and-mission/';

  const handleClickvm = () => {
      window.location.href = redirectUrlvm;
  }
  const redirectUrlm = 'https://altiushospital.com/management/';

  const handleClickm = () => {
      window.location.href = redirectUrlm;
  }
  const redirectUrlcsr = 'https://altiushospital.com/corporate-social-responsibility/';

  const handleClickcsr = () => {
      window.location.href = redirectUrlcsr;
  }
  const redirectUrlaw = 'https://altiushospital.com/awards/';

  const handleClickaw = () => {
      window.location.href = redirectUrlaw;
  }
// ------------------useful links-------------------//

  const redirectUrlhelp = 'https://altiushospital.com/altius-cares/';

  const handleClickhelp = () => {
      window.location.href = redirectUrlhelp;
  }
  const redirectUrlap = 'https://altiushospital.com/our-doctors/';

  const handleClickap = () => {
      window.location.href = redirectUrlap;
  }
  

  return (
    <footer className={styles.footer}>
    
    <div className={styles.footerContainerwrappers}>
    
    <Link className={styles.containerlinklogo} href="https://fertilityhospital.vercel.app/">
                            <Image
                                src="/images/logo/Altius-footer.png"
                                alt="My Image"
                                width={350}
                                height={250}
                                className={styles.containerlogo}
                            />
                        </Link>
 
    <div className={styles.footerContainer}>
        <h2 className={styles.containerhead}>{"Head Office"}</h2>
        
        <div className={styles.footerLinks}>
        <p className={styles.containerlinkitems}>
                  {"# 6/63, 59th Cross, 4th Block, Rajajinagar Entrance,"}
                  <br/>{"Opp. MEI Polytechnic, Near Ram Mandir,"}
                  <br/> {" Bengaluru - 560 010"}

                </p>
                <p className={styles.containerlinkitems}>
                  {"+91-8882799799"}
                </p>
                <p className={styles.containerlinkitems}>
                  {"COVID - 19 FREE"}
                </p>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <h2 className={styles.containerheader}>{"Recent Blogs"}</h2>
      
        <div className={styles.footerimgwrap}>
          <Link className={styles.containerlinkitems} href="#">
          <Image
                                src="/images/temp/High-Risk-Pregnancy-Blog-Thumbnail.png"
                                alt="My Image"
                                width={150}
                                height={80}
                                className={styles.containerlogo}
                            />
            <p className={styles.footerpwrap}>{"High-Risk Pregnancy: What You Need to Know 12 May 2023"}</p>
            </Link>
            </div>
            <div className={styles.footerimgwrap}>
          <Link className={styles.containerlinkitems} href="#">
                            <Image
                                src="/images/temp/Laparoscopy-vs.-Open-Surgery-Blog-Thumbnail.png"
                                alt="My Image"
                                width={150}
                                height={80}
                                className={styles.containerlogo}
                            />
          <p className={styles.footerpwrap}>{"Laparoscopy vs. Open Surgery: Which is Better? 04 May 2023"}</p></Link>
        </div>
      </div>

      </div>
      <div className={styles.copyright}>
         <Link className={styles.containerlinkitems} href="#">{" Copyright 2023 © Altius Sripada Hospitals LLP"}</Link>
        </div>
    </footer>
  );
};

export default Footermain;
