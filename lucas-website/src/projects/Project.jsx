import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './projects.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Project ({ imgpath, imgdesc, title, subtitle, summary, Info }) {
    return (
        <Card className="project-card">
            <Card.Img variant='top' src={imgpath} alt={imgdesc} className="project-card-img" />
            <Card.Body className="project-card-body">
                <h2>{title}</h2>
                <h3>{subtitle} </h3>
                <p>{summary}</p>
                <p>{Info}</p>
                <Button variant="primary" as={Link} to={{ pathname: `/projects/pages/${title}` }} className='card-link'>View Project</Button>
            </Card.Body>
        </Card>
    )
}

Project.propTypes = {
    imgpath: PropTypes.string.isRequired,
    imgdesc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    Info: PropTypes.element.isRequired,
};

export default Project;
