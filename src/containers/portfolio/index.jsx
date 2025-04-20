import React from "react";
import PageHeaderContent from "../../components/pageHeaderContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./styles.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, product management, and user authentication.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/400x250/333/666?text=E-Commerce",
      github: "#",
      liveDemo: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application for team collaboration with real-time updates and task tracking.",
      technologies: ["React", "Firebase", "Redux", "Material UI"],
      image: "https://via.placeholder.com/400x250/333/666?text=Task+App",
      github: "#",
      liveDemo: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather application with 5-day forecasts and location-based services.",
      technologies: ["JavaScript", "OpenWeather API", "CSS3", "HTML5"],
      image: "https://via.placeholder.com/400x250/333/666?text=Weather+App",
      github: "#",
      liveDemo: "#"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Dashboard for tracking social media metrics and engagement across multiple platforms.",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "https://via.placeholder.com/400x250/333/666?text=Analytics",
      github: "#",
      liveDemo: "#"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Mobile-responsive application for tracking workouts and nutrition with progress charts.",
      technologies: ["React Native", "GraphQL", "MongoDB", "Apollo"],
      image: "https://via.placeholder.com/400x250/333/666?text=Fitness+App",
      github: "#",
      liveDemo: "#"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Search engine for recipes with filtering by ingredients, dietary needs, and cooking time.",
      technologies: ["Vue.js", "Spoonacular API", "Vuex", "SCSS"],
      image: "https://via.placeholder.com/400x250/333/666?text=Recipes",
      github: "#",
      liveDemo: "#"
    }
  ];

  return (
    <section id='portfolio' className='portfolio dark-theme'>
      <PageHeaderContent 
        headerText='My Portfolio'
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <div className="portfolio__filter">
          <button className="active">All</button>
          <button>Web</button>
          <button>Mobile</button>
          <button>Design</button>
        </div>
        
        <div className="portfolio__projects">
          {projects.map((project) => (
            <div key={project.id} className="project__card">
              <div className="project__image">
                <img src={project.image} alt={project.title} />
                <div className="project__overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="project__info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project__technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

