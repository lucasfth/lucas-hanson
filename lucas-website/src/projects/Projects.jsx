import React from "react"
import { useContext, useEffect } from "react"
import Container from "react-bootstrap/Container"
import { NavbarHeightContext } from "../App"
import Project from "./Project"
import dhi from "./DHI"
import bachelor from "./Bachelor"
import { useParams, useNavigate } from "react-router-dom"

const projects = {
    bachelor: bachelor, 
    dhi: dhi
}

function Projects() {
    const navbarHeight = useContext(NavbarHeightContext)
    const navigate = useNavigate()
    const { projectId } = useParams()
    const [selectedProject, setSelectedProject] = React.useState(null)

    useEffect(() => {
        if (projectId && projects[projectId]) {
            console.log('setting selected project', projectId);
            setSelectedProject({ ...projects[projectId], projectKey: projectId });
        } else {
            console.log("No project found");
            setSelectedProject(null);
        }
    }, [projectId])

    const handleClose = () => {
        navigate('/')
        setSelectedProject(null)
    };

    const handleShow = (projectKey) => {
        navigate(`/projects/${projectKey}`)
        setSelectedProject({ ...projects[projectKey], projectKey: projectKey });
    }

    return (
        <Container style={{ textAlign: 'center', paddingTop: `${Number(navbarHeight)}px` }}>
            <h2>Projects</h2>
            {Object.keys(projects).map((key) => (
                <Project key={key} projectKey={key} {...projects[key]} handleShow={() => handleShow(key)} />
            ))}
            {selectedProject && (
                <Project {...selectedProject} showModal={true} handleClose={handleClose} />
            )}
        </Container>
    )
}

export default Projects
