import React from 'react'
import { NavbarHeightContext } from '../App'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/Container'

function Footer() {
    const navbarHeight = React.useContext(NavbarHeightContext)

    return (
      <Container style={{ textAlign: 'center', paddingTop: `${2*Number(navbarHeight)}px` }}>
        <h2>
          Contact me
        </h2>
        <h3 style={{ paddingTop: `${0.25 * Number(navbarHeight)}px`, textAlign: 'center' }}>
          <a className='link' href='mailto:contact@lucashanson.dk' aria-label='Email Lucas Hanson' style={{ marginRight: '1rem', marginLeft: '1rem' }}>
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
          {' | '}
          <a className='link' href='https://www.linkedin.com/in/lucas-frey-torres-hanson-b6b79320b/' target='_blank' rel='noopener noreferrer' aria-label='Lucas Hanson LinkedIn' style={{ marginRight: '1rem', marginLeft: '1rem' }}>
            <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          {' | '}
          <a className='link' href='https://github.com/lucasfth' target='_blank' rel='noopener noreferrer' aria-label='Lucas Hanson GitHub' style={{ marginRight: '1rem', marginLeft: '1rem' }}>
            <FontAwesomeIcon icon={faGithub} />
            </a>
          </h3>
          <p style={{ paddingTop: `${0.25 * Number(navbarHeight)}px`, textAlign: 'center', fontSize: '0.9em' }}>
            {/* Also link to the license that my repository is under */}
            Created by Lucas Hanson - {new Date().getFullYear()}
            <br /><br />
            This webpage is built using<br /><br />
            <Image src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='React logo' rounded />{' '}
            <Image src='https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white' alt='Bootstrap logo' rounded />{' '}
            <Image src='https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white' alt='NPM logo' rounded />{' '}
            <br /><br />
            It is hosted on<br /><br />
            {/* Nordicway ( image is here for the shield to use /wp-content/uploads/2019/11/logo_nordicway_byline.png) */}
            <Image src='https://img.shields.io/badge/Nordicway-3E80C1?style=for-the-badge&logo=nordicway&logoColor=white' alt='Nordicway logo' rounded />
          </p>
      </Container>
    );
  }

export default Footer;
