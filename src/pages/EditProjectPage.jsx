import React, { useState, useEffect } from 'react'

import {useParams} from 'react-router-dom'

import axios from 'axios'

function EditProjectPage() {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const {projectId} = useParams()
    console.log(projectId)

    function handleSubmit(e){
        e.preventDefault()
    }

    useEffect(()=>{
        axios.get(`https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`)
        .then((projectFromAPI)=>{
            console.log(projectFromAPI.data)
            setTitle(projectFromAPI.data.title)
            setDescription(projectFromAPI.data.description)
        })
    },[])

  return (
    <div className='EditProjectPage'>
        <form onSubmit={handleSubmit}>
            <label>
                Title
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
            </label>
            <label>
                Description
                <input type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default EditProjectPage