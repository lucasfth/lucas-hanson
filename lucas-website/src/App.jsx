import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { useState, createContext, useEffect } from 'react';
import React from 'react';
import Intro from './intro/Intro';
import Image from 'react-bootstrap/Image';
import logo from './assets/logo.png';
import Projects from './projects/Projects';
import ThemeSwitch from './components/ThemeSwitch';
import Footer from './components/Footer';
// import { Route, Routes } from 'react-router-dom';

export const ThemeContext = createContext();
export const NavbarHeightContext = React.createContext()
export const ScrollContext = React.createContext()

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const [navbarHeight, setNavbarHeight] = useState(0)
  
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.getBoundingClientRect().height + 40);
    }
  }, [])

  const scrollToSection = (section) => {
    if (!section) {
      return
    }
    const elem = document.getElementById(section)
    if (!elem) {
      alert(`Section ${section} not found. Redirecting to home page.`)
      window.location = ''
    }
    setTimeout(() => {
      elem.scrollIntoView({ behavior: 'smooth' })
    }, 5)
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the '#' character
      if (hash.startsWith('project_')) {
        const projectKey = hash.replace('project_', '');
        scrollToSection('projects');
        setTimeout(() => {
          document.dispatchEvent(new CustomEvent('openProjectModal', { detail: projectKey }));
        }, 500); // Wait for scroll to finish
      } else {
        scrollToSection(hash);
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle the initial load
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    }
  }, [])

  const handleNavClick = (section) => {
    scrollToSection(section)
    setTimeout(() => {
      window.location.hash = section
    }, 750)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NavbarHeightContext.Provider value={navbarHeight}>
        <ScrollContext.Provider value={handleNavClick}>
          <Navbar data-bs-theme={theme} expand='lg' className='d-flex' fixed='top' style={{backgroundColor: theme === 'light' ? 'rgba(250,250,250,0.5)' : 'rgba(0.3,0.3,0.3,0.5)', backdropFilter: 'blur(5px)'}}>
            <Container fluid>
            <Navbar.Brand className='custom-navbar-brand'><Image src={logo} fluid style={{height: '1.5em' }} rounded alt='Website logo'/></Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' className='d-lg-none order-first' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                  <button onClick={() => handleNavClick('intro')} className='nav-link custom-nav-link' aria-label='Scroll to about me section'>About me</button>
                  <button onClick={() => handleNavClick('projects')} className='nav-link custom-nav-link' aria-label='Scroll to projects section'>Projects</button>
                  <button onClick={() => handleNavClick('contact')} className='nav-link custom-nav-link' aria-label='Scroll to contact section'>Contact</button>
                </Nav>
              </Navbar.Collapse>
            </Container>
            <ThemeSwitch/>
          </Navbar>
          <div id='intro'><Intro /></div>
          <div id='projects'><Projects /></div>
          <div id='contact'><Footer /></div>
          <div style={{ paddingBottom: `${0.5*Number(navbarHeight)}px` }} />
        </ScrollContext.Provider>
      </NavbarHeightContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App
