import React,{useEffect, useState} from 'react'
import { getStudents } from '../api/studentAPI'



function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() =>{
        getStudents() // call the function to get students
        // because this is request so use .then or try

        .then((res) => setStudents(res.data.data))

        // if any error then catch it and send it in console
        .catch((err) =>console.error(err));

    },[]);

    console.log("students data is ", students)

  return (
    <div>
      <h2>The list of students</h2>
      <ul>
        {students.map((stu) =>( // get data from usestate

            <li key={stu.id}> {stu.name} {stu.city} </li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList
