import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { useContext, useEffect} from 'react';
import { ThemeContext, NavbarHeightContext } from '../App';
import lucas_full_body from './assets/lucas_full_body.jpg';
import Alert from 'react-bootstrap/Alert';
import './intro.css';

function Intro() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const navbarHeight = useContext(NavbarHeightContext);

  return (
    <Container style={{ textAlign: 'left', paddingTop: `${navbarHeight}px` }}>
      <Alert variant='info'>
        This website is a work in progress. It is built using React, React
        Bootstrap, and Bootstrap. Until then please visit my{' '}
        <Alert.Link href='https://www.linkedin.com/in/lucas-frey-torres-hanson-b6b79320b/'>
          LinkedIn
        </Alert.Link>{' '}
        profile.
      </Alert>
      <div className='image-container'
      style={{
        maxWidth: window.innerWidth <= 750 ? '100%' : '30%',
        float: window.innerWidth <= 750 ? 'none' : 'left',
        marginRight: window.innerWidth <= 750 ? 'auto' : '2em',
        marginTop: '1rem',
        marginBottom: '1rem',
      }}>
        <Image
          src={lucas_full_body}
          rounded
          fluid
          alt='Picture of Lucas Hanson'
        />
      </div>
      <h1>Hello, I&apos;m Lucas</h1>
      <p>
        As a sixth-semester student of Software Development at the
        IT-University of Copenhagen, I have hands-on experience in web
        development, databases, and algorithms. I have gained a strong
        foundation in the following programming languages:
          <li>Java</li>
          <li>C#</li>
          <li>Golang</li>
        My coursework has honed my problem-solving skills and solidified my
        passion for technology. My helpful and enterprising nature, with
        solid communication skills, make me a valuable addition to any team.
        <br />
        When not coding, I can be found at the local gym or in the
        student-run Café called Analog. After volunteering as a barista and
        former vice-chair, I may have become somewhat addicted to coffee,
        and it is therefore essential to my coding routine ☕️
        <br />
        I am currently learning:
          <li>Reflections on IT 🤔</li>
          <li>Introduction to Artificial Intelligence 🤖</li>
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
    </Container>
  );
}

export default Intro;
