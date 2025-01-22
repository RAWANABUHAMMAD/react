import Task1 from "./components/Day2/task1";
import Task2 from "./components/Day2/task2";
import Task3 from "./components/Day2/task3";
import Task4 from "./components/Day2/task4";
import Task5 from "./components/Day2/task5";
import img from "./components/img/img.jpg";
import Task6 from "./components/Day2/task6";
import Task7 from "./components/Day2/task7";
import Task8 from "./components/Day2/task8";
import Task9 from "./components/Day2/task9";
import Task10 from "./components/Day2/task10";
import Task11 from "./components/Day2/task11";

  
  

 

function App() {
  return (
    <div className="App">
      <Task1 name="rawan"/><hr/>
      <Task2 label="click me"/><hr/>
      <Task3 name="Laptop " price="$999" description="powerful laptop for work "/><hr/>
      <Task4 name="Rawan" age="35" email=" rawan.abuhammad89@gmil.com"/> <hr/>
      <Task6 hLink="#" aLink="#" ctLink="#"/><hr/>
      <Task5  avatar={<img src= {img} alt="Amro" style={{ width: '100px', height: '100px',borderRadius:"30px"}}/>}
        name="amro" email="amro@orange.com" /> <hr />
      <Task7 label="click me" handleClick={() => alert("Button clicked")} />
      <Task8/><hr/>
      <Task9/><hr/>
      <Task10/><hr/>
      <Task11/><hr/>
      
      
    </div>
  );
}

export default App;
