import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Project = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation will only happen once
    });
  }, []);

  const projects = [
    {
      name: "Resume Builder",
      description:
        "A resume builder is an online tool or software that helps users create professional resumes quickly and easily.It typically offers customizable templates, pre-written content suggestions, and a user-friendly interface to input personal details, work experience, education, and skills—resulting in a polished, job-ready resume without the need for design or formatting skills.",
      technologies: [
        "HTML",
        "Tailwind-CSS",
        "Vanilla-Css",
        "JavaScript",
        "API",
      ],
      link: "https://rajnandini2039.github.io/Resume-Builder/",
    },
    {
      name: "Education Planner",
      description:
        "The Education Planner in a project is a feature designed to help users organize and manage their learning journey. It typically allows users to set educational goals, track progress, and receive personalized course or topic recommendations based on their career interests.",
      technologies: ["HTML", "Vanilla-Css", "React.js"],
      link: "https://education-planner-plum.vercel.app/",
    },
    {
      name: "Infinite Scroll",
      description:
        "Infinite Scroll is a web design technique where new content loads automatically as the user scrolls down the page, without needing to click a Next button. It's commonly used in social media feeds and content-heavy websites to provide a seamless browsing experience and keep users engaged.",
      technologies: ["HTML", "CSS", "JavaScript", "unsplash-API"],
      link: "https://rajnandini2039.github.io/Infinite-Scroll/",
    },
  ];

  return (
    <section className={`projects ${isMenuOpen ? "active" : ""}`} id="projects">
      <h2 data-aos="fade-up">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="view-project-button">View Project</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;