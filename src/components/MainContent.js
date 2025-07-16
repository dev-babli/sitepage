import { Container, Row, Col } from "reactstrap"
import { motion } from "framer-motion"
import { Fade } from "react-awesome-reveal"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const MainContent = () => {
  const features = [
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai-brain-pnlMX05fG2k4EcfNcNtIjPWCPoYJwt.png",
      title: "Unlock the power of AI",
      text: "On the other hand we denounce with righteous indignation and dislike men who beguile demonstrated by the charms pleasure",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/automation-qgmHxjz8uSaBlDa0gTKadAbp3qpAfj.png",
      title: "Design intelligent workflows",
      text: "On the other hand we denounce with righteous indignation and dislike men who beguile demonstrated by the charms pleasure",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gps-VW9ECVvMaUBwpA8OVUef0rWXS4PbNA.png",
      title: "Guide you every step",
      text: "On the other hand we denounce with righteous indignation and dislike men who beguile demonstrated by the charms pleasure",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai-assistant-VftNz2IO09TI4JRqXd1eZZa40GN8my.png",
      title: "Deploy scalable AI solutions",
      text: "On the other hand we denounce with righteous indignation and dislike men who beguile demonstrated by the charms pleasure",
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chatbot-cmQ6TWBn3OtxDtV6gDcgGlZFJKDXs9.png",
      title: "Drive growth and efficiency",
      text: "On the other hand we denounce with righteous indignation and dislike men who beguile demonstrated by the charms pleasure",
    },
  ]

  return (
    <section style={{ padding: "100px 0", backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row>
          <Col lg={5}>
            <Fade direction="left" triggerOnce>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginBottom: "50px",
                  color: "#333",
                  lineHeight: "1.3",
                }}
              >
                Empower Your Business with AI & Generative AI Consulting
              </h2>
            </Fade>
          </Col>
          <Col lg={7}>
            <Row>
              {features.map((feature, index) => (
                <Col md={6} key={index}>
                  <Fade direction="up" delay={index * 100} triggerOnce>
                    <motion.div
                      style={{
                        background: "white",
                        padding: "40px 30px",
                        borderRadius: "10px",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                        marginBottom: "30px",
                        height: "100%",
                      }}
                      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          background: "linear-gradient(45deg, #667eea, #764ba2)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "20px",
                          color: "white",
                          padding: "12px",
                        }}
                      >
                        {feature.icon ? (
                          <img
                            src={feature.icon || "/placeholder.svg"}
                            alt={feature.title}
                            style={{
                              width: "36px",
                              height: "36px",
                              filter: "brightness(0) invert(1)",
                            }}
                          />
                        ) : (
                          <CheckCircleIcon />
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
                        {feature.title}
                      </h4>
                      <p style={{ color: "#666", lineHeight: "1.6" }}>{feature.text}</p>
                    </motion.div>
                  </Fade>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MainContent
