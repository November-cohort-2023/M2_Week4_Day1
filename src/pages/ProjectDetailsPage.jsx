import React, { useState , useEffect} from 'react'

import { useParams, Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

/* Steps for GET with 1 resource

    1. get the id from the URL with useParams

*/
function ProjectDetailsPage() {

    const [project,setProject] = useState(null)

    const {projectId} = useParams()
    console.log(projectId)

    const navigate = useNavigate()

    function deleteProject(){
        axios.delete(`https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`)
        .then(()=>{
            navigate('/projects')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        axios.get(`https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`)
        .then((projectFromAPI)=>{
            console.log(projectFromAPI.data)
            setProject(projectFromAPI.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[projectId])

  return (
    <div className='ProjectDetailsPage'>
        {!project && <p>Loading...</p>}
        {project && (
            <div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
            </div>
        )}
        <Link to={`/projects/${projectId}/edit`}><button>Edit Project</button> </Link> 
        <button onClick={deleteProject}>Delete Project</button>
    </div>
  )
}

export default ProjectDetailsPage