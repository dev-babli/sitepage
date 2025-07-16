import { useEffect, useRef } from "react"
import { Container, Row, Col } from "reactstrap"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Parallax } from "react-scroll-parallax"

const HeroSection = () => {
  const heroRef = useRef()
  const titleRef = useRef()
  const subtitleRef = useRef()
  const buttonRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .fromTo(buttonRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6 }, "-=0.3")
  }, [])

  return (
    <section
      ref={heroRef}
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "60%",
          height: "100%",
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20%26%20Geb%20AI%20Header-MZoijkNnUTpBC0492RgGSsGjmOrBp2.webp)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
          backgroundSize: "cover",
          opacity: 0.9,
        }}
      />

      <Container>
        <Row>
          <Col lg={6}>
            <Parallax speed={-10}>
              <div style={{ position: "relative", zIndex: 2, color: "white" }}>
                <motion.h1
                  ref={titleRef}
                  style={{
                    fontSize: "4rem",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    lineHeight: "1.2",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  AI & Gen AI
                  <br />
                  Consulting
                </motion.h1>

                <p
                  ref={subtitleRef}
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "30px",
                    opacity: 0.9,
                  }}
                >
                  Build. Evaluate. Generate.
                </p>

                <motion.button
                  ref={buttonRef}
                  style={{
                    backgroundColor: "#ffc107",
                    border: "none",
                    padding: "15px 30px",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    borderRadius: "5px",
                    color: "#333",
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  TALK TO OUR EXPERTS
                </motion.button>
              </div>
            </Parallax>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
