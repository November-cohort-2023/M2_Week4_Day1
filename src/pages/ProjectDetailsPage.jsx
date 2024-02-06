import React, { useState , useEffect} from 'react'

import { useParams } from 'react-router-dom'

import axios from 'axios'

/* Steps for GET with 1 resource

    1. get the id from the URL with useParams

*/
function ProjectDetailsPage() {

    const [project,setProject] = useState(null)

    const {projectId} = useParams()
    console.log(projectId)


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
    </div>
  )
}

export default ProjectDetailsPage