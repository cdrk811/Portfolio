import React from "react";
import { Container, Wrapper, Title, Desc, TimeLineSection } from "./ExperienceStyle";
import { experiences } from "../../data/constants";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import ExperienceCard from "../Cards/ExperienceCard";

const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>My work experience as a software engineer and working on different companies and projects.</Desc>

                <TimeLineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimeLineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience