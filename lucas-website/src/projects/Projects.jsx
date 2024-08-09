import React from 'react'
import { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { NavbarHeightContext } from '../App'
import Project from './Project'
import dhi from './DHI'
import bachelor from './Bachelor'
import repolicense from './Repolicense'
// import { useParams, useNavigate } from 'react-router-dom'

const projects = {
  bachelor: bachelor,
  repolicense: repolicense,
  dhi: dhi,
}

function Projects() {
  const navbarHeight = useContext(NavbarHeightContext)
  const [selectedProject, setSelectedProject] = React.useState(null)

  useEffect(() => {
    const handleOpenProjectModal = (event) => {
      const projectKey = event.detail
      if (projects[projectKey]) {
        setSelectedProject({ ...projects[projectKey], projectKey: projectKey })
      }
    }
  
    document.addEventListener('openProjectModal', handleOpenProjectModal)
    return () => {
      document.removeEventListener('openProjectModal', handleOpenProjectModal)
    }
  }, [])

  const handleClose = () => {
    window.location = ''
    setSelectedProject(null)
  }

  const handleShow = (projectKey) => {
    if (!projects[projectKey]) {
      alert(`Project ${projectKey} not found. Redirecting to home page.`)
      window.location = ''
    }
    window.location.hash = `#project_${projectKey}`
  }

  return (
    <Container style={{ textAlign: 'center', paddingTop: `${Number(navbarHeight)}px` }}>
      <h2>Projects</h2>
      {Object.keys(projects).map((key) => (
      <Project
        key={key}
        projectKey={key}
        {...projects[key]}
        handleShow={() => handleShow(key)}
        showModal={selectedProject && selectedProject.projectKey === key}
        handleClose={handleClose}
        />
    ))}
  </Container>
  )
}

export default Projects
