import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../App';
import lucas_full_body from './assets/lucas_full_body.jpg';
import Alert from 'react-bootstrap/Alert';

function Intro() {
  const { theme } = useContext(ThemeContext);
  const imageRef = useRef();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX =
        ((window.innerWidth / 2 - clientX) / window.innerWidth) * 10;
      const moveY =
        ((window.innerHeight / 2 - clientY) / window.innerHeight) * 10;
      imageRef.current.style.transform = `scale(0.98) translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
      imageRef.current.style.transform = '';
    };

    const img = imageRef.current;
    img.style.transition = 'transform 0.25s ease-out';
    img.style.boxShadow = '7px 7px 10px rgba(0, 0, 0, 0.5)';
    img.addEventListener('mousemove', handleMouseMove);
    img.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      img.removeEventListener('mousemove', handleMouseMove);
      img.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Container className='container-padding' style={{ textAlign: 'left' }}>
      <Alert variant='info'>
        This website is a work in progress. It is built using React, React
        Bootstrap, and Bootstrap. Until then please visit my{' '}
        <Alert.Link href='https://www.linkedin.com/in/lucas-frey-torres-hanson-b6b79320b/'>
          LinkedIn
        </Alert.Link>{' '}
        profile.
      </Alert>
      <Row>
        <Col xs={12} md={3} style={{padding: '1em'}}>
          <Image
            ref={imageRef}
            src={lucas_full_body}
            rounded
            fluid
            alt='Picture of Lucas Hanson'
          />
        </Col>
        <Col xs={12} md={9} style={{padding: '1em'}}>
          <h1>Hello, I&apos;m Lucas</h1>
          <p>
            As a sixth-semester student of Software Development at the
            IT-University of Copenhagen, I have hands-on experience in web
            development, databases, and algorithms. I have gained a strong
            foundation in the following programming languages:
            <ul>
              <li>Java</li>
              <li>C#</li>
              <li>Golang</li>
            </ul>
            My coursework has honed my problem-solving skills and solidified my
            passion for technology. My helpful and enterprising nature, with
            solid communication skills, make me a valuable addition to any team.
            <br />
            When not coding, I can be found at the local gym or in the
            student-run Café called Analog. After volunteering as a barista and
            former vice-chair, I may have become somewhat addicted to coffee,
            and it is therefore essential to my coding routine ☕️
            <br />I am currently learning:
            <ul>
              <li>Reflections on IT 🤔</li>
              <li>Introduction to Artificial Intelligence 🤖</li>
            </ul>
            Additionally, I am working on my bachelor project titled
            &apos;Hand-Gesture-Based Interaction in Hybrid Meetings.&apos;
            <br />
            Feel free to connect, and let&apos;s see how our paths may cross in the
            future 🔜
            <br />
            <a
              href='mailto:lucasfth@bjelke-torres.com'
              aria-label='Email Lucas Hanson'
            >
              Email 📧
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
