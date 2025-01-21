import React from 'react'

export default function task10() {
    const students = ["student1","student2","student3","student4"]
  return (
    <div>
        <ul>
        {students.map((student, index) => (
          <li style={{backgroundColor:"orange",textAlign:"center",color:"white",width:"100px",margin:"10px",}} key={index}>{student}</li>
        ))}
      </ul>

    </div>
  )
}
