import React, { useState } from 'react'

import axios from 'axios'

import {useNavigate} from 'react-router-dom'

/* 

1. preventDefault for the submitting of the form

2. create a state for each 1 one of my inputs

3. change the state for every time the user types something in

*/
function CreateProjectPage() {


    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const navigate = useNavigate()


    function handleSubmit(e){
        e.preventDefault()

        const newProject = {title:title,description:description}

        axios.post('https://project-management-api-4641927fee65.herokuapp.com/projects', newProject)
        .then((response)=>{
            console.log(response)
            /* 
            extra exercise: instead of going to /projects take the user to the page for the project
            that was just created
            
            */
            navigate(`/projects/${response.data.id}`)
        })
        .catch(()=>{

        })



    }
  return (
    <div className='CreateProjectPage'>
        <h3>Add Project</h3>
        
        <form onSubmit={handleSubmit}>
            <label>
                Title
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}} />
            </label>

            <label>
                Description
                <input type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
            </label>
            <button>Submit</button>
        </form>

    </div>
  )
}

export default CreateProjectPage