import { Container } from "reactstrap"
import { motion } from "framer-motion"
import { Fade } from "react-awesome-reveal"
import Marquee from "react-fast-marquee"

const Partnerships = () => {
  const partners = [
    { name: "Red Hat", logo: "🔴" },
    { name: "Google Cloud", logo: "☁️" },
    { name: "AWS", logo: "🟠" },
    { name: "Automation", logo: "⚙️" },
    { name: "UiPath", logo: "🤖" },
    { name: "Citrix", logo: "🔷" },
    { name: "IBM", logo: "🔵" },
    { name: "Salesforce", logo: "☁️" },
    { name: "SAP", logo: "🟡" },
  ]

  return (
    <section style={{ padding: "100px 0", backgroundColor: "white" }}>
      <Container>
        <Fade direction="up" triggerOnce>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "80px",
              color: "#333",
            }}
          >
            Alliances & Partnerships
          </h2>
        </Fade>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "60px",
          }}
        >
          <div style={{ flex: 1 }}>
            <Fade direction="left" triggerOnce>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI-%26-Gen-AI.jpg-Q49caLiCRqL3obtXGJHLl96gKiwAvd.jpeg"
                alt="Business partnership handshake"
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              />
            </Fade>
          </div>

          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "40px",
              alignItems: "center",
            }}
          >
            {partners.map((partner, index) => (
              <Fade key={index} direction="up" delay={index * 50} triggerOnce>
                <motion.div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    background: "white",
                    borderRadius: "10px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span style={{ fontSize: "2rem" }}>{partner.logo}</span>
                </motion.div>
              </Fade>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "60px" }}>
          <Marquee speed={50} gradient={false}>
            {partners.map((partner, index) => (
              <div
                key={index}
                style={{
                  margin: "0 40px",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#666",
                }}
              >
                {partner.logo} {partner.name}
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  )
}

export default Partnerships
