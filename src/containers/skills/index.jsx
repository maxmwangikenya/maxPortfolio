import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContainer';
import { BsInfoCircleFill } from 'react-icons/bs';

const Skills = () => {
    return (
        <section id='about' className='about'>
          <PageHeaderContent 
            headerText='About Me'
            icon={<BsInfoCircleFill size={40} />}
          />
          <div className="about__content">
            {/* Content goes here */}
          </div>
        </section>
      );
}

export default Skills;