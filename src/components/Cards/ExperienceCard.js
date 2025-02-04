import React from "react";
import { Top, Image, Body, Role, 
        Company, Date, Description, Skills, 
        ItemWrapper, Skill, Span } from "./ExperienceCardStyle";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            icon={
                <img 
                    width="100%"
                    height="100%"
                    alt={experience.school}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                    src={experience.img}
                />
            }
            contentStyle={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "#1d1836",
                color: "#fff",
                boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                // backdropFilter: "blur(3px) saturate(106%)",
                backgroundColor: "rgba(17, 25, 40, 0.83)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                borderRadius: "6px",
            }}
            contentArrowStyle={{
                borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
            }}
            date={experience.date}
        >
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience.descriptions.map((description) => (
                    <Span>• {description}</Span>
                ))}
                
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience.skills.map((skill) => (
                                    <Skill>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
        </VerticalTimelineElement>
    )
};

export default ExperienceCard;