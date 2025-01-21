import React from 'react'

export default function task9() {
    const students = ["student1","student2","student3","student4"]
  return (
    <div>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  )
}
