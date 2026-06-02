'use client'

import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { FiMapPin, FiClock, FiBriefcase, FiDollarSign, FiSearch, FiFilter } from "react-icons/fi";

interface Internship {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  duration: string;
  type: string;
  stipend: string;
  tags: string[];
  badge?: string;
  category: string;
}

const allInternships: Internship[] = [
  { id: 1,  title: "Frontend Developer Intern",    company: "TechNova Solutions", logo: "TN", location: "Remote",     duration: "3 Months", type: "Full-time", stipend: "₹15,000/mo", tags: ["React", "TypeScript", "Tailwind"],   badge: "Hot",  category: "Engineering" },
  { id: 2,  title: "UI/UX Design Intern",          company: "PixelCraft Studio",  logo: "PC", location: "Bangalore",  duration: "6 Months", type: "Part-time", stipend: "₹10,000/mo", tags: ["Figma", "Adobe XD", "Prototyping"],  badge: "New",  category: "Design"      },
  { id: 3,  title: "Data Science Intern",          company: "DataMind AI",        logo: "DM", location: "Mumbai",     duration: "4 Months", type: "Full-time", stipend: "₹20,000/mo", tags: ["Python", "ML", "Pandas"],                           category: "Data"        },
  { id: 4,  title: "Backend Developer Intern",     company: "CloudStack Inc.",    logo: "CS", location: "Remote",     duration: "3 Months", type: "Full-time", stipend: "₹18,000/mo", tags: ["Node.js", "MongoDB", "REST API"],    badge: "Hot",  category: "Engineering" },
  { id: 5,  title: "Marketing Intern",             company: "GrowthPilot",        logo: "GP", location: "Delhi",      duration: "2 Months", type: "Part-time", stipend: "₹8,000/mo",  tags: ["SEO", "Content", "Analytics"],                      category: "Marketing"   },
  { id: 6,  title: "DevOps Intern",                company: "InfraWave",          logo: "IW", location: "Hyderabad",  duration: "6 Months", type: "Full-time", stipend: "₹22,000/mo", tags: ["Docker", "AWS", "CI/CD"],           badge: "New",  category: "Engineering" },
  { id: 7,  title: "Product Management Intern",    company: "Meesho",             logo: "ME", location: "Bangalore",  duration: "3 Months", type: "Full-time", stipend: "₹25,000/mo", tags: ["Roadmapping", "Agile", "Analytics"],                 category: "Product"     },
  { id: 8,  title: "Graphic Design Intern",        company: "BrandVista",         logo: "BV", location: "Remote",     duration: "2 Months", type: "Part-time", stipend: "₹7,000/mo",  tags: ["Illustrator", "Photoshop", "Branding"],              category: "Design"      },
  { id: 9,  title: "Business Analyst Intern",      company: "FinServ Corp.",      logo: "FS", location: "Pune",       duration: "4 Months", type: "Full-time", stipend: "₹16,000/mo", tags: ["Excel", "SQL", "Tableau"],                           category: "Business"    },
  { id: 10, title: "Content Writer Intern",        company: "MediaNest",          logo: "MN", location: "Remote",     duration: "3 Months", type: "Part-time", stipend: "₹6,000/mo",  tags: ["SEO Writing", "Blogs", "CMS"],      badge: "New",  category: "Marketing"   },
  { id: 11, title: "Android Developer Intern",     company: "AppWorks",           logo: "AW", location: "Chennai",    duration: "6 Months", type: "Full-time", stipend: "₹20,000/mo", tags: ["Kotlin", "Android", "Jetpack"],     badge: "Hot",  category: "Engineering" },
  { id: 12, title: "HR Intern",                    company: "PeopleFirst",        logo: "PF", location: "Delhi",      duration: "3 Months", type: "Part-time", stipend: "₹9,000/mo",  tags: ["Recruitment", "HRMS", "Onboarding"],                 category: "Business"    },
];

const logoColors: Record<string, string> = {
  TN: "#0D6EFD", PC: "#8B5CF6", DM: "#10B981", CS: "#F59E0B",
  GP: "#EF4444", IW: "#06B6D4", ME: "#8E24AA", BV: "#F97316",
  FS: "#0891B2", MN: "#6366F1", AW: "#16A34A", PF: "#BE185D",
};

