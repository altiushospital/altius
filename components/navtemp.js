import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import styles from '../styles/Navtemp.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Transition } from "@headlessui/react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from 'next/image'

const Navbart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className={styles.nav}>
      <div className="logo">
        <h1>Logo</h1>
      </div>

      <div className={`menu ${isOpen ? 'show' : ''}`}>
        <ul className={styles.ul}>
          <li>
            <Link href="#">About Us</Link>
            <div  className={styles.dropdown}>
              <ul  className={styles.grid}>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="#">Specialities</Link>
            <div  className={styles.dropdown}>
              <ul  className={styles.grid}>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="#">Care Services</Link>
            <div  className={styles.dropdown}>
              <ul  className={styles.grid}>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="#">Value Adds</Link>
            <div  className={styles.dropdown}>
              <ul  className={styles.grid}>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="#">Locations</Link>
            <div  className={styles.dropdown}>
              <ul  className={styles.grid}>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="#">Resources</Link>
            <div  className={styles.dropdown}>
              <ul  className={styles.grid}>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <button className="toggle-button" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
    </>
  );
};

export default Navbart;
