import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/TextCarousel.module.css';

function TextCarousel() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.headwrapper}>{"Patient Stories"}</h1>
    <Carousel variant="dark" className={styles.wrap}>
      <Carousel.Item>
        <div className={styles.containerlogowrap}>
          <div className={styles.containerlogo}>
            <Image
              src="/images/logo/Altius-logo.png"
              alt="My Image"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>
          <Carousel.Caption className={styles.caption}>
            <p>
						  {"Dr.B.Ramesh is a very experienced and calm doctor. He listened to the problem I was going through and suggested a few tests. He explained the possibilities and all the tests that may be required if the first set of tests doesn't tell us the issue. He identified the issue and solved the case. Definitely recommended."}
            </p>
            <h5>Mrs. Neekarika Gudala</h5>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.containerlogowrap}>
          <div className={styles.containerlogo}>
            <Image
              src="/images/logo/Altius-logo.png"
              alt="My Image"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>
          <Carousel.Caption className={styles.caption}>
            <p>{"I would like to express my sincere appreciation to the hospital and staff members for the devoted service. Special thanks to Dr. Ramesh. All were very supportive and promptly came whenever needed to me and my baby and was regularly mentioned at all aspects. Also would like to thank all the cleaning staff who have taken utmost care of our room. We are really happy and impressed to the service given by Altius Rajajinagar."}</p>
            <h5>{"Vandana Rao"}</h5>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.containerlogowrap}>
          <div className={styles.containerlogo}>
            <Image
              src="/images/logo/Altius-logo.png"
              alt="My Image"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>
          <Carousel.Caption className={styles.caption}>
            <p>{"Hands down, the greatest hospital experience ever. My wife had a hysterectomy and this was the most attentive, caring and well staffed hospital I have ever seen. The small number of rooms affords excellent care and maximum attention. All rooms are private, large and well equipped. Thank you all for taking such good care of my wife!!"}</p>
            <h5>{"Mrs. Veena Kumar"}</h5>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    
    </div>
  );
}

export default TextCarousel;
