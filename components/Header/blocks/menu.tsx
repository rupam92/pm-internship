"use client";

import React from "react";
import MenuData from "../helper/MenuData";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Nav } from "react-bootstrap";

interface MenuProps {
  closeDrawer?: () => void;
}

const Menu = ({ closeDrawer }: MenuProps) => {
  return (
    <div className="bg-white w-full h-full overflow-y-auto">
      {/* MAIN MENU SECTION */}
      <div className="bg-[#F4F6FA] px-4 py-2 mt-1">
        <h3 className="text-[20px] font-semibold text-[#001A4D]">Main Menu</h3>
      </div>
      <div className="px-4 py-2">
        {MenuData.mainMenu.map((menu, index) => (
          <Nav.Link
            key={index}
            href={menu.path}
            className="text-decoration-none"
            onClick={closeDrawer}
          >
            <div className="border-b border-gray-200 py-3">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="text-[17px] font-normal text-[#333]">
                  {menu.titleSmall}
                  <span className="text-[20px] font-semibold ml-1">
                    {menu.titleLarge}
                  </span>
                </span>
              </div>
            </div>
          </Nav.Link>
        ))}
      </div>

      {/* SUB MENU */}
      <div className="w-full mt-2">
        <div className="bg-[#F4F6FA] px-4 py-2">
          <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#001A4D" }}>
            Sub Menu
          </h3>
        </div>
        <div className="px-4 py-4 flex flex-wrap gap-y-3 gap-x-4">
          {MenuData.subMenu.map((item, index) => (
            <Nav.Link
              key={index}
              href={item.path}
              className="subMenu pe-3 text-black text-decoration-none fs-5 fw-normal"
              style={{ borderRight: "1px solid #D8DFE3" }}
              onClick={closeDrawer}
            >
              {item.title}
            </Nav.Link>
          ))}
        </div>
      </div>

      {/* FOLLOW US */}
      <div>
        <div className="bg-[#F4F6FA] px-4 py-2">
          <h3 className="text-[20px] font-semibold text-[#001A4D]">Follow us</h3>
        </div>
        <div className="px-4 py-3 flex items-center gap-4">
          <div className="p-2 bg-[var(--light-brown)] rounded-full">
            <a href=""><FaFacebook className="text-white text-2xl" /></a>
          </div>
          <div className="p-2 bg-[var(--light-brown)] rounded-full">
            <a href=""><FaInstagram className="text-white text-2xl" /></a>
          </div>
          <div className="p-2 bg-[var(--light-brown)] rounded-full">
            <a href=""><FaLinkedin className="text-white text-2xl" /></a>
          </div>
          <div className="p-2 bg-[var(--light-brown)] rounded-full">
            <a href=""><FaYoutube className="text-white text-2xl" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
