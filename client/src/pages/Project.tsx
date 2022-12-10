import { useQuery } from '@apollo/client'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ClientInfo from '../components/ClientInfo'
import DeleteProjectButton from '../components/DeleteProjectButton'
import EditProjectForm from '../components/EditProjectForm'
import Projects from '../components/Projects'
import Spinner from '../components/Spinner'
import { GET_PROJECT } from '../queries/projectQueries'

const Project = () => {
    const { id } = useParams()
    const { data, loading, error } = useQuery(GET_PROJECT, {
        variables: { id }
    })
    if (loading) return <Spinner />
    if (error) return <h1>Something went wrong!</h1>
    console.log(data);

    return (
        <>
            {!loading && !error && (
                <div className='mx-auto w-75 card p-5'>
                    <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>Back</Link>
                    <h1>{data.project.name}</h1>
                    <p>{data.project.description}</p>
                    <h5>Project Status</h5>
                    <p className='lead'>{data.project.status}</p>
                    <ClientInfo client={data.project.client} />
                    <EditProjectForm project={data.project} />
                    <DeleteProjectButton projectId={data.project.id} />
                </div>
            )}
        </>
    )
}

export default Project