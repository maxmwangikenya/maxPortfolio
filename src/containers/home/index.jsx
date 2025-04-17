import React from 'react';
import './styles.css';
import { useAnimate } from 'react-simple-animate';  // Correct import
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const { play, style } = useAnimate({
        start: { opacity: 0, transform: 'translateY(20px)' },
        end: { opacity: 1, transform: 'translateY(0)' },
    });

    // Trigger animation on mount
    React.useEffect(() => {
        play(true);
    }, []);

    const handleNavigateToContactMe = () => {
        navigate('/contact');
    };

    return (
        <section id="home">
            <div className="animated-bg"></div>
            <div className='home_text-wrapper'>
                <h1>
                    <span style={style}>Hello, I'm Max</span>
                    <br />
                    <span style={style}>Full Stack Developer</span>
                </h1>
                <div className="btn-wrapper" style={style}>
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
};

export default Home;