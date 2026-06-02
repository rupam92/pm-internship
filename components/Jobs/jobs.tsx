'use client'

import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { FiMapPin, FiBriefcase, FiTrendingUp, FiUsers, FiSearch, FiFilter } from "react-icons/fi";

interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  experience: string;
  salary: string;
  applicants: string;
  tags: string[];
  type: "Full-time" | "Part-time" | "Contract";
  badge?: string;
  category: string;
}

const allJobs: Job[] = [
  { id: 1,  title: "Senior React Developer",       company: "Infosys Ltd.",      logo: "IN", location: "Pune",       experience: "3–5 yrs", salary: "₹18–25 LPA", applicants: "142", tags: ["React", "Redux", "Next.js"],           type: "Full-time", badge: "Featured", category: "Engineering" },
  { id: 2,  title: "Product Manager",              company: "Flipkart",          logo: "FK", location: "Bangalore",  experience: "4–7 yrs", salary: "₹30–45 LPA", applicants: "87",  tags: ["Roadmapping", "Agile", "Analytics"],   type: "Full-time",                    category: "Product"     },
  { id: 3,  title: "Machine Learning Engineer",    company: "Razorpay",          logo: "RP", location: "Remote",     experience: "2–4 yrs", salary: "₹20–32 LPA", applicants: "215", tags: ["Python", "TensorFlow", "NLP"],          type: "Full-time", badge: "Urgent",   category: "Data"        },
  { id: 4,  title: "Full Stack Developer",         company: "Zoho Corp.",        logo: "ZH", location: "Chennai",    experience: "1–3 yrs", salary: "₹10–18 LPA", applicants: "320", tags: ["Node.js", "React", "PostgreSQL"],       type: "Full-time",                    category: "Engineering" },
  { id: 5,  title: "DevOps Engineer",              company: "HCL Technologies",  logo: "HC", location: "Noida",      experience: "2–5 yrs", salary: "₹12–20 LPA", applicants: "98",  tags: ["AWS", "Kubernetes", "Terraform"],       type: "Contract",  badge: "Featured", category: "Engineering" },
  { id: 6,  title: "UX Researcher",                company: "Meesho",            logo: "ME", location: "Bangalore",  experience: "1–3 yrs", salary: "₹8–14 LPA",  applicants: "63",  tags: ["User Testing", "Figma", "Research"],   type: "Full-time",                    category: "Design"      },
  { id: 7,  title: "Data Analyst",                 company: "Paytm",             logo: "PT", location: "Delhi",      experience: "0–2 yrs", salary: "₹6–12 LPA",  applicants: "410", tags: ["SQL", "Tableau", "Python"],            type: "Full-time", badge: "Urgent",   category: "Data"        },
  { id: 8,  title: "Android Engineer",             company: "BYJU'S",            logo: "BJ", location: "Bangalore",  experience: "2–4 yrs", salary: "₹14–22 LPA", applicants: "176", tags: ["Kotlin", "Jetpack", "MVVM"],           type: "Full-time",                    category: "Engineering" },
  { id: 9,  title: "Content Strategist",           company: "Freshworks",        logo: "FW", location: "Remote",     experience: "1–3 yrs", salary: "₹7–12 LPA",  applicants: "55",  tags: ["SEO", "Copywriting", "Strategy"],      type: "Part-time",                    category: "Marketing"   },
  { id: 10, title: "Cloud Architect",              company: "Wipro",             logo: "WP", location: "Hyderabad",  experience: "6–10 yrs",salary: "₹35–55 LPA", applicants: "44",  tags: ["AWS", "Azure", "GCP"],                 type: "Full-time", badge: "Featured", category: "Engineering" },
  { id: 11, title: "Growth Marketing Manager",     company: "Swiggy",            logo: "SW", location: "Bangalore",  experience: "3–6 yrs", salary: "₹18–28 LPA", applicants: "112", tags: ["Performance Mktg", "CRM", "A/B Test"], type: "Full-time",                    category: "Marketing"   },
  { id: 12, title: "Business Development Exec.",   company: "OYO Rooms",         logo: "OY", location: "Mumbai",     experience: "1–3 yrs", salary: "₹8–15 LPA",  applicants: "238", tags: ["Sales", "CRM", "Negotiation"],         type: "Full-time",                    category: "Business"    },
];

const logoColors: Record<string, string> = {
  IN: "#0066CC", FK: "#F9A825", RP: "#3D5AFE", ZH: "#E53935",
  HC: "#00897B", ME: "#8E24AA", PT: "#1565C0", BJ: "#6A1B9A",
  FW: "#2E7D32", WP: "#455A64", SW: "#E64A19", OY: "#D84315",
};

const typeColors: Record<string, { bg: string; color: string }> = {
  "Full-time": { bg: "#e8f5e9", color: "#2e7d32" },
  "Part-time": { bg: "#fff3e0", color: "#e65100" },
  "Contract":  { bg: "#fce4ec", color: "#c62828" },
};

const badgeColors: Record<string, string> = { Featured: "#8B5CF6", Urgent: "#EF4444" };
const categories = ["All", "Engineering", "Design", "Data", "Marketing", "Product", "Business"];

