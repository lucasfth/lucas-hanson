import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { useContext, useEffect} from 'react';
import { ThemeContext, NavbarHeightContext } from '../App';
import lucas_full_body from './assets/lucas_full_body.jpg';
import Alert from 'react-bootstrap/Alert';
import './intro.css';
import '../App.css';
import Row from 'react-bootstrap/Row';

function Intro() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const navbarHeight = useContext(NavbarHeightContext);

  return (
    <>
      <Row>
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
            maxWidth: window.innerWidth <= 750 ? '100%' : '20%',
            float: window.innerWidth <= 750 ? 'none' : 'right',
            marginLeft: window.innerWidth <= 750 ? 'auto' : '2em',
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
          <h1>&gt; Lucas Hanson</h1>
          <p>
          Aspiring software developer focused on backend, eager to improve frontend skills.<br /><br />
          Check out my projects below.
          </p>
          </Container>
      </Row>
      <Row>
        <Container style={{ clear: 'both', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: `${0.5 * navbarHeight}px` }}>
          <div className="terminal">
            <div className="terminal-header">
              <div className="buttons">
                <span className="button red"></span>
                <span className="button yellow"></span>
                <span className="button green"></span>
              </div>
              <div className="title">LucasHanson.java</div>
            </div>
            <div className="terminal-body">
              <code>
                public class LucasHanson {'{'}<br />
                <br />{'  '}private String location = &quot;Copenhagen S, Denmark&quot;;<br />
                <br />{'  '}private String email = <a href='mailto:lucasfth@bjelke-torres.com'>&quot;lucasfth@bjelke-torres.com&quot;</a>;<br />
                <br />{'  '}private String linkedin = <a href='https://www.linkedin.com/in/lucas-frey-torres-hanson-b6b79320b/' target='_blank' rel='noopener noreferrer'>
                  &quot;lucas-frey-torres-hanson&quot;</a>;<br />
                <br />{'  '}private String github = <a href='https://github.com/lucasfth' target='_blank' rel='noopener noreferrer'>
                  &quot;lucasfth&quot;</a>;<br />
                <br />{'  '}private String[] skills = {'{'}&quot;Java&quot;, &quot;Python&quot;, &quot;C#&quot;, &quot;C&quot;, &quot;git&quot;, &quot;Golang&quot;{'}'};<br />
                <br />{'}'};<br />
                <span className='cursor' />
              </code>
            </div>
          </div>
        </Container>
      </Row>
    </>
  );
}

export default Intro;
