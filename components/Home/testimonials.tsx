'use client'

import { Container } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Frontend Intern → SDE at Google",
    avatar: "AS",
    avatarColor: "#0D6EFD",
    rating: 5,
    text: "I landed my dream internship at a top startup within 2 weeks of signing up. The mentor sessions were a game-changer — my interviewer literally complimented my system design approach.",
  },
  {
    id: 2,
    name: "Riya Patel",
    role: "Design Intern at Adobe",
    avatar: "RP",
    avatarColor: "#EF4444",
    rating: 5,
    text: "As a design student, I struggled to find companies that valued portfolio work. This platform filtered exactly what I needed. Got 3 interview calls in the first week!",
  },
  {
    id: 3,
    name: "Kabir Malhotra",
    role: "Data Science Intern at Razorpay",
    avatar: "KM",
    avatarColor: "#10B981",
    rating: 5,
    text: "The mentor I was matched with had 6 years at Amazon. His guidance on ML interviews and resume review was worth more than any online course I've ever taken.",
  },
  {
    id: 4,
    name: "Sneha Iyer",
    role: "Product Intern at Meesho",
    avatar: "SI",
    avatarColor: "#8B5CF6",
    rating: 5,
    text: "I used to apply to 20+ companies and hear nothing back. Here, the skill-matched listings meant every application was relevant. I got my offer within 3 weeks.",
  },
  {
    id: 5,
    name: "Dev Joshi",
    role: "Backend Intern at Zoho",
    avatar: "DJ",
    avatarColor: "#F59E0B",
    rating: 4,
    text: "Clean platform, zero spam, and the dashboard to track applications is exactly what I needed. Finally a site that respects students' time.",
  },
  {
    id: 6,
    name: "Prachi Gupta",
    role: "Marketing Intern at Swiggy",
    avatar: "PG",
    avatarColor: "#0F766E",
    rating: 5,
    text: "Got certified by Swiggy after my internship. That badge on my LinkedIn immediately led to 2 recruiters reaching out. Absolutely worth it.",
  },
  {
    id: 7,
    name: "Aryan Khanna",
    role: "DevOps Intern at HCL",
    avatar: "AK",
    avatarColor: "#06B6D4",
    rating: 5,
    text: "The job filters are incredibly precise. I set my preferences once and the feed was spot-on from day one. Saved me hours of manual searching every week.",
  },
  {
    id: 8,
    name: "Meera Nair",
    role: "HR Intern at PeopleFirst",
    avatar: "MN",
    avatarColor: "#BE185D",
    rating: 4,
    text: "As someone entering a non-tech role, I was worried the platform was only for engineers. The marketing and HR listings are great and the mentor network is diverse.",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="d-flex gap-1 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar
          key={i}
          size={14}
          fill={i < count ? "#F59E0B" : "none"}
          stroke={i < count ? "#F59E0B" : "#ccc"}
        />
      ))}
    </div>
  );
}

const VISIBLE = 3; // cards visible at once on desktop

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;

  const go = (next: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((next + total) % total);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  // Auto-advance every 4 s
  useEffect(() => {
    autoRef.current = setInterval(() => go(current + 1), 4000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // Build visible indices (wrap-around)
  const getVisible = () =>
    Array.from({ length: VISIBLE }, (_, i) => (current + i) % total);

  const visibleIndices = getVisible();

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .testimonial-card-enter {
          animation: slideInRight 0.4s ease forwards;
        }
      `}</style>

      <section className="py-5" style={{ background: "linear-gradient(135deg, #f8f9ff 0%, #fdf4ff 100%)" }}>
        <Container>

          {/* Header */}
          <div className="text-center mb-5">
            <span
              className="d-inline-block px-3 py-1 rounded-pill mb-3 fw-semibold"
              style={{ background: "#FFF7ED", color: "#F59E0B", fontSize: "0.85rem" }}
            >
              💬 Testimonials
            </span>
            <h2 className="fw-bold" style={{ fontSize: "2rem", color: "#1a1a2e" }}>
              Stories from Our Community
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: 480 }}>
              Real students. Real results. Here's what they say after using the platform.
            </p>
          </div>

          {/* Carousel */}
          <div className="position-relative">

            {/* Cards row */}
            <div className="row gy-4 mx-0">
              {visibleIndices.map((idx, pos) => {
                const t = testimonials[idx];
                return (
                  <div
                    key={`${idx}-${current}`}
                    className={`col-12 col-md-6 col-lg-4 testimonial-card-enter`}
                    style={{ animationDelay: `${pos * 60}ms` }}
                  >
                    <div
                      className="h-100 rounded-4 p-4 bg-white"
                      style={{
                        border: pos === 0 ? "2px solid #8B5CF6" : "1px solid #f0e8ff",
                        boxShadow: pos === 0
                          ? "0 8px 28px rgba(139,92,246,0.14)"
                          : "0 2px 12px rgba(0,0,0,0.04)",
                        transition: "box-shadow 0.3s",
                      }}
                    >
                      {/* Quote */}
                      <div style={{ fontSize: "2.5rem", lineHeight: 1, color: "#e0e7ff", fontFamily: "Georgia, serif", marginBottom: 4 }}>
                        "
                      </div>

                      <StarRow count={t.rating} />

                      <p className="text-muted mb-4" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                        {t.text}
                      </p>

                      {/* Author */}
                      <div
                        className="d-flex align-items-center gap-3 mt-auto pt-3"
                        style={{ borderTop: "1px solid #f3f4f6" }}
                      >
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0"
                          style={{ width: 44, height: 44, background: t.avatarColor, fontSize: "0.85rem" }}
                        >
                          {t.avatar}
                        </div>
                        <div>
                          <div className="fw-bold" style={{ color: "#1a1a2e", fontSize: "0.95rem" }}>{t.name}</div>
                          <div className="text-muted" style={{ fontSize: "0.78rem" }}>{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Nav buttons */}
            <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
              <button
                onClick={prev}
                className="d-flex align-items-center justify-content-center rounded-circle border-0"
                style={{
                  width: 44, height: 44,
                  background: "#fff",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#8B5CF6"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "inherit"; }}
                aria-label="Previous"
              >
                <FiChevronLeft size={20} />
              </button>

              {/* Dot indicators */}
              <div className="d-flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className="border-0 p-0 rounded-pill"
                    style={{
                      width: i === current ? 24 : 8,
                      height: 8,
                      background: i === current ? "#8B5CF6" : "#ddd",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="d-flex align-items-center justify-content-center rounded-circle border-0"
                style={{
                  width: 44, height: 44,
                  background: "#fff",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#8B5CF6"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "inherit"; }}
                aria-label="Next"
              >
                <FiChevronRight size={20} />
              </button>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