export default function JobsSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = allJobs.filter((item) => {
    const matchCat = activeCategory === "All" || item.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || item.title.toLowerCase().includes(q) || item.company.toLowerCase().includes(q) || item.tags.some(t => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Hero Banner */}
      <div
        className="w-100 d-flex align-items-center"
        style={{
          minHeight: 220,
          background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 60%, #4C1D95 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: -40, left: "30%", width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

        <Container className="position-relative" style={{ zIndex: 1 }}>
          <div className="text-white py-4">
            <div className="d-flex align-items-center gap-2 mb-2" style={{ fontSize: "0.85rem", opacity: 0.75 }}>
              <span>Home</span><span>/</span><span>Jobs</span>
            </div>
            <h1 className="fw-bold mb-2" style={{ fontSize: "2.2rem" }}>Browse Jobs</h1>
            <p style={{ opacity: 0.85, maxWidth: 480, marginBottom: 0 }}>
              {allJobs.length}+ job openings from India's top employers. Apply to full-time, part-time, and contract roles today.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-5" style={{ background: "#faf8ff", minHeight: "60vh" }}>
        <Container>
          {/* Search + Filter bar */}
          <div
            className="d-flex flex-column flex-md-row align-items-md-center gap-3 mb-4 p-3 bg-white rounded-4"
            style={{ boxShadow: "0 2px 12px rgba(139,92,246,0.08)", border: "1px solid #ede8f5" }}
          >
            <div className="d-flex align-items-center gap-2 flex-grow-1 px-2" style={{ border: "1px solid #dee2e6", borderRadius: 10, background: "#faf8ff" }}>
              <FiSearch size={16} color="#6c757d" />
              <input
                type="text"
                placeholder="Search by title, company, or skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ border: "none", background: "transparent", outline: "none", padding: "10px 4px", width: "100%", fontSize: "0.9rem" }}
              />
            </div>
            <div className="d-flex align-items-center gap-2 flex-shrink-0">
              <FiFilter size={15} color="#8B5CF6" />
              <span style={{ fontSize: "0.85rem", color: "#8B5CF6", fontWeight: 600 }}>{filtered.length} results</span>
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
                  background: activeCategory === cat ? "#8B5CF6" : "#fff",
                  color: activeCategory === cat ? "#fff" : "#555",
                  border: `1px solid ${activeCategory === cat ? "#8B5CF6" : "#dee2e6"}`,
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          {filtered.length === 0 ? (
            <div className="text-center py-5 text-muted">No jobs found. Try a different search.</div>
          ) : (
            <Row className="gy-4">
              {filtered.map((job) => (
                <Col key={job.id} xs={12} md={6} lg={4}>
                  <div
                    className="h-100 rounded-4 p-4 bg-white position-relative"
                    style={{ border: "1px solid #ede8f5", transition: "all 0.3s ease", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = "0 12px 30px rgba(139,92,246,0.12)";
                      e.currentTarget.style.borderColor = "#8B5CF6";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                      e.currentTarget.style.borderColor = "#ede8f5";
                    }}
                  >
                    {job.badge && (
                      <span className="position-absolute top-0 end-0 mt-3 me-3 px-2 py-1 rounded-pill text-white fw-bold" style={{ fontSize: "0.7rem", background: badgeColors[job.badge] }}>
                        {job.badge}
                      </span>
                    )}
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-3 d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: 48, height: 48, fontSize: "0.85rem", background: logoColors[job.logo] ?? "#6c757d", flexShrink: 0 }}>
                        {job.logo}
                      </div>
                      <div>
                        <div className="fw-bold" style={{ color: "#1a1a2e", fontSize: "1rem" }}>{job.title}</div>
                        <div className="text-muted" style={{ fontSize: "0.85rem" }}>{job.company}</div>
                      </div>
                    </div>
                    <span className="d-inline-block px-3 py-1 rounded-pill fw-semibold mb-3" style={{ fontSize: "0.75rem", ...typeColors[job.type] }}>
                      {job.type}
                    </span>
                    <div className="d-flex flex-wrap gap-3 mb-3" style={{ fontSize: "0.82rem", color: "#555" }}>
                      <span className="d-flex align-items-center gap-1"><FiMapPin size={13} />{job.location}</span>
                      <span className="d-flex align-items-center gap-1"><FiBriefcase size={13} />{job.experience}</span>
                      <span className="d-flex align-items-center gap-1"><FiTrendingUp size={13} />{job.salary}</span>
                      <span className="d-flex align-items-center gap-1"><FiUsers size={13} />{job.applicants} applied</span>
                    </div>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-pill" style={{ background: "#f5f0ff", color: "#8B5CF6", fontSize: "0.75rem", fontWeight: 500 }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className="w-100 rounded-3 fw-semibold py-2 border-0"
                      style={{ background: "#8B5CF6", color: "#fff", fontSize: "0.9rem", transition: "background 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#7c3aed")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#8B5CF6")}
                    >
                      Apply Now
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
