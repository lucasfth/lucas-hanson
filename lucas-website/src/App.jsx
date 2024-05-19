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
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Page from './projects/pages/Page';
import Footer from './intro/Footer';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

export const ThemeContext = createContext();
export const NavbarHeightContext = React.createContext();

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.getBoundingClientRect().height + 40);
    }
  }, [])

  const NavbarWithLocation = () => {
    const location = useLocation();
    const isBaseURL = location.pathname === '/lucas-hanson';

    return (
      <Navbar data-bs-theme={theme} expand='lg' className='d-flex' fixed='top' style={{backgroundColor: theme === 'light' ? 'rgba(250,250,250,0.5)' : 'rgba(0.3,0.3,0.3,0.5)', backdropFilter: 'blur(5px)'}}>
        <Container fluid>
          <Navbar.Brand as={RouterLink} to='/lucas-hanson' className='custom-navbar-brand'><Image src={logo} fluid style={{height: '30px' }} rounded alt='Website logo'/></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='d-lg-none order-first' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              {isBaseURL ? (
                <>
                  <ScrollLink activeClass='active' to='intro' spy={true} duration={200} className='nav-link custom-nav-link' aria-label='Projects'>About me</ScrollLink>
                  <ScrollLink activeClass='active' to='projects' spy={true} duration={200} className='nav-link custom-nav-link' aria-label='Projects'>Projects</ScrollLink>
                  <ScrollLink activeClass='active' to='contact' spy={true} duration={200} className='nav-link custom-nav-link' aria-label='Projects'>Contact</ScrollLink>
                </>
              ) : (
                <>
                  <RouterLink to='/lucas-hanson#intro' className='nav-link custom-nav-link' aria-label='Projects'>About me</RouterLink>
                  <RouterLink to='/lucas-hanson#projects' className='nav-link custom-nav-link' aria-label='Projects'>Projects</RouterLink>
                  <RouterLink to='/lucas-hanson#contact' className='nav-link custom-nav-link' aria-label='Projects'>Contact</RouterLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <ThemeSwitch />
      </Navbar>
    );
  };

  return (
    <Router>
      <NavbarHeightContext.Provider value={navbarHeight}>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          <div className='App'>
            <NavbarWithLocation />
            <Routes>
              <Route path='/lucas-hanson' element={
                <>
                  <div id='intro'><Intro /></div>
                  <div id='projects'><Projects /></div></>
                } />
              <Route path='/projects/pages/:title' element={<Page />} />
            </Routes>
            <div id='contact'>
              <Footer />
            </div>
          </div>
        </ThemeContext.Provider>
      </NavbarHeightContext.Provider>
    </Router>
  );
}

export default App;
