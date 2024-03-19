import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Content.css";
// import CalendarComponent from "./CalendarComponent";
import DatePicker from "./CalendarComponent";


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
            <li className={"list-group-item " + (todo.completed ? "list-group-item-success" : "list-group-item-info")}>
              <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
              {/* when click that you completed the box the color turns green */}
              <label className="form-check-label" htmlFor="firstCheckbox"><strong>{todo.title}</strong></label>
              <br />
              <strong> Comment:</strong><label className="form-check-label" htmlFor="firstCheckbox">{todo.comment}</label>
              <br />
              <strong>Due Date:</strong> <label className="form-check-label" htmlFor="firstCheckbox">{todo.dueDate}</label>
              <br />
                <div class="btn-group">
                  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Due Date </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Action 2</a></li>
                  </ul>
                </div>
              <br />
              <strong>Completed?</strong> <label className="form-check-label" htmlFor="firstCheckbox">{todo.completed ? "completed" : "not completed"}</label>
            </li>
          </ul>
      </div>
      ))}
      <div>
        <DatePicker />
      </div>
    </> 
 ) 
}
export default Content;


// checked={todo.completed}
