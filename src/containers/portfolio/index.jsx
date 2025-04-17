import React from "react";
import PageHeaderContent from "../../components/pageHeaderContainer";
import { BsInfoCircleFill } from "react-icons/bs";

const Portfolio = () => {
    return (
        <section id='portfolio' className='portfolio'>
            <PageHeaderContent 
                headerText=' My Portfolio'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">
                {/* Content goes here */}
            </div>
        </section>
    );
}

export default Portfolio;