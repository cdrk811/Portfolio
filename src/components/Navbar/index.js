import React, { useState } from 'react';
import { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { Bio } from '../../data/constants';
import { Nav, NavContainer, NavLogo, Span, MobileIcon, 
         NavItems, NavLink, ButtonContainer, GithubButton, 
         MobileMenu, MobileLink } from "./NavbarStyle";
import { MenuRounded } from '@mui/icons-material';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const theme = useTheme();
    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">
                    <a style={{ display: "flex", alignItems: "center", color: "white",  marginBottom: "20", cursor: "pointer" }}>
                        <DiCssdeck size="3rem" /> <Span>CDRKV.</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    <MenuRounded onClick={() => {
                        setOpen(!open);
                    }} />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GithubButton href={Bio.github} target="_blank">Github Profile</GithubButton>
                </ButtonContainer>
                {
                    open &&
                    <MobileMenu open={open}>
                        <MobileLink  href="#about" onClick={() => {
                            setOpen(!open);
                        }}>About</MobileLink >
                        <MobileLink  href="#skills" onClick={() => {
                            setOpen(!open);
                        }}>Skills</MobileLink >
                        <MobileLink  href="#experience" onClick={() => {
                            setOpen(!open);
                        }}>Experience</MobileLink >
                        <MobileLink  href="#projects" onClick={() => {
                            setOpen(!open);
                        }}>Projects</MobileLink >
                        <MobileLink  href="#education" onClick={() => {
                            setOpen(!open);
                        }}>Education</MobileLink >
                        <GithubButton style={{ padding: "10px 16px", background: `${theme.primary}`, color: "white", width: "max-content"}} href={Bio.github} target="_blank">Github Profile</GithubButton>
                    </MobileMenu>
                }
            </NavContainer>
        </Nav>
    );
};

export default Navbar;