import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContainer';
import { BsInfoCircleFill } from 'react-icons/bs';

const Contact = () => {    
    return (
        <section id='contact' className='My contact'>
            <PageHeaderContent 
                headerText='Contact'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="contact__content">
                {/* Content goes here */}
            </div>
        </section>
    );
}

export default Contact;