import axios from "axios";
import { useEffect, useState } from "react";

function Content() {

  const [todo, setToDo] = useState({});
  const [alltodo, setAllToDo] = useState([]);

  const handleToDo = () => {
    console.log("handle toDo");
    axios.get("http://localhost:8080/todo/mytodo").then((response) => {
      console.log(response.data);
      setToDo(response.data);
    });
  };

  const handleAllToDo = () => {
    console.log("handle allToDo");
    axios.get("http://localhost:8080/todo/alltodo").then((response) => {
      console.log(response.data);
      setAllToDo(response.data);
    });
  };

useEffect(()=>{
handleToDo();
handleAllToDo();
}, [])

 return (
    <>
      <div>
        <h1>List of To Dos</h1>
      </div>
        {alltodo.map((todo) =>(
        <div key = {todo.title}>
          <ul className="list-group">
            <li className="list-group-item">
              <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
              <label className="form-check-label" for="firstCheckbox">{todo.title}</label>
            </li>
            {/* <li className="list-group-item">
              <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
              <label className="form-check-label" for="secondCheckbox">{todo.title}</label>
            </li>
            <li className="list-group-item">
              <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
              <label className="form-check-label" for="thirdCheckbox">{todo.title}</label>
            </li> */}
          </ul>
      </div>
      ))}
    </> 
 ) 
}

export default Content;

