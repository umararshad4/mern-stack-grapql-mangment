import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../queries/projectQueries"
import ProjectCard from "./ProjectCard"
import Spinner from "./Spinner"
export interface ProjectType {
    id: string
    clientId: string
    name: string
    description: string
    status: string
}
export interface ProjectRowType {
    projects: ProjectType
}

const Projects = () => {
    const { data, loading, error } = useQuery(GET_PROJECTS)
    if (loading) return <Spinner />
    if (error) return <div>Something went wrong! </div>

    return (
        <div>
            {data.projects.length > 0 ? (
                <div className="row">
                    {data.projects.map((project: ProjectType) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (<p>No Projects </p>)}
        </div>
    )
}

export default Projects