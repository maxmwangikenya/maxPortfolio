import React from "react";
import PageHeaderContent from "../../components/pageHeaderContainer";
import { BsInfoCircleFill } from 'react-icons/bs';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { data } from './utilis';
import './styles.css';

const Resume = () => {
    return (
        <section id='resume' className='resume dark-theme'>
            <PageHeaderContent
                headerText='My Resume'
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="resume__container">
                {/* Experience Section */}
                <div className="resume__column">
                    <h3 className="resume__section-header">Experience</h3>
                    <VerticalTimeline layout="1-column" lineColor="var(--yellow-theme-main-color)">
                        {data.experience.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline_element"
                                iconStyle={{
                                    background: 'var(--yellow-theme-main-color)',
                                    color: '#fff',
                                }}
                                contentStyle={{
                                    background: 'rgba(30, 30, 30, 0.9)',
                                    color: '#fff',
                                    fontFamily: "'Poppins', sans-serif",
                                    border: '1px solid #333'
                                }}
                                contentArrowStyle={{
                                    borderRight: '7px solid rgba(30, 30, 30, 0.9)',
                                }}
                            >
                                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                                <p>{item.description}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>

                {/* Education Section */}
                <div className="resume__column">
                    <h3 className="resume__section-header">Education</h3>
                    <VerticalTimeline layout="1-column" lineColor="var(--yellow-theme-main-color)">
                        {data.education.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline_element"
                                iconStyle={{
                                    background: 'var(--yellow-theme-main-color)',
                                    color: '#fff',
                                }}
                                contentStyle={{
                                    background: 'rgba(30, 30, 30, 0.9)',
                                    color: '#fff',
                                    fontFamily: "'Poppins', sans-serif",
                                    border: '1px solid #333'
                                }}
                                contentArrowStyle={{
                                    borderRight: '7px solid rgba(30, 30, 30, 0.9)',
                                }}
                            >
                                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                                <p>{item.description}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default Resume;