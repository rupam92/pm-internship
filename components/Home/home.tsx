"use client"

import React from "react";
import { Container } from "react-bootstrap";

const floatingCards = [
  {
    icon: "🏢",
    title: "Internships",
    subtitle: "500+ Openings",
    top: "10%",
    right: "20%",
    delay: "0s",
  },
  {
    icon: "🎓",
    title: "Mentors",
    subtitle: "Expert Guidance",
    top: "35%",
    right: "85%",
    delay: "1s",
  },
  {
    icon: "⭐",
        title: "Companies",
    subtitle: "Top Startups",
    top: "60%", // increase this
    right: "20%",
    delay: "2s",

  },
];

const Home = () => {
  return (
    <>
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0px);   }
          50%  { transform: translateY(-12px); }
          100% { transform: translateY(0px);   }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        .float-card {
          animation: floatUp 3.5s ease-in-out infinite, fadeSlideIn 0.7s ease forwards;
          opacity: 0;
        }
      `}</style>

      <div className="mb-3 relative z-0 w-full h-[400px] bg-[url('/home/bg.png')] bg-cover bg-center overflow-hidden">

        <Container className="w-full h-full flex flex-row items-start px-3">

          {/* LEFT — text content */}
          <div className="flex flex-col justify-start text-white w-full ">
            <h1 className="font-[700] mt-5 pt-5 leading-tight" style={{ maxWidth: "480px" }}>
              Find the Best Internships & Launch Your Career
            </h1>
            <p className="text-[16px] md:text-[20px] leading-relaxed py-2" style={{ maxWidth: "350px" }}>
              Connect with top companies, gain real-world experience, and grow with expert mentors.
            </p>
          </div>

          {/* RIGHT — floating animated cards */}
          <div className="hidden md:block relative w-2/4 h-full">
            {floatingCards.map((card) => (
              <div
                key={card.title}
                className="float-card absolute bg-white/15 backdrop-blur-sm border g-4 border-white/30 rounded-2xl px-4 py-2 text-white shadow-lg"
                style={{
                  top: card.top,
                  right: card.right,
                  animationDelay: card.delay,
                  minWidth: "180px",
                }}
              >
                <div className="text-3xl mb-1">{card.icon}</div>
                <div className="font-bold text-[17px]">{card.title}</div>
                <div className="text-[13px] text-white/80">{card.subtitle}</div>
              </div>
            ))}
          </div>

        </Container>
      </div>
    </>
  );
};

export default Home;
