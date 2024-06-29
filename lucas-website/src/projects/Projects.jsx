import React from "react"
import { useContext } from "react"
import Container from "react-bootstrap/Container"
import { NavbarHeightContext } from "../App"
import Project from "./Project"
import dhi from "./DHI"
import bachelor from "./Bachelor"

const projects = [bachelor, dhi]

function Projects() {
    const navbarHeight = useContext(NavbarHeightContext)

    return (
        <Container style={{ textAlign: 'center', paddingTop: `${Number(navbarHeight)}px` }}>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </Container>
    );
}

export default Projects;