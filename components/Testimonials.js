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
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    
    </div>
  );
}

export default TextCarousel;
