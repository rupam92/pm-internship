'use client'

import { Container, Row, Col } from "react-bootstrap";

const stats = [
  { value: "50k+",  label: "Students Placed",      icon: "🎓" },
  { value: "2,400+",label: "Partner Companies",     icon: "🏢" },
  { value: "1,200+",label: "Active Internships",    icon: "📋" },
  { value: "98%",   label: "Satisfaction Rate",     icon: "⭐" },
];

const benefits = [
  {
    icon: "🚀",
    title: "Launch Your Career Fast",
    desc: "Skip the guesswork. Our curated listings put you in front of companies that are actively looking for fresh talent like you.",
    color: "#EFF6FF",
    accent: "#0D6EFD",
  },
  {
    icon: "🤝",
    title: "1:1 Mentor Guidance",
    desc: "Get paired with industry professionals who've walked the path. Real advice, real connections, real results.",
    color: "#FFF7ED",
    accent: "#F59E0B",
  },
  {
    icon: "🎯",
    title: "Skill-Matched Roles",
    desc: "Our smart filters surface only the opportunities that fit your skills, experience level, and career goals.",
    color: "#F5F3FF",
    accent: "#8B5CF6",
  },
  {
    icon: "🌐",
    title: "Remote & Hybrid Options",
    desc: "Work from anywhere. Browse remote-first roles or find hybrid positions near you across 50+ Indian cities.",
    color: "#ECFDF5",
    accent: "#10B981",
  },
  {
    icon: "📈",
    title: "Track Your Applications",
    desc: "A personal dashboard to manage every application, follow up on interviews, and never miss a deadline.",
    color: "#FFF0F3",
    accent: "#EF4444",
  },
  {
    icon: "🏆",
    title: "Certified Experience",
    desc: "Earn completion certificates from partner companies that carry real weight on your resume and LinkedIn.",
    color: "#F0FDFA",
    accent: "#0F766E",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-5" style={{ background: "#ffffff" }}>
      <Container>

        {/* Stats strip */}
        <div
          className="rounded-4 mb-5 py-4 px-3"
          style={{ background: "linear-gradient(135deg, #0D6EFD 0%, #7C3AED 100%)" }}
        >
          <Row className="gy-3 text-center text-white">
            {stats.map((s) => (
              <Col key={s.label} xs={6} md={3}>
                <div style={{ fontSize: "1.8rem" }}>{s.icon}</div>
                <div className="fw-bold" style={{ fontSize: "1.8rem", lineHeight: 1.1 }}>{s.value}</div>
                <div style={{ fontSize: "0.85rem", opacity: 0.85 }}>{s.label}</div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Header */}
        <div className="text-center mb-5">
          <span
            className="d-inline-block px-3 py-1 rounded-pill mb-3 fw-semibold"
            style={{ background: "#EFF6FF", color: "#0D6EFD", fontSize: "0.85rem" }}
          >
            ✨ Why Choose Us
          </span>
          <h2 className="fw-bold" style={{ fontSize: "2rem", color: "#1a1a2e" }}>
            Everything You Need to Succeed
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 500 }}>
            From finding the right opportunity to landing the role — we've built every tool you need in one place.
          </p>
        </div>

        {/* Benefit cards */}
        <Row className="gy-4">
          {benefits.map((b) => (
            <Col key={b.title} xs={12} md={6} lg={4}>
              <div
                className="h-100 rounded-4 p-4"
                style={{
                  background: b.color,
                  border: `1px solid ${b.accent}22`,
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = `0 12px 28px ${b.accent}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                  style={{ width: 52, height: 52, background: "#fff", fontSize: "1.5rem", boxShadow: `0 4px 12px ${b.accent}33` }}
                >
                  {b.icon}
                </div>
                <h5 className="fw-bold mb-2" style={{ color: "#1a1a2e" }}>{b.title}</h5>
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}
