import { BrowserRouter as Router } from "react-router-dom"
import { ParallaxProvider } from "react-scroll-parallax"
import { ToastContainer } from "react-toastify"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import MainContent from "./components/MainContent"
import ServicesGrid from "./components/ServicesGrid"
import ServicesHighlight from "./components/ServicesHighlight"
import Partnerships from "./components/Partnerships"
import ContactSection from "./components/ContactSection"
import NewPage from "./components/NewPage"

// Import CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "react-toastify/dist/ReactToastify.css"
import "./App.scss"

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <MainContent />
                <ServicesGrid />
                <ServicesHighlight />
                <Partnerships />
                <ContactSection />
              </>
            } />
            <Route path="/new" element={<NewPage />} />
          </Routes>
          <ToastContainer position="top-right" />
        </div>
      </ParallaxProvider>
    </Router>
  )
}

export default App
