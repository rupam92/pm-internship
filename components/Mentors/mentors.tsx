'use client'

import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { FiStar, FiUsers, FiLinkedin, FiTwitter, FiSearch, FiFilter } from "react-icons/fi";

interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  students: string;
  expertise: string[];
  bio: string;
  linkedin?: string;
  twitter?: string;
  category: string;
}

const allMentors: Mentor[] = [
  { id: 1,  name: "Priya Sharma",    role: "Senior SDE",          company: "Google",      avatar: "PS", rating: 4.9, students: "1.2k", expertise: ["System Design", "DSA", "React"],        bio: "6+ years at Google. Helped 1200+ students crack FAANG interviews with structured guidance.",              linkedin: "#", twitter: "#", category: "Engineering" },
  { id: 2,  name: "Arjun Mehta",     role: "Product Manager",     company: "Microsoft",   avatar: "AM", rating: 4.8, students: "870",  expertise: ["Product Strategy", "Agile", "OKRs"],    bio: "PM at Microsoft for 5 years. Passionate about helping aspiring PMs build their product thinking.",        linkedin: "#",               category: "Product"     },
  { id: 3,  name: "Sneha Kapoor",    role: "Data Scientist",      company: "Amazon",      avatar: "SK", rating: 4.7, students: "950",  expertise: ["ML", "Python", "Statistics"],            bio: "Data Scientist at Amazon AWS. Mentors students on ML projects and data science interview prep.",           linkedin: "#", twitter: "#", category: "Data"        },
  { id: 4,  name: "Rohan Verma",     role: "UX Lead",             company: "Adobe",       avatar: "RV", rating: 4.9, students: "640",  expertise: ["UX Research", "Figma", "Design Systems"],bio: "Lead UX designer at Adobe with 8 years of experience crafting user-centered digital products.",                          twitter: "#", category: "Design"      },
  { id: 5,  name: "Neha Joshi",      role: "DevOps Engineer",     company: "Atlassian",   avatar: "NJ", rating: 4.6, students: "530",  expertise: ["AWS", "Docker", "Kubernetes"],           bio: "Cloud infrastructure expert at Atlassian. Guides students into DevOps and cloud careers.",                 linkedin: "#",               category: "Engineering" },
  { id: 6,  name: "Karthik Rajan",   role: "Startup Founder",     company: "YC W22",      avatar: "KR", rating: 4.8, students: "380",  expertise: ["Entrepreneurship", "Fundraising", "GTM"],bio: "Founded a YC-backed startup. Mentors aspiring founders on building 0→1 and fundraising.",                  linkedin: "#", twitter: "#", category: "Business"    },
  { id: 7,  name: "Aisha Patel",     role: "ML Engineer",         company: "Meta",        avatar: "AP", rating: 4.9, students: "1.1k", expertise: ["Deep Learning", "PyTorch", "NLP"],       bio: "ML Engineer at Meta AI. Specialises in NLP and large language model fine-tuning for production.",         linkedin: "#", twitter: "#", category: "Data"        },
  { id: 8,  name: "Vikram Singh",    role: "Android Lead",        company: "Spotify",     avatar: "VS", rating: 4.7, students: "720",  expertise: ["Kotlin", "Jetpack Compose", "MVVM"],     bio: "Android lead at Spotify. Guides engineers from college projects to production-grade mobile apps.",         linkedin: "#",               category: "Engineering" },
  { id: 9,  name: "Divya Nair",      role: "Growth Marketer",     company: "Swiggy",      avatar: "DN", rating: 4.6, students: "460",  expertise: ["Performance Mktg", "CRM", "Analytics"],  bio: "Growth marketer at Swiggy with expertise in performance campaigns and user lifecycle management.",         linkedin: "#", twitter: "#", category: "Marketing"   },
  { id: 10, name: "Rahul Gupta",     role: "Backend Engineer",    company: "Stripe",      avatar: "RG", rating: 4.8, students: "890",  expertise: ["Go", "Distributed Systems", "PostgreSQL"],bio: "Backend engineer at Stripe. Mentors students on scalable system design and distributed architecture.",     linkedin: "#", twitter: "#", category: "Engineering" },
  { id: 11, name: "Meera Iyer",      role: "UX Writer",           company: "Notion",      avatar: "MI", rating: 4.7, students: "310",  expertise: ["UX Writing", "Content Design", "IA"],    bio: "UX Writer at Notion focused on clarity and voice. Helps designers and writers break into content design.", linkedin: "#",               category: "Design"      },
  { id: 12, name: "Siddharth Roy",   role: "Finance Manager",     company: "Goldman Sachs",avatar:"SR", rating: 4.5, students: "290",  expertise: ["Finance", "Valuation", "Excel Modeling"], bio: "Finance manager at Goldman Sachs. Guides students into investment banking and financial modelling roles.",  linkedin: "#",               category: "Business"    },
];

const avatarColors: Record<string, string> = {
  PS: "#0D6EFD", AM: "#10B981", SK: "#F59E0B", RV: "#EF4444",
  NJ: "#8B5CF6", KR: "#06B6D4", AP: "#EC4899", VS: "#14B8A6",
  DN: "#F97316", RG: "#6366F1", MI: "#A855F7", SR: "#64748B",
};

const categories = ["All", "Engineering", "Design", "Data", "Marketing", "Product", "Business"];

