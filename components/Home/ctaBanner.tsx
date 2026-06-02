'use client'

import { Container } from "react-bootstrap";

export default function CTABanner() {
  return (
    <section className="py-5" style={{ background: "#f8f9ff" }}>
      <Container>
        <div
          className="rounded-4 px-4 py-5 text-center text-white position-relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0D6EFD 0%, #7C3AED 60%, #0F766E 100%)",
          }}
        >
          {/* Decorative blobs */}
          <div style={{ position: "absolute", top: -50, left: -50, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />

          <div className="position-relative" style={{ zIndex: 1 }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🚀</div>
            <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>
              Ready to Launch Your Career?
            </h2>
            <p style={{ opacity: 0.88, maxWidth: 480, margin: "0 auto 28px", fontSize: "1.05rem" }}>
              Join 50,000+ students already using the platform to find internships, jobs, and mentors that actually move the needle.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <button
                className="px-5 py-3 rounded-pill fw-bold border-0"
                style={{ background: "#ffffff", color: "#0D6EFD", fontSize: "0.95rem", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#e8f0fe"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; }}
              >
                Get Started — It's Free
              </button>
              <button
                className="px-5 py-3 rounded-pill fw-bold"
                style={{ background: "transparent", color: "#fff", fontSize: "0.95rem", border: "2px solid rgba(255,255,255,0.6)", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; e.currentTarget.style.background = "transparent"; }}
              >
                Browse Opportunities
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
