"use client";

import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import mobileMenuData from "./helper/MenuData";
import { FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="headerTop sticky">

      <div className="bg-[var(--light-brown)] hidden md:block w-full">
        <Navbar expand="lg" className="p-0">
          
          {/* Use container-fluid to get full width */}
          <Container className="px-4 py-2" style={{ fontSize: "15px" }}>
            
            <div className="flex items-center justify-between w-full">
              
              {/* LEFT MENU */}
              <div className="flex flex-wrap items-center gap-3 text-white">
                {mobileMenuData.subMenu.map((item, index) => (
                  <Nav.Link key={index} href={item.path} className="text-white p-0" style={{fontSize:"13px"}}>
                    {item.title}
                    {index !== mobileMenuData.subMenu.length - 1 && (
                      <span className="ml-3">|</span>
                    )}
                  </Nav.Link>
                ))}
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-2 cursor-pointer">
                {[ FaInstagram, FaPhoneAlt, FaYoutube].map(
                  (Icon, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 flex items-center justify-center rounded-full hover:scale-102 transition transform duration-200"
                      style={{ background: "white" }}
                    >
                      <Icon className="text-[var(--light-brown)] text-sm" />
                    </div>
                  )
                )}
              </div>

            </div>

          </Container>
        </Navbar>
      </div>

    </div>
  );
};

export default HeaderTop;
