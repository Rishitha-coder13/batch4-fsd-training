import React from "react";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <div className="section-title">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-image">
            <div className="profile-circle">
              👩‍💻
            </div>
          </div>

          <div className="about-text">

            <h3>Hello! I'm Rishitha</h3>

            <p>
              I am an aspiring AI and Data Science student interested in
              building innovative and useful applications using modern
              technologies.
            </p>

            <p>
              I have a strong interest in Artificial Intelligence, Machine
              Learning, Web Development, and Data Science. I enjoy learning
              new technologies and applying my knowledge to real-world
              projects.
            </p>

            <p>
              My goal is to continuously improve my technical skills and
              create meaningful solutions using technology.
            </p>

            <div className="about-info">

              <div>
                <strong>Name:</strong>
                <span>Rishitha</span>
              </div>

              <div>
                <strong>Field:</strong>
                <span>AI & Data Science</span>
              </div>

              <div>
                <strong>Interest:</strong>
                <span>Artificial Intelligence</span>
              </div>

              <div>
                <strong>Goal:</strong>
                <span>Software Developer</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;