import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './projects.css';
import Bachelor from './pages/Bachelor';
import DHI from './pages/DHI';
import { NavbarHeightContext } from '../App';
import { useContext } from 'react';

function Projects () {
    const navbarHeight = useContext(NavbarHeightContext);

    return (
        <>
            <h2  style={{ paddingTop: `${navbarHeight}px` }}>
                Projects
            </h2>
            <Row>
                <Container style={{ paddingTop: `${0.5 * navbarHeight}px` }}>
                    <Bachelor />
                </Container>
                <Container style={{ paddingTop: `${0.5 * navbarHeight}px` }}>
                    <DHI />
                </Container>
            </Row>
        </>
    )
}

export default Projects;
