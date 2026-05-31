"use client";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import LanguageDropdown from "./blocks/LanguageMenu";
import Searchbar from "./blocks/searchbar";
import Menu from "./blocks/menu";
import MenuData from "./helper/MenuData";
import { Offcanvas } from "react-bootstrap";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLocationContext } from "../context/LocationContext";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeaderBottom = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { location: selectedLocation } = useLocationContext();
  const [showLocationModal, setShowLocationModal] = useState(false);
  // when menu is open blocks the body content
  // useEffect(() => {
  //   if (show) {
  //     document.body.style.overflow = "hidden";
  //     document.documentElement.style.overflow = "hidden";
  //   }

  //   // return () => {
  //   //   document.body.style.overflow = "auto";
  //   //   document.documentElement.style.overflow = "auto";
  //   // };
  // }, [show]);

  // Close the menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      setShow(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //  make header sticky
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className="w-full py-4 z-1000 bg-[var(--dark-brown)]"
        style={{ position: isSticky ? "fixed" : "static", top: "0" }}
      >
        <Container className="d-flex justify-content-between align-items-center">
          {/* LEFT AREA */}
          <div className="d-flex align-items-center gap-3">
            {/* MOBILE TOGGLE ICON */}
            <BiMenuAltLeft
              className="text-white d-lg-none cursor-pointer h-8 w-8"
              onClick={() => handleShow()}
            />

            {/* LOGO */}
            <Navbar.Brand className="m-0 p-0">
              <Nav.Link href="/">
                <img src="/logo.png" className="w-32" alt="logo" />
              </Nav.Link>
            </Navbar.Brand>
          </div>

          {/* RIGHT AREA – DESKTOP ONLY */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            {/* SEARCHBAR */}
            <div style={{ width: "260px" }}>
              <Searchbar />
            </div>

            {/* NAV LINKS */}
            <div className="d-flex gap-4 text-sm align-items-center">
              {MenuData.mainMenu.map((item, index) => (
                <div key={index}>
                  <Nav.Link
                    href={item.path}
                    className="text-white text-decoration-none hover:scale-102 transition transform duration-200"
                  >
                    <span className="text-[12px] fw-thin text-light">
                      {item.titleSmall}
                    </span>
                    <br />
                    <span className="text-[14px] fw-bold">{item.titleLarge}</span>
                  </Nav.Link>
                </div>
              ))}
            </div>

            {/* EXPLORE BUTTON */}
            <div
              className="bg-[var(--light-brown)] text-white px-3 py-2 rounded-pill fw-medium  "
              style={{ fontSize: "14px" }}
            >
              {/* <Nav.Link href="/explore">Explore Ecosystem</Nav.Link> */}
             <Nav.Link href="/BookNow">Book Now</Nav.Link>
            </div>

            {/* LANGUAGE DROPDOWN */}
            {/* <LanguageDropdown/> */}

    
          </div>

          {/* MOBILE EXPLORE BUTTON */}
          <div
            className="bg-[var(--light-brown)] text-white px-3 py-2 rounded-pill fw-semibold d-lg-none me-md-0 me-3"
            style={{ fontSize: "12px" }}
          > <Nav.Link href="/BookNow">Book Now</Nav.Link>
            {/* Explore Ecosystem */}
          </div>
        </Container>

        {/* MOBILE SEARCHBAR */}
        {/* <Container className="d-lg-none mt-3">
          <Searchbar />
        </Container> */}
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        scroll={false}
        backdrop={true}
      >
        <Offcanvas.Header closeButton className="custom-close-btn">
          <Offcanvas.Title className="w-100 flex justify-between mr-5">
            {
              <Nav.Link href="/">
                <img src="/logo.png" alt="" className="w-30 h-8" />
              </Nav.Link>
            }
            {/* <LanguageDropdown /> */}
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="p-0">
          <Menu closeDrawer={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>

      {/* <LocationModal
        show={showLocationModal}
        onClose={() => setShowLocationModal(false)}
      /> */}
    </>
  );
};

export default HeaderBottom;
