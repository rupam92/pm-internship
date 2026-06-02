'use client'

import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { FiMapPin, FiUsers, FiBriefcase, FiSearch, FiFilter, FiGlobe } from "react-icons/fi";

interface Company {
  id: number;
  name: string;
  logo: string;
  industry: string;
  location: string;
  size: string;
  openRoles: number;
  website: string;
  description: string;
  tags: string[];
  badge?: string;
  category: string;
}

const allCompanies: Company[] = [
  { id: 1,  name: "Google",           logo: "GO", industry: "Technology",    location: "Bangalore, India", size: "10,000+", openRoles: 24, website: "#", description: "A global leader in search, cloud computing, advertising, and AI innovation.",                     tags: ["AI", "Cloud", "Search"],              badge: "Top Hiring", category: "Technology"  },
  { id: 2,  name: "Microsoft",        logo: "MS", industry: "Technology",    location: "Hyderabad, India", size: "10,000+", openRoles: 31, website: "#", description: "Empowering every person and organisation on the planet to achieve more through software.",         tags: ["Azure", "SaaS", "Dev Tools"],         badge: "Top Hiring", category: "Technology"  },
  { id: 3,  name: "Flipkart",         logo: "FK", industry: "E-Commerce",    location: "Bangalore, India", size: "5,000+",  openRoles: 18, website: "#", description: "India's homegrown e-commerce giant transforming retail with technology and logistics.",            tags: ["E-Commerce", "Logistics", "Fintech"],                      category: "E-Commerce"  },
  { id: 4,  name: "Razorpay",         logo: "RZ", industry: "Fintech",       location: "Bangalore, India", size: "1,000+",  openRoles: 12, website: "#", description: "India's leading full-stack payments solution trusted by 500,000+ businesses.",                   tags: ["Payments", "FinTech", "APIs"],         badge: "Fast Growing", category: "Fintech"    },
  { id: 5,  name: "Swiggy",           logo: "SW", industry: "Food Tech",     location: "Bangalore, India", size: "5,000+",  openRoles: 9,  website: "#", description: "Revolutionising food delivery and quick commerce across 500+ Indian cities.",                    tags: ["Food Tech", "Logistics", "Growth"],                        category: "Startup"     },
  { id: 6,  name: "Infosys",          logo: "IN", industry: "IT Services",   location: "Pune, India",      size: "10,000+", openRoles: 42, website: "#", description: "A global IT services giant with expertise in consulting, technology and outsourcing.",             tags: ["IT Services", "Consulting", "BPO"],   badge: "Top Hiring", category: "IT Services" },
  { id: 7,  name: "BYJU'S",           logo: "BJ", industry: "EdTech",        location: "Bangalore, India", size: "5,000+",  openRoles: 15, website: "#", description: "World's most valued EdTech company transforming how students learn through personalised content.",  tags: ["EdTech", "Learning", "Mobile"],                            category: "EdTech"      },
  { id: 8,  name: "Paytm",            logo: "PT", industry: "Fintech",       location: "Noida, India",     size: "5,000+",  openRoles: 20, website: "#", description: "India's pioneer in digital payments and financial services for consumers and merchants.",          tags: ["Payments", "Banking", "Wallet"],                           category: "Fintech"     },
  { id: 9,  name: "Zoho Corporation", logo: "ZH", industry: "SaaS",          location: "Chennai, India",   size: "10,000+", openRoles: 28, website: "#", description: "A bootstrapped SaaS giant offering 50+ business apps serving over 80 million users globally.",     tags: ["SaaS", "CRM", "Productivity"],        badge: "Fast Growing", category: "Technology"  },
  { id: 10, name: "OYO Rooms",        logo: "OY", industry: "Travel",        location: "Gurgaon, India",   size: "1,000+",  openRoles: 11, website: "#", description: "Global hospitality chain revolutionising affordable travel and hotel stays across 80+ countries.", tags: ["Travel", "Hospitality", "Tech"],                           category: "Startup"     },
  { id: 11, name: "Freshworks",       logo: "FW", industry: "SaaS",          location: "Chennai, India",   size: "5,000+",  openRoles: 16, website: "#", description: "Modern software for customer service, IT, CRM and HR teams loved by teams in 120+ countries.",   tags: ["CRM", "SaaS", "Support"],                                  category: "Technology"  },
  { id: 12, name: "Meesho",           logo: "ME", industry: "E-Commerce",    location: "Bangalore, India", size: "1,000+",  openRoles: 7,  website: "#", description: "India's fastest-growing social commerce platform empowering small business owners.",               tags: ["Social Commerce", "D2C", "Growth"],   badge: "Fast Growing", category: "E-Commerce"  },
];

const logoColors: Record<string, string> = {
  GO: "#4285F4", MS: "#0078D4", FK: "#F9A825", RZ: "#3D5AFE",
  SW: "#E64A19", IN: "#0066CC", BJ: "#6A1B9A", PT: "#1565C0",
  ZH: "#E53935", OY: "#D84315", FW: "#2E7D32", ME: "#8E24AA",
};

const badgeColors: Record<string, string> = {
  "Top Hiring":   "#0D6EFD",
  "Fast Growing": "#10B981",
};

const categories = ["All", "Technology", "Fintech", "E-Commerce", "IT Services", "EdTech", "Startup"];

