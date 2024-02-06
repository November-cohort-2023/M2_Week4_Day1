import {useState,useEffect} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

  /* 
    1. create a state to hold the value for all my projects

    2.make an axios call to the API inside of a useEffect

    3. store the response from the api in the state

    4. map through all of my array and display the values
    
     */

function ProjectListPage() {
    const [projects,setProjects] = useState([])

    useEffect(()=>{
        axios.get('https://project-management-api-4641927fee65.herokuapp.com/projects')
        .then((projectsFromAPI)=>{
            setProjects(projectsFromAPI.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div className='ProjectListPage'>
        
        {projects.map((oneProject)=>{
            return(
                <div key={oneProject.id} className='ProjectCard card'>
                    <Link to={`/projects/${oneProject.id}`}>
                    <h3>{oneProject.title}</h3>
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default ProjectListPage