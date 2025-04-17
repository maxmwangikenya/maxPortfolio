import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContainer';
import './styles.css';
import { Animate } from 'react-simple-animate';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';

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
        headerText='About me'
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__main-content">
        {/* Left Column - Text Content */}
        <div className='about__left-column'>
          <Animate
            play
            duration={1.5}
            delay={0.3}
            start={{
              opacity: 0,
              transform: 'translateX(-900px)'
            }}
            end={{
              opacity: 1,
              transform: 'translateX(0)'
            }}
          >
            <h3 className='animated-line'>Full Stack Developer</h3>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1.3}
            start={{
              opacity: 0,
              transform: 'translateX(-900px)'
            }}
            end={{
              opacity: 1,
              transform: 'translateX(0px)'
            }}
          >
            <p className='job-summary'>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1.3}
            start={{
              opacity: 0,
              transform: 'translateX(-100px)'
            }}
            end={{
              opacity: 1,
              transform: 'translateX(0px)'
            }}
          >
            <div className="personal-info-section">
              <h3 className='animated-line'>Personal Information</h3>
              <ul className='personal-details-list'>
                {personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className='title'>{item.label}: </span>
                    <span className='value'>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Animate>
        </div>

        {/* Right Column - Orbiting Icons */}
        <div className="about__right-column">
          <Animate
            play
            duration={1.5}
            delay={1.3}
            start={{
              opacity: 0,
              transform: 'translateX(100px)' // Changed to positive for right entrance
            }}
            end={{
              opacity: 1,
              transform: 'translateX(0px)'
            }}
          >
            <div className="about_content_servicewrapper">
              <div className='about_content_servicewrapper_innerContent'>
                <div className="orbiting-icon" style={{ '--delay': '0s' }}>
                  <FaDev size={60} color='var(--yellow-theme-main-color)' />
                </div>
                <div className="orbiting-icon" style={{ '--delay': '0.5s' }}>
                  <DiAndroid size={60} color='var(--yellow-theme-main-color)' />
                </div>
                <div className="orbiting-icon" style={{ '--delay': '1s' }}>
                  <FaDatabase size={60} color='var(--yellow-theme-main-color)' />
                </div>
                <div className="orbiting-icon" style={{ '--delay': '1.5s' }}>
                  <DiApple size={60} color='var(--yellow-theme-main-color)' />
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;