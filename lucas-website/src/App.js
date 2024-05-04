import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Form from 'react-bootstrap/Form';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App">
        <Navbar data-bs-theme={theme} expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Hey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">About me</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          {/* Put the container to the right */}
          <Container className="d-flex justify-content-end">
            <div className={`theme-switch ${theme}`}>
              <input
                onChange={toggleTheme} 
                checked={theme === 'dark'}
                type="checkbox"
                id="custom-switch"
              />
              <label htmlFor="custom-switch"></label>
            </div>
          </Container>
        </Navbar>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