export default function CompaniesSection() {
  const [search, setSearch]               = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = allCompanies.filter((c) => {
    const matchCat    = activeCategory === "All" || c.category === activeCategory;
    const q           = search.toLowerCase();
    const matchSearch = !q || c.name.toLowerCase().includes(q) || c.industry.toLowerCase().includes(q) || c.tags.some(t => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Hero Banner */}
      <div
        className="w-100 d-flex align-items-center"
        style={{
          minHeight: 220,
          background: "linear-gradient(135deg, #0F766E 0%, #0D9488 60%, #0891B2 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: -40, left: "30%", width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

        <Container className="position-relative" style={{ zIndex: 1 }}>
          <div className="text-white py-4">
            <div className="d-flex align-items-center gap-2 mb-2" style={{ fontSize: "0.85rem", opacity: 0.75 }}>
              <span>Home</span><span>/</span><span>Companies</span>
            </div>
            <h1 className="fw-bold mb-2" style={{ fontSize: "2.2rem" }}>Explore Companies</h1>
            <p style={{ opacity: 0.85, maxWidth: 480, marginBottom: 0 }}>
              {allCompanies.length}+ top companies hiring interns and full-time talent. Discover your next workplace.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-5" style={{ background: "#f0fdfa", minHeight: "60vh" }}>
        <Container>
          {/* Search + Filter bar */}
          <div
            className="d-flex flex-column flex-md-row align-items-md-center gap-3 mb-4 p-3 bg-white rounded-4"
            style={{ boxShadow: "0 2px 12px rgba(15,118,110,0.08)", border: "1px solid #ccfbf1" }}
          >
            <div className="d-flex align-items-center gap-2 flex-grow-1 px-2" style={{ border: "1px solid #dee2e6", borderRadius: 10, background: "#f0fdfa" }}>
              <FiSearch size={16} color="#6c757d" />
              <input
                type="text"
                placeholder="Search by company name, industry, or tag..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ border: "none", background: "transparent", outline: "none", padding: "10px 4px", width: "100%", fontSize: "0.9rem" }}
              />
            </div>
            <div className="d-flex align-items-center gap-2 flex-shrink-0">
              <FiFilter size={15} color="#0F766E" />
              <span style={{ fontSize: "0.85rem", color: "#0F766E", fontWeight: 600 }}>{filtered.length} companies</span>
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
                  background: activeCategory === cat ? "#0F766E" : "#fff",
                  color: activeCategory === cat ? "#fff" : "#555",
                  border: `1px solid ${activeCategory === cat ? "#0F766E" : "#dee2e6"}`,
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          {filtered.length === 0 ? (
            <div className="text-center py-5 text-muted">No companies found. Try a different search.</div>
          ) : (
            <Row className="gy-4">
              {filtered.map((company) => (
                <Col key={company.id} xs={12} md={6} lg={4}>
                  <div
                    className="h-100 rounded-4 p-4 bg-white position-relative"
                    style={{ border: "1px solid #ccfbf1", transition: "all 0.3s ease", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = "0 12px 30px rgba(15,118,110,0.12)";
                      e.currentTarget.style.borderColor = "#0F766E";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                      e.currentTarget.style.borderColor = "#ccfbf1";
                    }}
                  >
                    {/* Badge */}
                    {company.badge && (
                      <span className="position-absolute top-0 end-0 mt-3 me-3 px-2 py-1 rounded-pill text-white fw-bold" style={{ fontSize: "0.7rem", background: badgeColors[company.badge] }}>
                        {company.badge}
                      </span>
                    )}

                    {/* Logo + Name */}
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center text-white fw-bold"
                        style={{ width: 56, height: 56, fontSize: "1rem", background: logoColors[company.logo] ?? "#6c757d", flexShrink: 0 }}
                      >
                        {company.logo}
                      </div>
                      <div>
                        <div className="fw-bold" style={{ color: "#1a1a2e", fontSize: "1rem" }}>{company.name}</div>
                        <div className="text-muted" style={{ fontSize: "0.82rem" }}>{company.industry}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted mb-3" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
                      {company.description}
                    </p>

                    {/* Meta */}
                    <div className="d-flex flex-wrap gap-3 mb-3" style={{ fontSize: "0.82rem", color: "#555" }}>
                      <span className="d-flex align-items-center gap-1"><FiMapPin size={13} />{company.location}</span>
                      <span className="d-flex align-items-center gap-1"><FiUsers size={13} />{company.size} employees</span>
                      <span className="d-flex align-items-center gap-1"><FiBriefcase size={13} />{company.openRoles} open roles</span>
                    </div>

                    {/* Tags */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {company.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-pill" style={{ background: "#f0fdfa", color: "#0F766E", fontSize: "0.75rem", fontWeight: 500 }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="d-flex gap-2">
                      <button
                        className="flex-grow-1 rounded-3 fw-semibold py-2 border-0"
                        style={{ background: "#0F766E", color: "#fff", fontSize: "0.9rem", transition: "background 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#0d6560")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#0F766E")}
                      >
                        View Jobs
                      </button>
                      <a
                        href={company.website}
                        className="d-flex align-items-center justify-content-center rounded-3 px-3"
                        style={{ background: "#f0fdfa", color: "#0F766E", border: "1px solid #ccfbf1", transition: "all 0.2s", textDecoration: "none" }}
                      >
                        <FiGlobe size={17} />
                      </a>
                    </div>
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