function Stars({ rating }: { rating: number }) {
  return (
    <span className="d-flex align-items-center gap-1" style={{ color: "#F59E0B", fontSize: "0.85rem" }}>
      <FiStar size={14} fill="#F59E0B" strokeWidth={0} />
      <span className="fw-bold text-dark">{rating}</span>
    </span>
  );
}

export default function MentorsSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = allMentors.filter((m) => {
    const matchCat = activeCategory === "All" || m.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || m.name.toLowerCase().includes(q) || m.company.toLowerCase().includes(q) || m.role.toLowerCase().includes(q) || m.expertise.some(e => e.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Hero Banner */}
      <div
        className="w-100 d-flex align-items-center"
        style={{
          minHeight: 220,
          background: "linear-gradient(135deg, #D97706 0%, #B45309 60%, #92400E 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: -40, left: "30%", width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

        <Container className="position-relative" style={{ zIndex: 1 }}>
          <div className="text-white py-4">
            <div className="d-flex align-items-center gap-2 mb-2" style={{ fontSize: "0.85rem", opacity: 0.75 }}>
              <span>Home</span><span>/</span><span>Mentors</span>
            </div>
            <h1 className="fw-bold mb-2" style={{ fontSize: "2.2rem" }}>Meet Your Mentors</h1>
            <p style={{ opacity: 0.85, maxWidth: 480, marginBottom: 0 }}>
              {allMentors.length}+ industry professionals ready to guide your career. Book 1:1 sessions and grow faster.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-5" style={{ background: "linear-gradient(135deg, #fffbf0 0%, #fdf4ff 100%)", minHeight: "60vh" }}>
        <Container>
          {/* Search + Filter bar */}
          <div
            className="d-flex flex-column flex-md-row align-items-md-center gap-3 mb-4 p-3 bg-white rounded-4"
            style={{ boxShadow: "0 2px 12px rgba(245,158,11,0.08)", border: "1px solid #fde68a" }}
          >
            <div className="d-flex align-items-center gap-2 flex-grow-1 px-2" style={{ border: "1px solid #dee2e6", borderRadius: 10, background: "#fffbf0" }}>
              <FiSearch size={16} color="#6c757d" />
              <input
                type="text"
                placeholder="Search by name, company, or skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ border: "none", background: "transparent", outline: "none", padding: "10px 4px", width: "100%", fontSize: "0.9rem" }}
              />
            </div>
            <div className="d-flex align-items-center gap-2 flex-shrink-0">
              <FiFilter size={15} color="#D97706" />
              <span style={{ fontSize: "0.85rem", color: "#D97706", fontWeight: 600 }}>{filtered.length} mentors</span>
            </div>
          </div>

          {/* Category pills */}
          <div className="d-flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="rounded-pill border-0 fw-semibold px-4 py-2"
                style={{
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  background: activeCategory === cat ? "#D97706" : "#fff",
                  color: activeCategory === cat ? "#fff" : "#555",
                  border: `1px solid ${activeCategory === cat ? "#D97706" : "#dee2e6"}`,
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          {filtered.length === 0 ? (
            <div className="text-center py-5 text-muted">No mentors found. Try a different search.</div>
          ) : (
            <Row className="gy-4">
              {filtered.map((mentor) => (
                <Col key={mentor.id} xs={12} md={6} lg={4}>
                  <div
                    className="h-100 rounded-4 p-4 bg-white position-relative"
                    style={{ border: "1px solid #fde68a", transition: "all 0.3s ease", cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = "0 16px 36px rgba(217,119,6,0.12)";
                      e.currentTarget.style.borderColor = "#D97706";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                      e.currentTarget.style.borderColor = "#fde68a";
                    }}
                  >
                    <div className="d-flex align-items-start justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                          style={{ width: 56, height: 56, fontSize: "1rem", background: avatarColors[mentor.avatar] ?? "#6c757d", flexShrink: 0 }}
                        >
                          {mentor.avatar}
                        </div>
                        <div>
                          <div className="fw-bold" style={{ color: "#1a1a2e", fontSize: "1rem" }}>{mentor.name}</div>
                          <div className="text-muted" style={{ fontSize: "0.82rem" }}>{mentor.role}</div>
                          <div className="fw-semibold" style={{ fontSize: "0.8rem", color: avatarColors[mentor.avatar] ?? "#6c757d" }}>
                            @ {mentor.company}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        {mentor.linkedin && <a href={mentor.linkedin} className="text-muted" style={{ lineHeight: 1 }}><FiLinkedin size={17} /></a>}
                        {mentor.twitter && <a href={mentor.twitter} className="text-muted" style={{ lineHeight: 1 }}><FiTwitter size={17} /></a>}
                      </div>
                    </div>

                    <p className="text-muted mb-3" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{mentor.bio}</p>

                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {mentor.expertise.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-pill" style={{ background: "#fffbe6", color: "#b45309", fontSize: "0.75rem", fontWeight: 500 }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <Stars rating={mentor.rating} />
                      <span className="d-flex align-items-center gap-1 text-muted" style={{ fontSize: "0.82rem" }}>
                        <FiUsers size={13} /> {mentor.students} students
                      </span>
                    </div>

                    <button
                      className="w-100 rounded-3 fw-semibold py-2 border-0"
                      style={{ background: "#D97706", color: "#fff", fontSize: "0.9rem", transition: "background 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#b45309")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#D97706")}
                    >
                      Book a Session
                    </button>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
    </>
  );
}
