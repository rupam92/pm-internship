"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaCheckCircle, FaGlobeAmericas } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const languages = [
  { code: "en-us", label: "English (US)", iconURL: "/media/countryIcons/us.png" },
  { code: "en-UK", label: "English (UK)", iconURL: "/media/countryIcons/uk.png" },
  { code: "hi", label: "Hindi", iconURL: "/media/countryIcons/india.png" },
  { code: "fr", label: "French", iconURL: "/media/countryIcons/france.png" },
  { code: "de", label: "German", iconURL: "/media/countryIcons/germany.png" },
  { code: "es", label: "Spanish", iconURL: "/media/countryIcons/spain.png" },
  { code: "ar", label: "Arabic", iconURL: "/media/countryIcons/uae.png" },
  { code: "ja", label: "Japanese", iconURL: "/media/countryIcons/japan.png" },
  { code: "zh", label: "Chinese", iconURL: "/media/countryIcons/china.png" },
  { code: "it", label: "Italian", iconURL: "/media/countryIcons/italy.png" },
];

const LanguageDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("en-us");
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === selected);

  // Load saved language
  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved && languages.find((l) => l.code === saved)) {
      setSelected(saved);
    }
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lng: string) => {
    setSelected(lng);
    localStorage.setItem("language", lng);
    setOpen(false);
  };

  return (
    <div ref={languageDropdownRef} className="relative inline-block">
      {/* BUTTON */}
      <div className="flex items-center w-20 h-10 relative">
        <div className="bg-[var(--light-brown)] w-8 h-8 flex items-center justify-center rounded-full absolute left-3 z-10">
          <FaGlobeAmericas className="text-white" />
        </div>

        <button
          className="absolute end-0 w-14 flex items-center fw-semibold justify-end !bg-[#fff] text-[var(--light-brown)] px-1 py-1 shadow-md"
          onClick={() => setOpen(!open)}
          style={{ fontSize: "11px", borderRadius: "15px" }}
        >
          <span>{currentLang?.code?.split("-")[0].toUpperCase() || "EN"}</span>
          <IoChevronDown size={14} />
        </button>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div
          className="absolute right-0 mt-3 w-60 bg-white shadow-xl rounded-2xl p-2 z-50 border border-gray-100"
        >
          <div className="w-4 h-4 border-top border-start bg-white rotate-45 mx-48 -mt-4"></div>

          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="flex justify-between items-center px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <img
                  src={lang.iconURL}
                  alt={lang.label}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span className="text-sm text-black font-medium">{lang.label}</span>
              </div>

              {selected === lang.code && (
                <FaCheckCircle className="text-[#001A4D] w-4" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
