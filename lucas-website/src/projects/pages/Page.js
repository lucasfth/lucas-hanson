import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { bachelorData } from './Bachelor';
import { useContext, useEffect } from 'react';
import { ThemeContext, NavbarHeightContext } from '../../App';

const projectDataMap = {
    'Bachelor': bachelorData,
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
                <img src={imgpath} alt={imgdesc} />
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <div dangerouslySetInnerHTML={{__html: content}} />
            </Row>
        </Container>
    )
}

export default Page;
