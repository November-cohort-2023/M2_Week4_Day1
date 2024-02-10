import {useEffect,useState} from 'react'

import axios from 'axios'

function StudnetListPage() {

    let [students,setStudents] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5005/students')
        .then((studentsFromAPI)=>{
            setStudents(studentsFromAPI.data)
        })
    },[])

    function sortStudents(){
        axios.get('http://localhost:5005/students?_sort=country')
        .then((response)=>{
            setStudents(response.data)
        })
    }
  return (
    <div>
        {students.map((oneStudent)=>{
            return(
                <div key={oneStudent.id}>
                    <h2>{oneStudent.name}</h2>
                    <p>{oneStudent.country}</p>
                </div>
    
            )
        })}
        <button onClick={sortStudents}>Sort my Students</button>
    </div>
  )
}

export default StudnetListPage