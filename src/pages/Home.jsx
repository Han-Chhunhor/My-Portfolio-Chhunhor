import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaFacebook, FaYoutube, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-inbio">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-inbio">
        <div className="hero-inbio-content">
          <span className="hero-badge">WELCOME TO MY WORLD</span>
          <h1 className="hero-name-inbio">
            Hi, I'm <span className="highlight">{personalInfo.name}</span>
          </h1>
          <p className="hero-title-inbio">a {personalInfo.title}</p>
          <p className="hero-bio-inbio">{personalInfo.summary}</p>
          
          {/* Social Icons */}
          <div className="hero-social">
            <span className="social-label">FIND WITH ME</span>
            <div className="social-icons-inbio">
              <a href="https://web.facebook.com/profile.php?id=100011639634737" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/@ChhunhorHan" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://github.com/Chhunhor" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
          
          {/* Best Skills */}
          <div className="hero-skills">
            <span className="skills-label">BEST SKILL ON</span>
            <div className="skills-badges">
              <span className="skill-badge">React</span>
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">UI/UX</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES / WHAT I DO ===== */}
      <section className="features-inbio">
        <h2 className="features-title">WHAT I DO</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Business Strategy</h3>
            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
          </div>
          <div className="feature-card">
            <h3>App Development</h3>
            <p>We'll handle everything from app development process until it is time to make your project live.</p>
          </div>
          <div className="feature-card">
            <h3>SEO Optimisation</h3>
            <p>Your website ranking matters. Our SEO services will help you get to the top of the ranks!</p>
          </div>
          <div className="feature-card">
            <h3>UX Consulting</h3>
            <p>A UX consultant is responsible for many of the same tasks as a UX designer.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;