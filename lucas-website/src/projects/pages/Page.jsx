import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import { bachelorData } from './Bachelor';
import { dhiData } from './DHI';
import { useContext, useEffect } from 'react';
import { ThemeContext, NavbarHeightContext } from '../../App';
import Image from 'react-bootstrap/Image';
import './pages.css';

const projectDataMap = {
    'Bachelor': bachelorData,
    'DHI': dhiData
};

function Page() {
    
    const navbarHeight = useContext(NavbarHeightContext);

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme;
      }, [theme]);

    const { title } = useParams();
    const projectData = projectDataMap[title];

    if (!projectData) {
        return <h1>404</h1>
    }

    const { imgpath, imgdesc, imgref, subtitle, Content } = projectData;

    return (
        <Container style={{ textAlign: "left", paddingTop: `${navbarHeight}px` }}>
            <Row>
                <Col xs={12} md={3}>
                    <a href={imgref} target='_blank' rel='noopener noreferrer'>
                        <Image
                            src={imgpath}
                            alt={imgdesc}
                            title={imgdesc}
                            className='image'
                            fluid
                            rounded
                        />
                    </a>
                </Col>
                <Col xs={12} md={9}>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    {Content} {/* Render Content as a child, not as a component */}
                </Col>
            </Row>
        </Container>
    )
}

export default Page;
