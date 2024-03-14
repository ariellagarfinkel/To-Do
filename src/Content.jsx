import axios from "axios";
import { useEffect, useState } from "react";
import "./Content.css";

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
              <label className="form-check-label" htmlFor="firstCheckbox"><strong>{todo.title}</strong></label>
              <br />
              <strong>Comment:</strong> <label className="form-check-label" htmlFor="firstCheckbox">{todo.comment}</label>
              <br />
              <strong>Due Date:</strong> <label className="form-check-label" htmlFor="firstCheckbox">{todo.dueDate}</label>
              <br />
              <strong>Completed?</strong> <label className="form-check-label" htmlFor="firstCheckbox">{todo.completed ? "completed" : "not completed"}</label>
            </li>
          </ul>
      </div>
      ))}
    </> 
 ) 
}

export default Content;
