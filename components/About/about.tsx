"use client";

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from 'react-icons/fa';
import { GiCheckMark } from "react-icons/gi";
const stats = [
  {
    number: "500+",
    title: "Internships",
  },
  {
    number: "120+",
    title: "Companies",
  },
  {
    number: "50+",
    title: "Mentors",
  },
  {
    number: "10K+",
    title: "Students",
  },
];

const About = () => {
  return (
    <div className="bg-[#66b3ff29] text-black min-h-screen  overflow-hidden">
      {/* HERO SECTION */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            
            {/* LEFT CONTENT */}
            <Col lg={6} className="mb-5 mb-lg-0">
              <span className="bg-blue/10 px-3 py-2 rounded-pill">
                About Us
              </span>

              <h1 className="fw-bold display-5 mt-4 leading-tight">
                Empowering Students To Build Their Future
              </h1>

              <p className="text-muted mt-4 text-[17px] leading-relaxed">
                We connect students with top companies, internships,
                mentors, and real-world opportunities to help them grow
                their careers faster.
              </p>

              <div className="flex gap-3 mt-4 flex-wrap">
                <Button className="bg-white text-black px-4 py-3 rounded-xl fw-semibold rounded !border-none"
                href="/internships">
                  Explore Internships
                </Button>

                <Button className="bg-transparent rounded border-2 border-white px-4 py-3 rounded-xl text-muted fw-semibold"
                href="/contact">
                  Contact Us
                </Button>
              </div>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6}>
              <div className="relative">
                <img
                  src="/about/about.png"
                  alt="about"
                  className="w-full rounded-4 shadow-lg object-cover h-[450px]"
                />

                {/* Floating Card */}
                {/* <div className="absolute bottom-4 left-4 bg-white text-black px-4 py-3 rounded-4 shadow-lg">
                  <h3 className="fw-bold mb-0">10K+</h3>
                  <p className="mb-0 text-muted">Students Connected</p>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* STATS SECTION */}
      <section className="py-5">
        <Container>
          <Row>
            {stats.map((item, index) => (
              <Col md={3} sm={6} key={index} className="mb-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-4 p-4 text-center h-full">
                  <h2 className="fw-bold display-6">{item.number}</h2>
                  <p className="text-muted mb-0">{item.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* MISSION SECTION */}
      <section className="pb-5">
        <Container>
          <Row className="align-items-center">
            
            <Col lg={6} className="mb-5 mb-lg-0">
              <img
                src="/about/mission.png"
                alt="mission"
                className="w-full rounded-4 object-cover h-[400px] shadow-lg"
              />
            </Col>

            <Col lg={6}>
              <span className="bg-white/10 px-3 py-2 rounded-pill text-sm">
                Our Mission
              </span>

              <h2 className="fw-bold mt-4">
                Helping Students Gain Real-World Experience
              </h2>

              <p className="text-muted mt-4 leading-relaxed">
                Our mission is to bridge the gap between education and
                industry by providing practical internships, expert
                mentorship, and career-building opportunities.
              </p>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <GiCheckMark />
                  <p className="mb-0">Industry-level internships</p>
                </div>

                <div className="flex items-center gap-2">
                   <GiCheckMark />
                  <p className="mb-0">Guidance from expert mentors</p>
                </div>

                <div className="flex items-center gap-2">
                   <GiCheckMark />
                  <p className="mb-0">Career growth opportunities</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="py-5">
        <Container>
          <div className="bg-white text-black rounded-5 p-5 text-center shadow-lg">
            <h2 className="fw-bold">
              Ready To Start Your Career Journey?
            </h2>

            <p className="mt-3 text-muted">
              Join thousands of students discovering internships and
              mentorship opportunities.
            </p>

            <Button className="bg-black text-white px-5 py-3 rounded border-0 mt-3 fw-semibold"
            href="/internships">
              Get Started
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;