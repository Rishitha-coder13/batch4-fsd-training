import React from "react";

function Skills() {
  const skills = [
    {
      icon: "🐍",
      name: "Python",
      description: "Programming & AI"
    },
    {
      icon: "🤖",
      name: "Machine Learning",
      description: "ML Algorithms"
    },
    {
      icon: "🧠",
      name: "Deep Learning",
      description: "Neural Networks"
    },
    {
      icon: "🌐",
      name: "HTML & CSS",
      description: "Web Development"
    },
    {
      icon: "⚛️",
      name: "React",
      description: "Frontend Development"
    },
    {
      icon: "📊",
      name: "Data Science",
      description: "Data Analysis"
    }
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="section-title">
        <p>MY EXPERTISE</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <p>{skill.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;