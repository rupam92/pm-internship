'use client'

import { Col, Container, Row } from "react-bootstrap";

interface Tool {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const Cards: React.FC = () => {
  const tools: Tool[] = [
    {
      id: 1,
      title: "Find Wedding Vendors",
      description:
        "Discover trusted photographers, decorators, caterers, makeup artists, and more for your perfect wedding.",
      icon: "/media/buyersTools/need1.png",
    },
    {
      id: 2,
      title: "Request Quotes",
      description:
        "Send requirements to multiple vendors and compare pricing, packages, and services easily.",
      icon: "/media/buyersTools/need2.png",
    },
    {
      id: 3,
      title: "Wedding Shopping",
      description:
        "Buy wedding essentials, gifts, decorations, and event materials in bulk at better prices.",
      icon: "/media/buyersTools/need3.png",
    },
    {
      id: 4,
      title: "Wedding Trends",
      description:
        "Explore the latest wedding themes, decoration ideas, fashion trends, and event inspirations.",
      icon: "/media/sellerTools/iMSME4.png",
    },
    {
      id: 5,
      title: "Secure Payments",
      description:
        "Manage bookings and make secure online payments with easy tracking and confirmation.",
      icon: "/media/buyersTools/need5.png",
    },
    {
      id: 6,
      title: "24/7 Support",
      description:
        "Get instant assistance for venue booking, vendor coordination, and wedding planning queries.",
      icon: "/media/buyersTools/need6.png",
    },
  ];

  return (
    <div className="my-3 py-1">
      <Container className="my-md-3 py-4">

        {/* Header */}
        <h2 className="fw-bold mb-5 pb-2 text-center">
          Everything You Need For Your Dream Wedding
        </h2>

        {/* Tools Grid */}
        <Row className="gy-4 gx-md-5">
          {tools.map((tool) => (
            <Col
              key={tool.id}
              xs={12}
              md={6}
              lg={4}
            >
              <div
                className="border rounded-4 p-4 h-100 text-center shadow-sm"
                style={{
                  backgroundColor: "#eedbca",
                  transition: "0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >

                {/* Icon */}
                <div className="d-flex align-items-center justify-content-center mx-auto mb-4 mt-2">
                  <img
                    src={tool.icon}
                    alt={tool.title}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* Title */}
                <h5
                  className="fw-bold mb-3"
                  style={{ color: "#6b4f3b" }}
                >
                  {tool.title}
                </h5>

                {/* Description */}
                <p
                  className="text-muted mb-0"
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                  }}
                >
                  {tool.description}
                </p>

              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
};

export default Cards;