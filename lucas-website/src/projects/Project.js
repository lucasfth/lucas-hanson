
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './projects.css';
import { Link } from 'react-router-dom';

function Project ({ imgpath, imgdesc, title, subtitle, summary }) {
    return (
        <Card style={{ width: '18rem', height: '27rem' }}>
            <Card.Img variant='top' src={imgpath} alt={imgdesc} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{subtitle}</Card.Subtitle>
                <Card.Text>{summary}</Card.Text>
                <Card.Link as={Link} to={{ pathname: `/projects/pages/${title}` }} className='card-link'>View Project</Card.Link>
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
};

export default Project;
