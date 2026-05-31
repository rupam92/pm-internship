"use client"

import React from "react";
import { Container } from "react-bootstrap";
// import StateSearchBar from "./StateSearchBar";

const Home = () => {
  return (
    <div className="mb-3 relative overflow-visible z-0 w-full h-[500px] md:h-[500px] bg-[url('/media/home.jpg')] bg-cover bg-center overflow-hidden"
>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <Container className="relative z-10 h-full flex flex-col items-center pt-5 text-center px-4 text-white">
       <h1 className="!font-[700] !text-[26px] md:!text-[52px] mt-5 mb-3 leading-tight">
  Plan Your Dream Wedding With Elegance
</h1>

<p className="max-w-4xl text-[18px] md:text-[20px] text-white leading-relaxed font-[400]  py-2">
  From luxurious venues to unforgettable celebrations, we create magical wedding experiences
  tailored perfectly for your special day.
</p>
        <div className="flex gap-4 mt-4 flex-wrap justify-center">
  <button className="px-6 py-3  !rounded-xl bg-[#b89b7a] text-white font-semibold hover:bg-[#a38565] transition-all duration-300">
    Book Now
  </button>

  <button className="px-2 py-3 !rounded-xl border border-white text-white font-semibold hover:bg-[#a38565] !hover:border-none transition-all duration-300">
    Explore Packages
  </button>
</div>
        {/* <StateSearchBar /> */}
      </Container>
    </div>
  );
};

export default Home;
