import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects () {
    return (
        <Container className='container-padding'>
            <Row>
                <Col style={{padding: '1em'}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Bachelor</Card.Title>
                            <Card.Subtitle>Hand-Gesture-Based Interaction in Hybrid Meetings</Card.Subtitle>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card&apos;s content.
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;
