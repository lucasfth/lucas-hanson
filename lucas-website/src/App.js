import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { createContext, useState } from 'react';
import Hello from './Hello';
import Image from 'react-bootstrap/Image';
import logo_light from './assets/logo_light.png';
import logo_dark from './assets/logo_dark.png';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App">
        <Navbar data-bs-theme={theme} expand="lg" className="bg-body-tertiary d-flex align-items-center">
          <Container fluid>
            <Navbar.Brand href="#home" className="mx-auto"><Image src={theme === "light" ? logo_light : logo_dark} fluid style={{height: "30px" }} rounded alt="Website logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-lg-none order-first" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" aria-label="About me">About me</Nav.Link>
                <Nav.Link href="#link" aria-label="Projects">Projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <div className={`theme-switch`} style={{ position: 'absolute', top: '50%', right: '15px', transform: 'translateY(-50%)' }}>
            <input
              onChange={toggleTheme} 
              checked={theme === 'dark'}
              type="checkbox"
              id="custom-switch"
              aria-checked={theme === 'dark'}
            />
            <label htmlFor="custom-switch"></label>
          </div>
        </Navbar>
        <Hello />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
