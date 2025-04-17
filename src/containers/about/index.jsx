import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContainer';
import './styles.css';
import { Animate } from 'react-simple-animate';

const personalDetails = [
  {
    label: "Full Name",
    value: "Max Mahinda Mwangi"
  },
  {
    label: "Age",
    value: 30
  },
  {
    label: "Address",
    value: "Nairobi, Kenya"
  },
  {
    label: "Email",
    value: "maxmwangikenya@gmail.com",
    type: "email"
  },
  {
    label: "Phone Number",
    value: "+254790771737",
    type: "tel"
  }
];

const jobSummary = `I am a passionate full-stack developer with 2 years of hands-on experience building robust web applications. My expertise spans both frontend (React, JavaScript, HTML/CSS) and backend (Node.js, Express, databases) development. I specialize in creating responsive, user-friendly interfaces while ensuring scalable server-side architecture.`;

const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent 
        headerText='My skills'
        icon={<BsInfoCircleFill size={40} />}
      />
      
      <div className="about__content">
        {/* Your other content here */}
      </div>

      <div className='about__animation-container'>
        {/* First Animated Line */}
        <Animate
          play
          duration={1.5}
          delay={0.3}
          start={{ 
            opacity: 0,
            transform: 'translateX(-100px)' 
          }}
          end={{ 
            opacity: 1,
            transform: 'translateX(0)' 
          }}
        >
          <h3 className='animated-line'>Full Stack Developer</h3>
        </Animate>

        {/* Second Animated Line */}
        <Animate
          play
          duration={1.5}
          delay={0.6}
          start={{ 
            opacity: 0,
            transform: 'translateX(100px)' 
          }}
          end={{ 
            opacity: 1,
            transform: 'translateX(0)' 
          }}
        >
          <h3 className='animated-line'>Full Stack Developer</h3>
        </Animate>

        {/* Job Summary Animation */}
        <Animate
          play
          duration={1.5}
          delay={0.9}
          start={{ 
            opacity: 0,
            transform: 'translateY(20px)' 
          }}
          end={{ 
            opacity: 1,
            transform: 'translateY(0)' 
          }}
        >
          <p className='job-summary'>{jobSummary}</p>
        </Animate>

        {/* Personal Details Animation */}
        <Animate
          play
          duration={1.5}
          delay={1.2}
          start={{ 
            opacity: 0 
          }}
          end={{ 
            opacity: 1 
          }}
        >
          <ul className='personal-details-list'>
            {personalDetails.map((item, index) => (
              <li key={index}>
                <span className='title'>{item.label}: </span>
                <span className='value'>{item.value}</span>
              </li>
            ))}
          </ul>
        </Animate>
      </div>
    </section>
  );
};

export default About;