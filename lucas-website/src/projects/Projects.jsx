import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './projects.css';
import Bachelor from './pages/Bachelor';
import DHI from './pages/DHI';

function Projects () {
    return (
        <Container className='container-padding'>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Bachelor />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <DHI />
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;
