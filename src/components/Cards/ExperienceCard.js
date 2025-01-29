import React from "react";
import { Card, Top, Logo, Body, Role, 
    Company, Duration, Description, Skills, 
    ItemWrapper, Skill, Document, Task } from "./ExperienceCardStyle";

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Logo src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Duration>{experience.date}</Duration>
                </Body>
            </Top>
            <Description>
                {experience.descriptions.map((description) => (
                    <Task>• {description}</Task>
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

            {experience.doc && 
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
};

export default ExperienceCard;