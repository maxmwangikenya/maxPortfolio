import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContainer';
import { BsInfoCircleFill, BsPhone, BsEnvelope, BsMap } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import './styles.css';

const Contact = () => {    
    return (
        <section id='contact' className='contact dark-theme'>
            <PageHeaderContent 
                headerText='Contact Me'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="contact__content">
                <div className="contact__container">
                    {/* Contact Information - Larger Left Section */}
                    <div className="contact__info">
                        <h3 className="contact__title">Get in Touch</h3>
                        <p className="contact__text">
                            Have a project in mind or want to discuss potential opportunities? 
                            Feel free to reach out! I'm always open to new collaborations.
                        </p>

                        <div className="contact__details">
                            <div className="contact__item">
                                <div className="contact__icon-container">
                                    <BsPhone className="contact__icon" />
                                </div>
                                <div className="contact__text-container">
                                    <h4>Call Me</h4>
                                    <span>+(254) 90771737</span>
                                </div>
                            </div>

                            <div className="contact__item">
                                <div className="contact__icon-container">
                                    <BsEnvelope className="contact__icon" />
                                </div>
                                <div className="contact__text-container">
                                    <h4>Email</h4>
                                    <span>maxmwangikenya.com</span>
                                </div>
                            </div>

                            <div className="contact__item">
                                <div className="contact__icon-container">
                                    <BsMap className="contact__icon" />
                                </div>
                                <div className="contact__text-container">
                                    <h4>Location</h4>
                                    <span>Nairobi Kenya, KE</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact__socials">
                            <h4 className="socials__title">Connect With Me</h4>
                            <div className="socials__container">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="social__link">
                                    <span>LinkedIn</span>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="social__link">
                                    <span>GitHub</span>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="social__link">
                                    <span>Twitter</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact__form">
                        <h3 className="contact__title">Send a Message</h3>
                        <form>
                            <div className="form__group">
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="form__input" 
                                    required 
                                />
                            </div>
                            <div className="form__group">
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="form__input" 
                                    required 
                                />
                            </div>
                            <div className="form__group">
                                <input 
                                    type="text" 
                                    placeholder="Subject" 
                                    className="form__input" 
                                    required 
                                />
                            </div>
                            <div className="form__group">
                                <textarea 
                                    placeholder="Your Message" 
                                    className="form__input form__textarea" 
                                    rows="6" 
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="form__submit">
                                Send Message <FaPaperPlane className="submit__icon" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;