import React from 'react'
import { ProjectRowType, ProjectType } from './Projects'
interface ProjectCardType {
    project: ProjectType
}
const ProjectCard = ({ project }: ProjectCardType) => {
    // console.log(project);
    return (
        <div className='bg-dark col-xs-12 col-md-4 col-lg-3' style={{ color: 'white', borderRadius: "1rem", padding: '1rem 1rem', margin: '1rem' }}>
            <div key={project.id}>
                <b>Name: {project.name} </b>
                <p>Status: <b>{project.status}</b> </p>
                <a className='btn btn-light' href={`/projects/${project.id}`}>View</a>
            </div>
        </div>
    )
}

export default ProjectCard