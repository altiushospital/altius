import { gql, GraphQLClient } from 'graphql-request'

import TreatmentsDropdown from '@/components/Navbar'
import Navbart from '@/components/navtemp'
import CarouselSlider from '@/components/Carousel'
import Banner from '@/components/Banner'
import Banner2 from '@/components/Banner2'
import Keypoints from '@/components/Keypoints'
import Sliderinfrastructure from '@/components/Sliderinfrastructure'
import TextCarousel from '@/components/Testimonials'
import Youtube from '@/components/Youtube'
import Location from '@/components/Location'
import Aboutus from '@/components/Aboutus'
import BannerDoc from '@/components/Doctor'
import Lilfeet from '@/components/Lilfeet'
import Form from '@/components/Form'
import Footermain from '@/components/Footermain'

import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

import React from "react";

import 'swiper/swiper.min.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from '../styles/DoctorCarousel.module.css'

import 'bootstrap/dist/css/bootstrap.min.css'



const Home = () => {


  return (

    <div>
      
      <TreatmentsDropdown/>
      <CarouselSlider/>
       <Banner/>
       <Banner2/>
       <Keypoints/>
      <BannerDoc />
      <Sliderinfrastructure/>
      <TextCarousel/>
      <Lilfeet/>
      <Form/>
      <Location/>
      <Footermain />


    </div>
  )
}


export default Home


