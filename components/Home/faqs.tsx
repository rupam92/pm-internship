'use client'

import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "Is the platform free to use for students?",
    a: "Yes, completely free. Students can browse listings, apply to internships and jobs, and access basic mentor profiles at no cost. Premium mentorship sessions are available as an optional upgrade.",
  },
  {
    q: "How do I get matched with a mentor?",
    a: "After you complete your profile with your skills and goals, our matching algorithm surfaces mentors relevant to your field. You can also browse all mentors and book a session directly.",
  },
  {
    q: "Are the internships paid?",
    a: "Most listed internships include a stipend. You can filter by minimum stipend to see only paid roles. Each listing clearly shows the compensation before you apply.",
  },
  {
    q: "Can I apply to multiple internships at once?",
    a: "Absolutely. There's no limit on applications. Your dashboard tracks the status of every application in one place so you never lose track.",
  },
  {
    q: "How are companies verified on the platform?",
    a: "All companies go through a verification process before their listings go live. We check business registration, reviews, and past hiring history to ensure legitimate opportunities.",
  },
  {
    q: "What happens after I complete an internship?",
    a: "You'll receive a completion certificate from the company, which is also reflected on your platform profile. Many of our interns receive pre-placement offers or strong referrals.",
  },
  {
    q: "Do you offer support for resume and interview prep?",
    a: "Yes. Mentors on the platform can help with resume reviews and mock interviews. We also publish free guides and templates in our resource hub.",
  },
  {
    q: "Can companies post internships and jobs for free?",
    a: "Companies get 3 free listings per month. Beyond that, affordable plans are available depending on the volume of hiring and features needed.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-5" style={{ background: "#ffffff" }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={8}>

            {/* Header */}
            <div className="text-center mb-5">
              <span
                className="d-inline-block px-3 py-1 rounded-pill mb-3 fw-semibold"
                style={{ background: "#ECFDF5", color: "#10B981", fontSize: "0.85rem" }}
              >
                ❓ FAQs
              </span>
              <h2 className="fw-bold" style={{ fontSize: "2rem", color: "#1a1a2e" }}>
                Frequently Asked Questions
              </h2>
              <p className="text-muted" style={{ maxWidth: 460, margin: "0 auto" }}>
                Everything you need to know about getting started. Can't find an answer? Reach out to us.
              </p>
            </div>

            {/* Accordion */}
            <div className="d-flex flex-column gap-3">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    className="rounded-4"
                    style={{
                      border: `1px solid ${isOpen ? "#10B981" : "#e5e7eb"}`,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-100 d-flex align-items-center justify-content-between p-4 border-0 text-start"
                      style={{
                        background: isOpen ? "#ECFDF5" : "#fff",
                        cursor: "pointer",
                        transition: "background 0.2s",
                      }}
                    >
                      <span className="fw-semibold" style={{ color: "#1a1a2e", fontSize: "0.95rem", paddingRight: 16 }}>
                        {faq.q}
                      </span>
                      <span
                        className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                        style={{
                          width: 28, height: 28,
                          background: isOpen ? "#10B981" : "#f3f4f6",
                          color: isOpen ? "#fff" : "#6b7280",
                          transition: "all 0.2s",
                        }}
                      >
                        {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4" style={{ background: "#ECFDF5" }}>
                        <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}
