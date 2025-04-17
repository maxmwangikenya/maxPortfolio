import React from "react";
import PageHeaderContent from "../../components/pageHeaderContainer";
import { BsInfoCircleFill } from 'react-icons/bs';

const Resume = () => {
    return (
        <section id='resume' className='resume'>
            <PageHeaderContent 
                headerText='My Resume'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                {/* Content goes here */}
            </div>
        </section>
    );
}

export default Resume;