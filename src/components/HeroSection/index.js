import React from 'react';
import { HeroContainer, HeroBg, HeroInnerContainer, HeroLeftContainer, Title, TextLoop, Span, SubTitle, ResumeButton, HeroRightContainer, Image } from "./HeroSectionStyle";
import { Bio } from '../../data/constants';
import { Typewriter } from "react-simple-typewriter";
import profile from "../../images/profile.png";
import HeroBgAnimation from '../HeroBgAnimation';
import { motion } from "framer-motion";
import { headContainerAnimation, headContentAnimation, headTextAnimation } from "../../utils/motion";
// import StarCanvas from "../Canvas/Stars";
import { Tilt } from "react-tilt";

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    {/* <StarCanvas /> */}
                    <HeroBgAnimation />
                </HeroBg>

                <motion.div {...headContainerAnimation}>
                    <HeroInnerContainer>
                        <HeroLeftContainer>
                            <motion.div {...headTextAnimation}>
                                <Title>
                                    Hi, I am <br /> 
                                    {Bio.name}
                                </Title>
                                <TextLoop>
                                    I am a
                                    <Span>
                                        <Typewriter 
                                            words={Bio.roles}
                                            loop={true}
                                        />
                                    </Span>
                                </TextLoop>
                            </motion.div>

                            <motion.div {...headContentAnimation}>
                                <SubTitle>{Bio.description}</SubTitle>
                            </motion.div>
                            
                            <ResumeButton href={Bio.resume}>
                                Download CV
                            </ResumeButton>
                        </HeroLeftContainer>

                        <HeroRightContainer>
                            <motion.div {...headContentAnimation}>
                                <Tilt>
                                    <Image src={profile} alt="Cedrick Valencia" />
                                </Tilt>
                            </motion.div>
                        </HeroRightContainer>
                    </HeroInnerContainer>
                </motion.div>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;