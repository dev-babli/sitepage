import { Navbar, Nav, Container } from "reactstrap"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
      <Navbar
        expand="lg"
        fixed="top"
        className="custom-navbar"
        style={{
          backgroundColor: "#3f51b5",
          padding: "15px 0",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Container>
          <div className="navbar-brand d-flex align-items-center">
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            ></div>
            <span style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}>INTELLECTT</span>
          </div>

          <Nav className="ms-auto d-flex align-items-center">
            <AnchorLink href="#company" className="nav-link text-white mx-3" style={{ fontWeight: "500" }}>
              Company ▼
            </AnchorLink>
            <AnchorLink href="#services" className="nav-link text-white mx-3" style={{ fontWeight: "500" }}>
              Services ▼
            </AnchorLink>
            <AnchorLink href="#industries" className="nav-link text-white mx-3" style={{ fontWeight: "500" }}>
              Industries ▼
            </AnchorLink>
            <AnchorLink href="#insights" className="nav-link text-white mx-3" style={{ fontWeight: "500" }}>
              Insights ▼
            </AnchorLink>
            <AnchorLink href="#careers" className="nav-link text-white mx-3" style={{ fontWeight: "500" }}>
              Careers ▼
            </AnchorLink>
            <AnchorLink href="#contact" className="nav-link text-white mx-3" style={{ fontWeight: "500" }}>
              Contact ▼
            </AnchorLink>
                        <NavLink to="/new" className="nav-link text-white mx-3" style={{ fontWeight: "500" }}>
                            New Page
                        </NavLink>
            <button
              className="btn"
              style={{
                backgroundColor: "#ffc107",
                border: "none",
                borderRadius: "25px",
                padding: "10px 25px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Let's talk →
            </button>
          </Nav>
        </Container>
      </Navbar>
    </motion.div>
  )
}

export default Header
