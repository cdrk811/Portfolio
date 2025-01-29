import React from 'react';
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from './SkillStyle'

const Skills = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>
                    Here are some of my skills on which I have been working on for the past 4 years.
                </Desc>

                <SkillsContainer>
                    {skills.map((item) => (
                        <Skill>
                            <SkillTitle>{item.title}</SkillTitle>
                            <SkillList>
                                {item.skills.map((skill) => (
                                    <SkillItem>
                                        <SkillImage src={skill.image} />
                                        {skill.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    );
};

export default Skills;