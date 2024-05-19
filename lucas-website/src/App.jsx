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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './projects/pages/Page';
import Footer from './intro/Footer';

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

  return (
      <NavbarHeightContext.Provider value={navbarHeight}>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          <div className='App'>
            <Navbar data-bs-theme={theme} expand='lg' className='d-flex' fixed='top' style={{backgroundColor: theme === 'light' ? 'rgba(250,250,250,0.5)' : 'rgba(0.3,0.3,0.3,0.5)', backdropFilter: 'blur(5px)'}}>
              <Container fluid>
                <Navbar.Brand href='/lucas-hanson' className='custom-navbar-brand'><Image src={logo} fluid style={{height: '30px' }} rounded alt='Website logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' className='d-lg-none order-first' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto'>
                    <Nav.Link href='#home' className='custom-nav-link' aria-label='About me'>About me</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
              <ThemeSwitch />
            </Navbar>
            <Router>
              <Routes>
                <Route path='/lucas-hanson' element={<><Intro /><Projects /></>} />
                <Route path='/projects/pages/:title' element={<Page />} />
              </Routes>
            </Router>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </NavbarHeightContext.Provider>
  );
}

export default App;
