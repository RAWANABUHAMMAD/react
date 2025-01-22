import React,{useState} from "react"

function Task11() {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => setIsDark(!isDark);

    
  return (
    <div style={{backgroundColor: isDark ? "black" : "white", color: isDark ? "white" : "black"}}>

     <button onClick={toggleTheme} >
        {isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </div>
  )
}

export default Task11