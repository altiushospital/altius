import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Sliderinfrastructure.module.css'; // Import custom CSS styles

const Sliderinfrastructure = () => {
  const images = [
    "/images/temp/bannertemp.webp",
    "/images/temp/bannertemp.webp",
    "/images/temp/bannertemp.webp",
    "/images/temp/bannertemp.webp",
    "/images/temp/bannertemp.webp",
    "/images/temp/bannertemp.webp",
    "/images/temp/bannertemp.webp",
    "/images/temp/bannertemp.webp",
    "/images/temp/bannertemp.webp",
    "/images/temp/bannertemp.webp",
    "/images/temp/bannertemp.webp",
    "/images/temp/bannertemp.webp",
  ];

  const items = [];

  for (let i = 0; i < images.length; i += 2) {
    const item = (
      <Carousel.Item key={i}>
        <div className={`d-flex justify-content-center ${styles.carouselItem}`}>
          <div className={`carousel-image ${styles.carouselImage}`}>
            <Image src={images[i]} alt={`Slide ${i}`} width={600} height={400} />
          </div>
          {i + 1 < images.length && (
            <div className={`carousel-image ${styles.carouselImage}`}>
              <Image src={images[i + 1]} alt={`Slide ${i + 1}`} width={600} height={400} />
            </div>
          )}
        </div>
      </Carousel.Item>
    );

    items.push(item);
  }

  return (
    <>
    <Carousel interval={null} indicators={true} prevIcon={<span className={`carousel-control-prev-icon ${styles.carouselControlIcon}`} />} nextIcon={<span className={`carousel-control-next-icon ${styles.carouselControlIconleft}`} />}>
      {items}
    </Carousel>
                <div className={styles.containerbtnwrap}>
                <button className={styles.morebtn}>{"Visit Today →"}</button>
                </div>
                </>
  );
};

export default Sliderinfrastructure;
