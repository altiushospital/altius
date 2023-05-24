import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import React from 'react';
import styles from '../styles/Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Transition } from "@headlessui/react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from 'next/image'

export default function TreatmentsDropdown() {
    const [selectedOption, setSelectedOption] = useState('male');
    const [keepOpen, setKeepOpen] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setKeepOpen(true);
    };


    const redirectUrlC = 'https://altiushospital.com/contact-us/';

    const handleClickC = () => {
        window.location.href = redirectUrlC;
    }
    const redirectUrlA = 'https://altiushospital.com/altius-cares/';

    const handleClickA = () => {
        window.location.href = redirectUrlA;
    }

    // ---------------about us-----------------

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

    // -------------------Treatments-----------------------//

        // ..................MALE....................//

    const redirectUrlandro = 'https://altius-fertility-hospital.vercel.app/treatments/male/andrology';

    const handleClickandro = () => {
        window.location.href = redirectUrlandro;
    }
    const redirectUrlcasa = 'https://altius-fertility-hospital.vercel.app/treatments/male/casa';

    const handleClickcasa = () => {
        window.location.href = redirectUrlcasa;
    }
    const redirectUrlsf = 'https://altius-fertility-hospital.vercel.app/treatments/male/semen-freezing';

    const handleClicksf = () => {
        window.location.href = redirectUrlsf;
    }
    const redirectUrlvc = 'https://altius-fertility-hospital.vercel.app/treatments/male/varicocele';

    const handleClickvc = () => {
        window.location.href = redirectUrlvc;
    }
    const redirectUrlsd = 'https://altius-fertility-hospital.vercel.app/treatments/male/sperm-donation';

    const handleClicksd = () => {
        window.location.href = redirectUrlsd;
    }

    const redirectUrltp = 'https://altius-fertility-hospital.vercel.app/treatments/male/tesa-pesa';

    const handleClicktp = () => {
        window.location.href = redirectUrltp;
    }
    // ..................FEMALE....................//
    const redirectUrled = 'https://altius-fertility-hospital.vercel.app/treatments/female/egg-donation';

    const handleClicked = () => {
        window.location.href = redirectUrled;
    }
    const redirectUrlemd = 'https://altius-fertility-hospital.vercel.app/treatments/female/embryo-donation';

    const handleClickemd = () => {
        window.location.href = redirectUrlemd;
    }
    const redirectUrlfet = 'https://altius-fertility-hospital.vercel.app/treatments/female/fet';

    const handleClickfet = () => {
        window.location.href = redirectUrlfet;
    }
    const redirectUrlh = 'https://altius-fertility-hospital.vercel.app/treatments/female/hysteroscopy';

    const handleClickh = () => {
        window.location.href = redirectUrlh;
    }
    const redirectUrlicsi = 'https://altius-fertility-hospital.vercel.app/treatments/female/icsi';

    const handleClickicsi = () => {
        window.location.href = redirectUrlicsi;
    }
    const redirectUrliui = 'https://altius-fertility-hospital.vercel.app/treatments/female/iui';

    const handleClickiui = () => {
        window.location.href = redirectUrliui;
    }
    const redirectUrlivf = 'https://altius-fertility-hospital.vercel.app/treatments/female/ivf';

    const handleClickivf = () => {
        window.location.href = redirectUrlivf;
    }
    const redirectUrllp = 'https://altius-fertility-hospital.vercel.app/treatments/female/laparoscopy';

    const handleClicklp = () => {
        window.location.href = redirectUrllp;
    }
    const redirectUrloi = 'https://altius-fertility-hospital.vercel.app/treatments/female/oi-it';

    const handleClickoi = () => {
        window.location.href = redirectUrloi;
    }
    const redirectUrlsg = 'https://altius-fertility-hospital.vercel.app/treatments/female/surrogacy';

    const handleClicksg = () => {
        window.location.href = redirectUrlsg;
    }


    // ..................ADVANCED....................//
    const redirectUrler = 'https://altius-fertility-hospital.vercel.app/treatments/advanced/endometrial-rejuvenation';

    const handleClicker = () => {
        window.location.href = redirectUrler;
    }
    const redirectUrlmacs = 'https://altius-fertility-hospital.vercel.app/treatments/advanced/macs';
    
    const handleClickmacs = () => {
        window.location.href = redirectUrlmacs;
    }
    const redirectUrlpc = 'https://altius-fertility-hospital.vercel.app/treatments/advanced/picsi';
    
    const handleClickpc = () => {
        window.location.href = redirectUrlpc;
    }
    const redirectUrlps = 'https://altius-fertility-hospital.vercel.app/treatments/advanced/preservation';
    
    const handleClickps = () => {
        window.location.href = redirectUrlps;
    }
    const redirectUrlst = 'https://altius-fertility-hospital.vercel.app/treatments/advanced/sequential-transfer';
    
    const handleClickst = () => {
        window.location.href = redirectUrlst;
    }
    //-----------------Location-------------------//


    const redirectUrlhbr = 'https://altius-tan.vercel.app/hbr-layout';
    
    const handleClickhbr = () => {
        window.location.href = redirectUrlhbr;
    }
    const redirectUrlr = 'https://altius-tan.vercel.app/rajajinagar';
    
    const handleClickr = () => {
        window.location.href = redirectUrlr;
    }
    const redirectUrlrr = 'https://altius-tan.vercel.app/rajarajeshwari-nagar';
    
    const handleClickrr = () => {
        window.location.href = redirectUrlrr;
    }
    const redirectUrly = 'https://altius-tan.vercel.app/yelahanka';
    
    const handleClicky = () => {
        window.location.href = redirectUrly;
    }
    const redirectUrldoc = ' https://altius-tan.vercel.app/doctor';

    const handleClickdoc = () => {
        window.location.href = redirectUrldoc;
    }


    // ------------- resources--------------//

    const redirectUrlb = 'https://altiushospital.com/blog2/';

    const handleClickb = () => {
        window.location.href = redirectUrlb;
    }
    const redirectUrlv = 'https://altiushospital.com/video-gallery/';

    const handleClickv = () => {
        window.location.href = redirectUrlv;
    }




    return (
        <div className={styles.containernav}>
            <Navbar  expand="lg" >
                <Container className={styles.containerwrap}>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                   <div className={styles.logowrap}>
                        <Link className={styles.containerlinklogo} href="https://altius-tan.vercel.app/">
                            <Image
                                src="/images/logo/Altius-logo.png"
                                alt="My Image"
                                width={150}
                                height={180}
                                className={styles.containerlogo}
                            />
                        </Link>
                    </div>
                    <Navbar bg="light" expand="lg" >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navwrap} />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className={styles.mrauto}>
                                <NavDropdown className={styles.containertitle} title="About us" id="basicnavdropdown">
                                <div className={styles.containerItemgridding}>
                                    <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Dr.B Ramesh</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Management</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickvm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.2">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Vission & Mission
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Careers</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickcsr} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.3">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        CSR
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Major News</NavDropdown.Item>

                                    <NavDropdown.Item onClick={handleClickaw} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.4">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Awards
                                    </NavDropdown.Item>
                                    </div>
                                </NavDropdown>
                                <NavDropdown className={styles.containertitle} title="Specialities" id="basicnavdropdown">
                                <div className={styles.containerItemwrap}>
                                    <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Cardiology</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Neuro Sciences</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickvm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.2">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Nephrology
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Endocrinology</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickcsr} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.3">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Cosmetology &<br/> Plastic Surgery
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                       Gastroenterology</NavDropdown.Item>

                                    <NavDropdown.Item onClick={handleClickaw} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.4">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Rheumatology
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Urology</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        ENT</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickvm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.2">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                       Oncology
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Dermatology</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickcsr} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.3">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Fertility Treatment
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Internal Medicine</NavDropdown.Item>

                                    <NavDropdown.Item onClick={handleClickaw} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.4">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        General & 3D <br/>Laparoscopic Surgery
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickaw} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.4">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Orthopaedics
                                    </NavDropdown.Item>
                                    </div>
                                </NavDropdown>
                                <NavDropdown className={styles.containertitle} title="Care Services" id="basicnavdropdown">
                                <div className={styles.containerItemgridding}>
                                    <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        24-7 Emergency</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        CT scan X-ray</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickvm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.2">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Dialysis
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        ICU & NICU</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickcsr} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.3">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Interventional Radiology
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Labaratory Medicine</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Labaratory Services</NavDropdown.Item>

                                    <NavDropdown.Item onClick={handleClickaw} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.4">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Pharmacy
                                    </NavDropdown.Item>
                                    </div>
                                </NavDropdown>
                                {/*---------------- Value Adds-------------- */}
                                <NavDropdown className={styles.containertitle} title="Value Adds" id="basic-nav-dropdown">
                                <div className={styles.containerItemgridding}>
                                    <NavDropdown.Item className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Altius Cares
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.2">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Financing Options
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Zero cost EMI
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.2">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Fund Raising
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Pain Clinic
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.2">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Home Care Service
                                    </NavDropdown.Item>
                                    </div>


                                </NavDropdown>

                                {/*---------------- Locations-------------- */}

                                <NavDropdown className={styles.containertitle} title="Locations" id="basicnavdropdown">
                                <div className={styles.containerItemgridding}>
                                    <NavDropdown.Item onClick={handleClickhbr} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        HBR Layout</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleClickr} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Rajajinagar</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickrr} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.2">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Rajarajeshwari Nagar
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClicky} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Yelahanka</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickdoc} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.3">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        All LOcations
                                    </NavDropdown.Item>
                                    </div>
                                </NavDropdown>
                                {/*---------------- Resources-------------- */}
                                <NavDropdown className={styles.containertitle} title="Resources" id="basic-nav-dropdown">
                                    <div></div>
                               
                                    <NavDropdown.Item onClick={handleClickb} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.1">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Blogs
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickv} className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.2">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        News-Letter
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className={styles.containerItemlist} id="navbar-dropdown-item" href="#action/3.4">
                                        <Image
                                            src="/images/navbar/Navbar Icon Temporary.png"
                                            alt="My Image"
                                            width={30}
                                            height={30}
                                            className={styles.containerimg}
                                        />
                                        
                                        Video Gallery
                                    </NavDropdown.Item>



                                    
                                </NavDropdown>
                            </Nav>

                        </Navbar.Collapse>
                        <style jsx global>{`
                            #navbar-dropdown-item {
                                display: flex;
                                align-items: center;
                            }

                            #navbar-dropdown-item img {
                                margin-right: 8px;
                            }
                        `}</style>
                        <div className={styles.containerbtnwrappers}>
                            <div className={styles.containerbtnwrap}>
                                <button onClick={handleClickC} className={styles.containerbtns}>Get in touch</button>
                            </div>
                            <div className={styles.containerbtnwrap}>
                                <button onClick={handleClickA} className={styles.containerbtns}>Call 8882799799</button>
                            </div>
                        </div>
                    </Navbar>

                </Container>
            </Navbar>
        </div>
    );
}





