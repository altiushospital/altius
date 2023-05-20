import { GraphQLClient } from 'graphql-request';
import React, { useState,useEffect } from 'react';
import styles from '../styles/Slider.module.css'
// import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
// import Form from "./form"



const url="https://api-ap-south-1.hygraph.com/v2/clgfef4yb0cy101t5eon24l0u/master"
const graphcms = new GraphQLClient(url,{
    headers:{
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODE0MDk0MDQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsZ2ZlZjR5YjBjeTEwMXQ1ZW9uMjRsMHUvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImFiZTg3NTVjLWNiZGUtNDVmMS05YzM4LTMwN2VlODcxYTdiNyIsImp0aSI6ImNsZ2ZmcXZrZDBkdWUwMXVnZXV1bTJicHQifQ.LkEn61ojGK3Zuq3lu_i_BVdseQtALChPTd--kAUQAisZXZoEla-TfqW_jSMn4FHi-GJ9DwOXLIg7-a_yFShBXJ_wrHbD5kqicltNZcMV1SA23CYLL-0RResyRgACvXJYpSVYkAUNHY_hmRI48b5C3iWGgStZLK8RGc29pg8csPmWWAGre-dzz1x1XZNTyK14V95dJBiVKTSHtVK14XABdjPhwSY-h-aMO6drAboJMWOjyTfdKSUCm8gz8euLTZTrIY7HXc1fgPsGhBJ8SgUkMcbu0lcsc1skJWf5QXj-N6OlKai4aQoItm9ApuzC9gMcSiRXwPhUz9gIDABhbxt3V76dYTlT9aodYlwC0es1-aO2svepGFqrQ3Afd7lphFSiopIxKodhizs_dLcqHdPG_g7DMlYrojdcCuvgFfNpCC7t9OjiGKIHbCsf46B9hQz0zC1A8CS8gNmuVp7kVk5KJS7Ypdo41-bk17SaV28gghNk78RIBa0Wnm_CxFD8VjdFBC77w9mZMer8zyUSwbnVpGV5RcMLG6qDRkZLJ_speLRBwyZx4NPb_5GzFDKCXXM527rBfzfSqP_4bx0srbHqmtoWskd7si7pG1j7KvLAQDYzvlX9xNQ6R08YRuT36mv6m2pS0wTnXhQJqGkhVL1rbJZeRzZ5gZPSRstXiFuLsOo"
    }
  })

export default function SliderDemo() {
  const [sliders, setCarouselImages] = useState([]);

  useEffect(() => {
    async function fetchCarouselImages() {
      const query = `{
        sliders {
          id
          fertilitytext
          fertilityCarousel{
            url
          }
          
        }
      }`;

      try {
        const { sliders } = await graphcms.request(query);
        setCarouselImages(sliders);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCarouselImages();
  }, []);
  console.log(sliders)

  return (
   
    <div>
     <Carousel className={styles.slider}>
      {!!sliders && Array.isArray(sliders) && sliders.map((image) => (
        <Carousel.Item key={sliders.id} className={styles.sliderItem}>
        
                <Image src={image.fertilityCarousel[0].url} className={styles.carouselimg} key={image.id} alt={image.fertilitytext} height={600} width={1600}/>
                
                {/* <Form/> */}
              
                </Carousel.Item>
        
      ))}
      </Carousel>
    </div>
  );
}
