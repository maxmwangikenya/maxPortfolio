import React from 'react';
import './styles.css';
import {animate} from 'react-simple-animate';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    
    const handleNavigateToContactMe = () => {
        navigate('/contact'); // lowercase 'n' for the function call
    };

    return (
        <section id="home">
            <div className="animated-bg"></div>
            <div className='home_text-wrapper'>
                <h1>
                    <span>Hello, I'm Max</span>
                    <br />
                    <span>Full Stack Developer</span>
                </h1>
                <div className="btn-wrapper">
                    <button 
                        className="hire-me-btn" 
                        onClick={handleNavigateToContactMe}
                        aria-label="Hire Me Button"
                    >
                        Hire Me
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;