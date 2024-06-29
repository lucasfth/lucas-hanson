import Card from "react-bootstrap/Card"
import PropTypes from "prop-types"
import "./projects.css"
import { Button, Modal } from "react-bootstrap"
import { NavbarHeightContext } from "../App"
import { useState, useContext, useEffect } from "react"
import Image from "react-bootstrap/Image"

function Project ({ img, imgref, imgdesc, title, subtitle, summary, Info, Content }) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const navbarHeight = useContext(NavbarHeightContext)

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100vh";
        } else {
            document.body.style.overflow = "auto";
        }

        // Clean up function
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [show]);

    return (
        <div style={{ paddingTop: `${0.5 * Number(navbarHeight)}px` }}>
            <Card className="project-card">
                <Image src={img} alt={imgdesc} className="project-card-img" />
                <Card.Body className="project-card-body">
                    <h2>{title}</h2>
                    <h3>{subtitle} </h3>
                    <p>{summary}</p>
                    <p>{Info}</p>
                    <Button variant="primary" onClick={handleShow} className="card-link">View Project</Button>
                </Card.Body>
                <Modal show={show} onHide={handleClose} dialogClassName="modal-997px" contentClassName="modal-bg-color">
                    <Modal.Header closeButton>
                        <Modal.Title>{subtitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <a href={imgref} target='_blank' rel='noopener noreferrer' {...(title === 'Bachelor' ? { download: 'bachelor_thesis.pdf' } : {})}>
                            <Image src={img} alt={imgdesc} title={imgdesc} className="modal-img" />
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
};

export default Project;
