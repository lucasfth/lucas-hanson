import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'
import './projects.css'
import { Button, Modal, Tooltip } from 'react-bootstrap'
import { NavbarHeightContext } from '../App'
import { useState, useContext, useEffect } from 'react'
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { useNavigate } from 'react-router-dom'

function Project ({ img, imgref, imgdesc, title, subtitle, summary, Info, Content, showModal, handleShow }) {
  const [show, setShow] = useState(showModal)
  const navigate = useNavigate()

  useEffect(() => {
    setShow(showModal);
  }, [showModal]);
  
  const internalHandleClose = () => {
    navigate('/')
    setShow(false)
  }

  const navbarHeight = useContext(NavbarHeightContext)

  return (
    <div style={{ paddingTop: `${0.5 * Number(navbarHeight)}px` }}>
      <Card className='project-card'>
        <Image src={img} alt={imgdesc} className='project-card-img' />
        <Card.Body className='project-card-body'>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{summary}</p>
          <p>{Info}</p>
          <Button variant='primary' onClick={handleShow} className='card-link'>View Project</Button>
        </Card.Body>
        <Modal show={show} onHide={ internalHandleClose } dialogClassName='modal-997px' contentClassName='modal-bg-color'>
          <Modal.Header closeButton>
              <Modal.Title>{subtitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <a href={imgref} target='_blank' rel='noopener noreferrer' {...(title === 'Bachelor' ? { download: 'bachelor_thesis.pdf' } : {})}>
              <OverlayTrigger key='top' placement='top' overlay={
                <Tooltip id='tooltip-top'>
                    {imgdesc}
                </Tooltip>
              }>
              <Image src={img} alt={imgdesc} className='modal-img' />
            </OverlayTrigger>
            </a>
            {Content}
          </Modal.Body>
        </Modal>
    </Card>
  </div>
  )
}

Project.propTypes = {
  img: PropTypes.string.isRequired,
  imgref: PropTypes.string.isRequired,
  imgdesc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  Info: PropTypes.element.isRequired,
  Content: PropTypes.element.isRequired,
  showModal: PropTypes.bool,
  handleShow: PropTypes.func
}

export default Project
