import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext, NavbarHeightContext, ScrollContext } from '../App';
import lucas_full_body from './assets/lucas_full_body.webp';
import wet_lucas from './assets/wet_lucas.webp';
import './intro.css';
import { ReactTyped } from 'react-typed';

function Intro() {
  const name = 'lucas'
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const navbarHeight = useContext(NavbarHeightContext)

  const [isFlipped, setIsFlipped] = useState(false)
  const [wiggle, setWiggle] = useState(false)
  const [hasBeenFlipped, setHasBeenFlipped] = useState(false)

  const handleClick = () => {
    setWiggle(false)
    setTimeout(() => {
      setIsFlipped(!isFlipped)
    }, 0)
    setHasBeenFlipped(true)
  };
  
  useEffect(() => {
    if (hasBeenFlipped) {
      return;
    }
    const interval = setInterval(() => {
      setWiggle(true)
      setTimeout(() => {
        setWiggle(false)
      }, 1000)
    }, 5000)
  
    return () => clearInterval(interval)
  }, [hasBeenFlipped]);

  const scrollToSection = useContext(ScrollContext)

  return (
    <>
        <Container className='myContainer' style={{ textAlign: 'left', paddingTop: `${navbarHeight}px` }}>
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
          <h1>
            <span style={{ display: 'inline-block' }} className='typed-container'>
              <ReactTyped
                strings={['Lucad Gasdon', 'Lucas Hanson']}
                typeSpeed={100}
                backSpeed={50}
                cursorChar=' '
                showCursor={true} />
            </span>
          </h1>
          <p>
          Aspiring software developer focused on backend, eager to improve frontend skills.<br /><br />
          Check out my <a onClick={() => scrollToSection('projects')} className='section-link link' aria-label='Projects'>projects</a> below.
          </p>
        </Container>
        <Container style={{ clear: 'both', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: `${0.5 * Number(navbarHeight)}px` }}>
          <div className='terminal'>
            <div className='terminal-header'>
              <div className='buttons'>
                <span className='button red'></span>
                <span className='button yellow'></span>
                <span className='button green'></span>
              </div>
              <div className='title'>LucasHanson</div>
            </div>
            <div className='terminal-body'>
              <code>
                &gt; {name}.location;
                <br />&lt; &quot;Copenhagen S, Denmark&quot;<br />
                <br />&gt; {name}.languages;
                <br />&lt; &#9654; (8) {'['} &quot;Java&quot;, &quot;C#&quot;, &quot;Go&quot;, &quot;JavaScript&quot;, &quot;Kotlin&quot;, &quot;Python&quot;, &quot;C&quot;, &quot;F#&quot; {']'}<br />
                <br />&gt; {name}.skills;
                <br />&lt; &#9654; (6) {'['} &quot;git&quot;, &quot;SQL&quot;, &quot;HTML&quot;, &quot;CSS&quot;, &quot;React&quot;, &quot;SQL&quot; {']'}<br />
                <br />&gt; {name}.spokenLanguages;
                <br />&lt; &#9654; {'{'} English: &quot;Professional&quot;, Danish: &quot;Native&quot;, Spanish: &quot;Elementary&quot; {'}'}<br />
                <br />&gt; {name}.cv;
                <br />&lt; <a href='https://cv.lucashanson.dk' target='_blank' rel='noopener noreferrer'>&quot;cv.lucashanson.dk&quot;</a><br />
                <span className='cursor' />
              </code>
            </div>
          </div>
        </Container>
    </>
  )
}

export default Intro
