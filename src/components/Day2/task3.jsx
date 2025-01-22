import React from 'react'

function Task3(props) {
  return (
    <div> 
        
        <h1> product Details</h1>
        <div style={{backgroundColor:"orange",width:"200px"}}> 
         {props.name}<br/>  
         {props.price}<br/>
        {props.description}
        </div>
    </div>
  )
}

export default Task3