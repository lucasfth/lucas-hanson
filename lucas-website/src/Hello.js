import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './App';
import lucas_full_body from './assets/lucas_full_body.jpg';
import Alert from 'react-bootstrap/Alert';

function Hello() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <Container className="container-padding" style={{ textAlign: "left" }}>
            <Alert variant="info">
                This website is a work in progress. It is built using React, React Bootstrap, and Bootstrap.
                Until then please visit my <Alert.Link href="https://www.linkedin.com/in/lucas-frey-torres-hanson-b6b79320b/">LinkedIn</Alert.Link> profile.
            </Alert>
            <Row>
                <Col xs={12} md={3} style={{ padding: "1.5em" }}>
                    <Image src={lucas_full_body} rounded fluid alt="Picture of Lucas Hanson" />
                </Col>
                <Col xs={12} md={9}>
                    <h1>Hello, I'm Lucas</h1>
                    <p>
                        As a sixth-semester student of Software Development at the IT-University of Copenhagen, I have hands-on experience in web development, databases, and algorithms. I have gained a strong foundation in the following programming languages:
                        <ul>
                        <li>Java</li>
                        <li>C#</li>
                        <li>Golang</li>
                        </ul>
                        My coursework has honed my problem-solving skills and solidified my passion for technology. My helpful and enterprising nature, with solid communication skills, make me a valuable addition to any team.
                        <br />
                        When not coding, I can be found at the local gym or in the student-run Café called Analog. After volunteering as a barista and former vice-chair, I may have become somewhat addicted to coffee, and it is therefore essential to my coding routine ☕️
                        <br />
                        I am currently learning:
                        <ul>
                            <li>Reflections on IT 🤔</li>
                            <li>Introduction to Artificial Intelligence 🤖</li>
                        </ul>
                        Additionally, I am working on my bachelor project titled "Hand-Gesture-Based Interaction in Hybrid Meetings."
                        <br />
                        Feel free to connect, and let's see how our paths may cross in the future 🔜
                        <br />
                        {/* Email contact information  */}
                        <a href="mailto:lucasfth@bjelke-torres.com" aria-label="Email Lucas Hanson">Email 📧</a>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Hello;
