
import React,{useState} from "react";

function Task9() {
     
     const [isVisible, setIsVisible] = useState(false);
     const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div>
     <button onClick={toggleVisibility} > {isVisible ? "Hide Text" : "Show Text"}</button>
        {isVisible && <p>This is hidden text</p>}
       
    </div>
  )
}

export default Task9