"use client"
import { Container, Row, Col } from "reactstrap"
import { motion } from "framer-motion"
import { Fade } from "react-awesome-reveal"

const ServicesGrid = () => {
  const services = [
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai-assistant-VftNz2IO09TI4JRqXd1eZZa40GN8my.png",
      title: "GenAI & LLM Integration",
      text: "With over 10 year of experience B2C implement Sector",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chatbot-cmQ6TWBn3OtxDtV6gDcgGlZFJKDXs9.png",
      title: "Agentic AI & AI Agents",
      text: "implement Sector",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai-brain-pnlMX05fG2k4EcfNcNtIjPWCPoYJwt.png",
      title: "NLP & Computer Vision",
      text: "With over 10 year of experience B2C implement Sector",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompt-engineering-1Smga0ZKJHzv3oE59wTRUkyHQz9Aim.png",
      title: "ML Engineering & MLOps",
      text: "With over 10 year of experience B2C implement Sector",
    },
    {
      icon: "🛡️",
      title: "AI Advisory & Responsible AI",
      text: "With over 10 year of experience B2C implement Sector",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/automation-qgmHxjz8uSaBlDa0gTKadAbp3qpAfj.png",
      title: "AI Automation (AI + RPA)",
      text: "With over 10 year of experience B2C implement Sector",
    },
  ]

  return (
    <section style={{ padding: "100px 0", backgroundColor: "white" }}>
      <Container>
        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index}>
              <Fade direction="up" delay={index * 100} triggerOnce>
                <motion.div
                  style={{
                    background: "#f8f9fa",
                    padding: "40px 30px",
                    borderRadius: "15px",
                    textAlign: "center",
                    marginBottom: "30px",
                    height: "100%",
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(45deg, #667eea, #764ba2)",
                      borderRadius: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                      color: "white",
                      fontSize: "2rem",
                      padding: "15px",
                    }}
                  >
                    {service.icon.startsWith("http") ? (
                      <img
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        style={{
                          width: "50px",
                          height: "50px",
                          filter: "brightness(0) invert(1)",
                        }}
                      />
                    ) : (
                      service.icon
                    )}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      marginBottom: "15px",
                      color: "#333",
                    }}
                  >
                    {service.title}
                  </h4>
                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.9rem",
                      marginBottom: "10px",
                    }}
                  >
                    {service.text}
                  </p>
                </motion.div>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ServicesGrid
