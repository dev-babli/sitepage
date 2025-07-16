"use client"
import { Container, Row, Col } from "reactstrap"
import { motion } from "framer-motion"
import { Fade } from "react-awesome-reveal"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const ServicesHighlight = () => {
  const services = [
    "Comprehensive UI/UX Assessment",
    "Deep Contextual Research and 360° Planning",
    "Wireframing & Prototyping",
  ]

  return (
    <section style={{ padding: "100px 0", backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row>
          <Col lg={6}>
            <Fade direction="left" triggerOnce>
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "30px",
                  color: "#333",
                  lineHeight: "1.3",
                }}
              >
                Harness the full potential of Artificial Intelligence to innovate, automate, and grow.
              </h2>

              <p
                style={{
                  color: "#666",
                  fontSize: "1.1rem",
                  marginBottom: "40px",
                  lineHeight: "1.6",
                }}
              >
                Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium totam rem
                aperiam eaque ipsa quae ab illo inventore veritatis et quasi.
              </p>

              {services.map((service, index) => (
                <Fade key={index} direction="right" delay={index * 100} triggerOnce>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <CheckCircleIcon
                      style={{
                        color: "#28a745",
                        marginRight: "15px",
                        fontSize: "1.5rem",
                      }}
                    />
                    <span
                      style={{
                        color: "#333",
                        fontSize: "1.1rem",
                        fontWeight: "500",
                      }}
                    >
                      {service}
                    </span>
                  </div>
                </Fade>
              ))}

              <motion.button
                style={{
                  backgroundColor: "#17a2b8",
                  border: "none",
                  padding: "15px 30px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  marginTop: "30px",
                  color: "white",
                  cursor: "pointer",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services →
              </motion.button>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ServicesHighlight
