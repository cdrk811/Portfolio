import React from 'react';
import { educations } from "../../data/constants";
import { Container, Wrapper, Title, Desc, TimeLineSection } from "./EducationStyle";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import EducationCard from '../Cards/EducationCard';

const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of a self-discovery and growth. My Educational details are as follows.
                </Desc>

                <TimeLineSection>
                    <Timeline>
                        {educations.map((education, index) => (
                            <TimelineItem>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education} />
                                </TimelineContent>

                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== educations.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimeLineSection>
            </Wrapper>
        </Container>
    );
};

export default Education;