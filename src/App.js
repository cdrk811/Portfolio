import { BrowserRouter as  Router } from 'react-router-dom';
import './App.css';
import Education from './components/Education';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import { darkTheme, lightTheme } from "./utils/Themes";
import styled, { ThemeProvider } from "styled-components";
import Experience from './components/Experience';
import Project from './components/Projects';
import { useState } from 'react';
import ProjectDetails from './components/ProjectDetails';

const Body = styled.div`
  background-color: ${({theme}) => theme.bg };
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null })
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Project openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
          </Wrapper>
          {/* <Footer /> */}
          {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
