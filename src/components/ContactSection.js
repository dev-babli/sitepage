"use client"

import { useState } from "react"
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap"
import { motion } from "framer-motion"
import { Fade } from "react-awesome-reveal"
import { toast } from "react-toastify"
import SimpleReactValidator from "simple-react-validator"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  })

  const [validator] = useState(new SimpleReactValidator())
  const [, forceUpdate] = useState()

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validator.allValid()) {
      toast.success("Message sent successfully!")
      console.log("Form submitted:", formData)
      // Reset form
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        message: "",
      })
      validator.hideMessages()
    } else {
      validator.showMessages()
      forceUpdate(1)
      toast.error("Please fill in all required fields correctly.")
    }
  }

  const consultationSteps = [
    {
      number: 1,
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telephone-iSBJTVgdOYK6iItNjZs91Rp1V4XENn.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
      number: 2,
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/letter-AgSsQsstIpxDzzrq8VPgDN8bASVq6o.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
      number: 3,
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chatbot-cmQ6TWBn3OtxDtV6gDcgGlZFJKDXs9.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
  ]

  return (
    <section id="contact" style={{ padding: "100px 0", backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row>
          <Col lg={6}>
            <Fade direction="left" triggerOnce>
              <div style={{ color: "#667eea", fontWeight: "bold", marginBottom: "20px" }}>Need Consultation? →</div>
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "50px",
                  color: "#333",
                }}
              >
                Have A Project? We Would Love To Hear From You.
              </h2>

              {consultationSteps.map((step, index) => (
                <Fade key={index} direction="right" delay={index * 100} triggerOnce>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "30px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "#667eea",
                        color: "white",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        marginRight: "20px",
                        flexShrink: 0,
                      }}
                    >
                      {step.number}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <img
                          src={step.icon || "/placeholder.svg"}
                          alt=""
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "10px",
                            opacity: 0.7,
                          }}
                        />
                        <h5
                          style={{
                            fontWeight: "bold",
                            margin: 0,
                            color: "#333",
                          }}
                        >
                          {step.title}
                        </h5>
                      </div>
                      <p style={{ color: "#666", margin: 0 }}>{step.description}</p>
                    </div>
                  </div>
                </Fade>
              ))}
            </Fade>
          </Col>

          <Col lg={6}>
            <Fade direction="right" triggerOnce>
              <motion.div
                style={{
                  background: "white",
                  padding: "40px",
                  borderRadius: "15px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    marginBottom: "30px",
                    color: "#333",
                  }}
                >
                  Get In Touch With Us
                </h3>

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      style={{
                        border: "2px solid #e9ecef",
                        borderRadius: "8px",
                        padding: "15px",
                        fontSize: "1rem",
                        marginBottom: "10px",
                      }}
                    />
                    {validator.message("fullName", formData.fullName, "required")}
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      style={{
                        border: "2px solid #e9ecef",
                        borderRadius: "8px",
                        padding: "15px",
                        fontSize: "1rem",
                        marginBottom: "10px",
                      }}
                    />
                    {validator.message("phoneNumber", formData.phoneNumber, "required|phone")}
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        border: "2px solid #e9ecef",
                        borderRadius: "8px",
                        padding: "15px",
                        fontSize: "1rem",
                        marginBottom: "10px",
                      }}
                    />
                    {validator.message("email", formData.email, "required|email")}
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="textarea"
                      name="message"
                      placeholder="Message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{
                        border: "2px solid #e9ecef",
                        borderRadius: "8px",
                        padding: "15px",
                        fontSize: "1rem",
                        marginBottom: "10px",
                        resize: "vertical",
                      }}
                    />
                    {validator.message("message", formData.message, "required")}
                  </FormGroup>

                  <motion.button
                    type="submit"
                    style={{
                      background: "linear-gradient(45deg, #667eea, #764ba2)",
                      border: "none",
                      padding: "15px 40px",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      width: "100%",
                      fontSize: "1.1rem",
                      color: "white",
                      cursor: "pointer",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message →
                  </motion.button>
                </Form>
              </motion.div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactSection
