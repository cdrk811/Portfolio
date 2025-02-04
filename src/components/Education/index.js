import React from 'react';
import { educations } from "../../data/constants";
import { Container, Wrapper, Title, Desc } from "./EducationStyle";
import EducationCard from '../Cards/EducationCard';
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc style={{ marginBottom: "40px" }}>
                    My education has been a journey of a self-discovery and growth. My Educational details are as follows.
                </Desc>

                <VerticalTimeline>
                    {educations.map((education, index) => (
                        <EducationCard key={`education-${index}`} education={education} />
                    ))}
                </VerticalTimeline>
            </Wrapper>
        </Container>
    );
};

export default Education;