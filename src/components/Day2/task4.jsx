import React from 'react'

function Task4(props) {
  return (
    <div>
        <h1 style={{fontWeight:"bold"}} >User Information</h1>
        <p>username: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Email:{props.email}</p>


    </div>
  ) 
}

export default Task4