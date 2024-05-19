import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { useContext, useEffect, useState, useRef } from 'react';
import { ThemeContext, NavbarHeightContext } from '../App';
import lucas_full_body from './assets/lucas_full_body.webp';
import wet_lucas from './assets/wet_lucas.webp';
import './intro.css';
import Row from 'react-bootstrap/Row';
import { Link as ScrollLink } from 'react-scroll';

function Intro() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const navbarHeight = useContext(NavbarHeightContext);

  const [isFlipped, setIsFlipped] = useState(false);
  const [wiggle, setWiggle] = useState(false);
  const isWiggling = useRef(false);
  
  const handleClick = () => {
    isWiggling.current = false;
    setWiggle(false);
    setTimeout(() => {
      setIsFlipped(!isFlipped);
    }, 0);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      isWiggling.current = true;
      setWiggle(true);
      setTimeout(() => {
        isWiggling.current = false;
        setWiggle(false);
      }, 1000);
    }, 5000);
  
    return () => clearInterval(interval);
  }, [isFlipped]);

  return (
    <>
      <Row>
        <Container style={{ textAlign: 'left', paddingTop: `${navbarHeight}px` }}>
          <div className={`image-container ${wiggle ? 'wiggle' : ''}`}
          style={{
            maxWidth: window.innerWidth <= 750 ? '100%' : '20%',
            width: window.innerWidth <= 750 ? '100%' : '20%',
            float: window.innerWidth <= 750 ? 'none' : 'right',
            marginLeft: window.innerWidth <= 750 ? 'auto' : '2em',
            marginTop: '1rem',
            marginBottom: '1rem',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.8s',
          }}
          onClick={handleClick}>
            <Image src={lucas_full_body} rounded fluid alt='Formal picture of Lucas Hanson' style={{ backfaceVisibility: 'hidden', position: 'absolute', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)' }}/>
            <Image src={wet_lucas} rounded fluid alt='Picture of Lucas Hanson who has just dipped into the ocean' style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', position: 'absolute', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)' }}/>
            <div style={{ paddingTop: '100%', visibility: 'hidden' }}></div>
          </div>
          <h1>&gt; Lucas Hanson</h1>
          <p>
          Aspiring software developer focused on backend, eager to improve frontend skills.<br /><br />
          Check out my <ScrollLink activeClass='active' to='projects' spy={true} duration={200} className='section-link' aria-label='Projects'>projects</ScrollLink> below.
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
