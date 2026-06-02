'use client'

import { Container, Row, Col } from "react-bootstrap";

const steps = [
  {
    step: "01",
    icon: "👤",
    title: "Create Your Profile",
    desc: "Sign up in under 2 minutes. Add your skills, education, and career preferences to personalise your feed.",
    color: "#EFF6FF",
    accent: "#0D6EFD",
  },
  {
    step: "02",
    icon: "🔍",
    title: "Discover Opportunities",
    desc: "Browse internships, jobs, and mentors filtered by role, location, stipend, and skills that match you.",
    color: "#F5F3FF",
    accent: "#8B5CF6",
  },
  {
    step: "03",
    icon: "📝",
    title: "Apply in One Click",
    desc: "Submit applications directly through the platform. No redirects, no extra forms — just a single tap.",
    color: "#FFF7ED",
    accent: "#F59E0B",
  },
  {
    step: "04",
    icon: "🏁",
    title: "Get Hired & Grow",
    desc: "Receive offers, connect with mentors, and track your career journey — all from your personal dashboard.",
    color: "#ECFDF5",
    accent: "#10B981",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-5" style={{ background: "#f8f9ff" }}>
      <Container>

        {/* Header */}
        <div className="text-center mb-5">
          <span
            className="d-inline-block px-3 py-1 rounded-pill mb-3 fw-semibold"
            style={{ background: "#F5F3FF", color: "#8B5CF6", fontSize: "0.85rem" }}
          >
            ⚡ How It Works
          </span>
          <h2 className="fw-bold" style={{ fontSize: "2rem", color: "#1a1a2e" }}>
            From Sign-up to Hired in 4 Steps
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 480 }}>
            The simplest path from student to professional — no hustle, no confusion.
          </p>
        </div>

        <Row className="gy-4 position-relative">
          {/* connector line on desktop */}
          <div
            className="d-none d-lg-block position-absolute"
            style={{
              top: "88px",
              left: "12.5%",
              width: "75%",
              height: 2,
              background: "linear-gradient(90deg, #0D6EFD, #8B5CF6, #F59E0B, #10B981)",
              zIndex: 0,
              opacity: 0.3,
            }}
          />

          {steps.map((s) => (
            <Col key={s.step} xs={12} sm={6} lg={3}>
              <div
                className="h-100 rounded-4 p-4 text-center position-relative"
                style={{
                  background: "#fff",
                  border: `1px solid ${s.accent}22`,
                  zIndex: 1,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 14px 32px ${s.accent}22`;
                  e.currentTarget.style.borderColor = s.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = `${s.accent}22`;
                }}
              >
                {/* Step number badge */}
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 fw-bold"
                  style={{
                    width: 36, height: 36, fontSize: "0.8rem",
                    background: s.accent, color: "#fff",
                    boxShadow: `0 4px 12px ${s.accent}55`,
                  }}
                >
                  {s.step}
                </div>

                {/* Icon */}
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mx-auto mb-3"
                  style={{ width: 64, height: 64, background: s.color, fontSize: "1.8rem" }}
                >
                  {s.icon}
                </div>

                <h5 className="fw-bold mb-2" style={{ color: "#1a1a2e" }}>{s.title}</h5>
                <p className="text-muted mb-0" style={{ fontSize: "0.88rem", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}
