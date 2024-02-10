import {useEffect,useState} from 'react'

import axios from 'axios'

function StudnetListPage() {

    let [students,setStudents] = useState([])

    let baseURL = import.meta.env.VITE_STUDENTS_API

    useEffect(()=>{
        axios.get(`${baseURL}/students`)
        .then((studentsFromAPI)=>{
            setStudents(studentsFromAPI.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    function sortStudents(){
        axios.get(`${import.meta.env.VITE_STUDENTS_API}/students?_sort=country`)
        .then((response)=>{
            setStudents(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        {/* {students.map((oneStudent)=>{
            return(
                <div key={oneStudent.id}>
                    <h2>{oneStudent.name}</h2>
                    <p>{oneStudent.country}</p>
                </div>
    
            )
        })} */}
        <button onClick={sortStudents}>Sort my Students</button>
    </div>
  )
}

export default StudnetListPage