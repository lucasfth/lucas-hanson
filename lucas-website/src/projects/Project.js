
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './projects.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Project ({ imgpath, imgdesc, title, subtitle, summary }) {
    return (
        <Card>
            <div style={{height: '40%', overflow: 'hidden'}}>
                <Card.Img variant='top' src={imgpath} alt={imgdesc} style={{height: '100%', objectFit: 'cover' }} />
                </div>
            <Card.Body style={{height: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div style={{overflow: 'hidden'}}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{subtitle}</Card.Subtitle>
                    <Card.Text >{summary}</Card.Text>
                </div>
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
};

export default Project;
