import { useMutation } from '@apollo/client'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { DELETE_PROJECT } from '../mutations/projectMutations'
import { GET_PROJECTS } from '../queries/projectQueries'
interface DeleteProjectButtonType {
    projectId: string
}

const DeleteProjectButton = ({ projectId }: DeleteProjectButtonType) => {
    const navigate = useNavigate()

    const [deleteProject]: any = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: GET_PROJECTS }],
        // update(cache, { data: { deleteProject } }) {
        //     const { projects }: any = cache.readQuery({ query: GET_PROJECTS });
        //     cache.writeQuery({
        //         query: GET_PROJECTS,
        //         data: { projects: [...projects, deleteProject] },
        //     });
        // },
    })

    return (
        <div className='d-flex mt-5 ms-auto'>
            <button className="btn btn-danger m-2" onClick={deleteProject}>
                <FaTrash className='icon' />
                Delete Project
            </button>
        </div>
    )
}

export default DeleteProjectButton