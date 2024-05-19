import React from 'react';
import { NavbarHeightContext } from '../App';
import Row from 'react-bootstrap/Row';

function Footer() {
    const navbarHeight = React.useContext(NavbarHeightContext);

    return (
      <Row style={{ textAlign: 'center', clear: 'both', paddingTop: `${navbarHeight}px` }}>
        <h2>
          Contact me
        </h2>
        <p style={{ paddingTop: `${0.25 * navbarHeight}px`, textAlign: 'center' }}>
          <a href='mailto:lucasfth@bjelke-torres.com' aria-label='Email Lucas Hanson' style={{ marginRight: '1rem', marginLeft: '1rem' }}>
            lucasfth@bjelke-torres.com
            </a>
          {' | '}
          <a href='https://www.linkedin.com/in/lucas-frey-torres-hanson-b6b79320b/' target='_blank' rel='noopener noreferrer' aria-label='Lucas Hanson LinkedIn' style={{ marginRight: '1rem', marginLeft: '1rem' }}>
            LinkedIn
            </a>
          {' | '}
          <a href='https://github.com/lucasfth' target='_blank' rel='noopener noreferrer' aria-label='Lucas Hanson GitHub' style={{ marginRight: '1rem', marginLeft: '1rem' }}>
            GitHub
            </a>
          </p>
          <p style={{ paddingTop: `${0.25 * navbarHeight}px`, textAlign: 'center', fontSize: '0.9em' }}>
            {/* Also link to the license that my repository is under */}
            Created by Lucas Hanson - 2024
          </p>
      </Row>
    );
  }

export default Footer;
