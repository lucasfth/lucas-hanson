import React from 'react';
import { NavbarHeightContext } from '../App';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const navbarHeight = React.useContext(NavbarHeightContext);

    return (
      <Row style={{ textAlign: 'center', clear: 'both', paddingTop: `${navbarHeight}px` }}>
        <h2>
          Contact me
        </h2>
        <p style={{ paddingTop: `${0.25 * navbarHeight}px`, textAlign: 'center' }}>
          <a href='mailto:lucasfth@bjelke-torres.com' aria-label='Email Lucas Hanson' style={{ marginRight: '1rem', marginLeft: '1rem' }}>
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
          {' | '}
          <a href='https://www.linkedin.com/in/lucas-frey-torres-hanson-b6b79320b/' target='_blank' rel='noopener noreferrer' aria-label='Lucas Hanson LinkedIn' style={{ marginRight: '1rem', marginLeft: '1rem' }}>
            <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          {' | '}
          <a href='https://github.com/lucasfth' target='_blank' rel='noopener noreferrer' aria-label='Lucas Hanson GitHub' style={{ marginRight: '1rem', marginLeft: '1rem' }}>
            <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
          <p style={{ paddingTop: `${0.25 * navbarHeight}px`, textAlign: 'center', fontSize: '0.9em' }}>
            {/* Also link to the license that my repository is under */}
            Created by Lucas Hanson - 2024
            <br /><br />
            This webpage is built using<br /><br />
            <Image src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' rounded />{' '}
            <Image src='https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white' rounded />{' '}
            <Image src='https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white' rounded />
          </p>
      </Row>
    );
  }

export default Footer;