const badgeColors: Record<string, string> = { Hot: "#EF4444", New: "#10B981" };
const categories = ["All", "Engineering", "Design", "Data", "Marketing", "Product", "Business"];

export default function InternshipsSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = allInternships.filter((item) => {
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
          background: "linear-gradient(135deg, #0D6EFD 0%, #0a58ca 60%, #084298 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative circles */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: -40, left: "30%", width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

        <Container className="position-relative" style={{ zIndex: 1 }}>
          <div className="text-white py-4">
            <div className="d-flex align-items-center gap-2 mb-2" style={{ fontSize: "0.85rem", opacity: 0.75 }}>
              <span>Home</span><span>/</span><span>Internships</span>
            </div>
            <h1 className="fw-bold mb-2" style={{ fontSize: "2.2rem" }}>Browse Internships</h1>
            <p style={{ opacity: 0.85, maxWidth: 480, marginBottom: 0 }}>
              {allInternships.length}+ internship opportunities from top companies. Find the one that fits your skills and goals.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-5" style={{ background: "#f8f9ff", minHeight: "60vh" }}>
        <Container>
          {/* Search + Filter bar */}
          <div
            className="d-flex flex-column flex-md-row align-items-md-center gap-3 mb-4 p-3 bg-white rounded-4"
            style={{ boxShadow: "0 2px 12px rgba(13,110,253,0.08)", border: "1px solid #e0e9ff" }}
          >
            <div className="d-flex align-items-center gap-2 flex-grow-1 px-2" style={{ border: "1px solid #dee2e6", borderRadius: 10, background: "#f8f9ff" }}>
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
              <FiFilter size={15} color="#0D6EFD" />
              <span style={{ fontSize: "0.85rem", color: "#0D6EFD", fontWeight: 600 }}>{filtered.length} results</span>
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
                  background: activeCategory === cat ? "#0D6EFD" : "#fff",
                  color: activeCategory === cat ? "#fff" : "#555",
                  border: `1px solid ${activeCategory === cat ? "#0D6EFD" : "#dee2e6"}`,
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          {filtered.length === 0 ? (
            <div className="text-center py-5 text-muted">No internships found. Try a different search.</div>
          ) : (
            <Row className="gy-4">
              {filtered.map((item) => (
                <Col key={item.id} xs={12} md={6} lg={4}>
                  <div
                    className="h-100 rounded-4 p-4 bg-white shadow-sm position-relative"
                    style={{ border: "1px solid #e8ecf4", transition: "all 0.3s ease", cursor: "pointer" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = "0 12px 30px rgba(13,110,253,0.1)";
                      e.currentTarget.style.borderColor = "#0D6EFD";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
                      e.currentTarget.style.borderColor = "#e8ecf4";
                    }}
                  >
                    {item.badge && (
                      <span className="position-absolute top-0 end-0 mt-3 me-3 px-2 py-1 rounded-pill text-white fw-bold" style={{ fontSize: "0.7rem", background: badgeColors[item.badge] }}>
                        {item.badge}
                      </span>
                    )}
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-3 d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: 48, height: 48, fontSize: "0.85rem", background: logoColors[item.logo] ?? "#6c757d", flexShrink: 0 }}>
                        {item.logo}
                      </div>
                      <div>
                        <div className="fw-bold" style={{ color: "#1a1a2e", fontSize: "1rem" }}>{item.title}</div>
                        <div className="text-muted" style={{ fontSize: "0.85rem" }}>{item.company}</div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap gap-3 mb-3" style={{ fontSize: "0.82rem", color: "#555" }}>
                      <span className="d-flex align-items-center gap-1"><FiMapPin size={13} />{item.location}</span>
                      <span className="d-flex align-items-center gap-1"><FiClock size={13} />{item.duration}</span>
                      <span className="d-flex align-items-center gap-1"><FiBriefcase size={13} />{item.type}</span>
                      <span className="d-flex align-items-center gap-1"><FiDollarSign size={13} />{item.stipend}</span>
                    </div>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-pill" style={{ background: "#f0f4ff", color: "#0D6EFD", fontSize: "0.75rem", fontWeight: 500 }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className="w-100 rounded-3 fw-semibold py-2 border-0"
                      style={{ background: "#0D6EFD", color: "#fff", fontSize: "0.9rem", transition: "background 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#0b5ed7")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#0D6EFD")}
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
