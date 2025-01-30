import React from "react";
import { Container, Wrapper, Title, Desc, TimeLineSection } from "./ExperienceStyle";
import { experiences } from "../../data/constants";
import ExperienceCard from "../Cards/ExperienceCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc style={{ marginBottom: "40px" }}>My work experience as a software engineer and working on different companies and projects.</Desc>

                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={`experienc-${index}`} experience={experience} />
                    ))}
                </VerticalTimeline>
            </Wrapper>
        </Container>
    )
}

export default Experience