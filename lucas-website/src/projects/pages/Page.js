import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import { bachelorData } from './Bachelor';
import { dhiData } from './DHI';
import { useContext, useEffect } from 'react';
import { ThemeContext, NavbarHeightContext } from '../../App';
import Image from 'react-bootstrap/Image';

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

    const { imgpath, imgdesc, subtitle, content } = projectData;

    return (
        <Container style={{ textAlign: "left", paddingTop: `${navbarHeight}px` }}>
            <Row>
                <Col xs={12} md={3}>
                    <Image 
                        src={imgpath} 
                        alt={imgdesc}
                        fluid
                        rounded
                    />
                </Col>
                <Col xs={12} md={9}>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <div dangerouslySetInnerHTML={{__html: content}} />
                </Col>
            </Row>
        </Container>
    )
}

export default Page;
