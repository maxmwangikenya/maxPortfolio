import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContainer';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import './styles.css';

const skillData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", percentage: "95%", icon: "html5" },
      { name: "CSS3/Sass", percentage: "90%", icon: "css3" },
      { name: "JavaScript (ES6+)", percentage: "85%", icon: "javascript" },
      { name: "React.js", percentage: "88%", icon: "react" },
      { name: "Responsive Design", percentage: "92%", icon: "responsive" }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", percentage: "85%", icon: "nodejs" },
      { name: "Express.js", percentage: "80%", icon: "express" },
      { name: "RESTful APIs", percentage: "88%", icon: "api" },
      { name: "GraphQL", percentage: "75%", icon: "graphql" }
    ]
  },
  {
    category: "Database & DevOps",
    skills: [
      { name: "MongoDB", percentage: "80%", icon: "mongodb" },
      { name: "MySQL", percentage: "75%", icon: "mysql" },
      { name: "PostgreSQL", percentage: "70%", icon: "postgresql" },
      { name: "Docker", percentage: "65%", icon: "docker" },
      { name: "Git/GitHub", percentage: "90%", icon: "git" },
    ]
  }
];

const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <PageHeaderContent
        headerText='My Skills'
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillData.map((category, index) => (
          <div key={index} className="skills__category">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ transform: 'translateX(-200px)' }}
              end={{ transform: 'translateX(0px)' }}
            >
              <h3 className="skills__category-title">{category.category}</h3>
              <div className="skills__list">
                {category.skills.map((skill, skillIndex) => (
                  <AnimateKeyframes
                    key={skillIndex}
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount="1"
                  >
                    <div className="skill__item">
                      <div className="skill__info">
                        <span className="skill__name">{skill.name}</span>
                        <span className="skill__percentage">{skill.percentage}</span>
                      </div>
                      <div className="skill__progress">
                        <div
                          className="skill__progress-bar"
                          style={{
                            width: skill.percentage,
                            backgroundColor: 'var(--yellow-theme-main-color)'
                          }}
                        />
                      </div>
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
