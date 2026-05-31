"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
      <div className="bg-white rounded-full flex items-center px-3 h-10 w-full">
        <CiSearch className="text-[20px] text-black opacity-20" />
        <input
          type="text"
          placeholder="Search....."
          onChange={(e) => setQuery(e.target.value)}
          className="w-full outline-none px-2 text-black opacity-50"
          style={{ fontSize: "12px" }}
        />
      </div>
    </div>
  );
};

export default Searchbar;
