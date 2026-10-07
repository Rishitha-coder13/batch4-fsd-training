import React from "react";
import "./App.css";

import About from "./components/about";
import Skills from "./components/skills";

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Rishitha</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="home-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Rishitha</span>
          </h1>

          <h2>AI & Data Science Student</h2>

          <p>
            I am passionate about Artificial Intelligence, Machine Learning,
            Web Development and Data Science.
          </p>

          <a href="#about" className="btn">
            Explore My Portfolio
          </a>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* Skills Component */}
      <Skills />

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>

        <div className="projects-container">
          <div className="project-card">
            <div className="project-icon">🐟</div>

            <h3>Fish Species Classification</h3>

            <p>
              A deep learning project that identifies different fish species
              from images using a trained machine learning model.
            </p>

            <div className="technology">
              Python • TensorFlow • React • FastAPI
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon">🌱</div>

            <h3>Plant Disease Detection</h3>

            <p>
              An AI-based application that detects plant diseases from leaf
              images using deep learning techniques.
            </p>

            <div className="technology">
              Python • TensorFlow • React • Machine Learning
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon">📄</div>

            <h3>AI Resume Screening</h3>

            <p>
              An application that analyzes resumes and helps identify suitable
              candidates based on job requirements.
            </p>

            <div className="technology">
              Python • AI • NLP • Flask
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2>Contact Me</h2>

          <p>
            I would love to connect with you and discuss technology,
            projects and opportunities.
          </p>

          <div className="contact-details">
            <p>📧 Email: rishitha@example.com</p>
            <p>📱 Phone: +91 XXXXX XXXXX</p>
            <p>📍 Location: India</p>
          </div>

          <a
            href="mailto:rishitha@example.com"
            className="contact-btn"
          >
            Send Me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Rishitha. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;