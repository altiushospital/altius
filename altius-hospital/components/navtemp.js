import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Navtemp.module.css';
const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title={
            <span>
              
              {' About Us'}
            </span>
          } id="about-us-dropdown">
            <div>
              <NavDropdown.Item href="#action/3.1" className="navbar-dropdown-item">
                <Image src="/images/navbar/Navbar Icon Temporary.png" alt="About Us" width={20} height={20} />
                Item 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="navbar-dropdown-item">
                <Image src="/images/navbar/Navbar Icon Temporary.png" alt="About Us" width={20} height={20} />
                Item 2
              </NavDropdown.Item>
            </div>
          </NavDropdown>

          <NavDropdown title={
            <span>
              
              {' Specialties'}
            </span>
          } id="specialties-dropdown">
            <div>
              <NavDropdown.Item href="#action/3.3" className="navbar-dropdown-item">
                Item 3
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="navbar-dropdown-item">
                Item 4
              </NavDropdown.Item>
            </div>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>

      <style jsx global>{`
        .navbar-dropdown-item {
          display: flex;
          align-items: center;
        }

        .navbar-dropdown-item img {
          margin-right: 8px;
        }
      `}</style>
    </Navbar>
  );
};

export default MyNavbar;
