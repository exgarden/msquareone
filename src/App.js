import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header'; // Corrected import path and case sensitivity
import HeroSection from './components/Homepage/herosection'; // Corrected import path and case sensitivity
import AboutSection from './components/Homepage/aboutsection'; // Corrected import path and case sensitivity
import ServicesSection from './components/Homepage/ServicesSection'; // Corrected import path
import SolutionSection from './components/Homepage/SolutionSection'; // Corrected import path
import KnowledgeSharingSection from './components/Homepage/KnowledgeSharingSection'; // Corrected import path
import Footer from './components/Homepage/Footer'; // Corrected import path
import AboutHero from './components/Aboutpage/abouthero'; // Import AboutPage component
import BlogHero from './components/blogpage/bloghero'; // Import BlogPage component
import 'bootstrap/dist/css/bootstrap.min.css';  
import AboutMission from './components/Aboutpage/aboutmission';
import AboutTeam from './components/Aboutpage/aboutteam';
import BlogList from './components/blogpage/bloglist';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS (for interactive components like navbar)

function App() {  
  return (
    <Router>
      <>
        {/* Header */}
        <Header />

        {/* Routes */}
        <Routes>

          {/* Home page route */}
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <SolutionSection />
              <ServicesSection />
              <KnowledgeSharingSection />
            </>
          } />

          {/* About page route */}
          <Route path="/about" element={
            <>
              <AboutHero />
              <AboutMission />
              <AboutTeam />
            </>
          } />

          {/* Blog page route */}
          <Route path="/blog" element={
            <>
              <BlogHero />
              <BlogList />
            </>
          } />

        </Routes>

        {/* Footer */}
        <Footer />
      </>
    </Router>
  );
}

export default App;
