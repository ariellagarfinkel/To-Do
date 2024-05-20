import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Content.css";


function Content() {

  const [todo, setToDo] = useState({});
  const [alltodo, setAllToDo] = useState([]);
  const [createToDo, setCreateToDo] = useState([]);
  const navigate = useNavigate();

  const handleAllToDo = () => {
    console.log("handle allToDo");
    axios.get("http://localhost:8080/todo/alltodo").then((response) => {
      console.log(response.data);
      setAllToDo(response.data);
    });
  };


useEffect(()=>{ handleAllToDo() }, [])

 return (
    <>
      <div>
        <h1>List of To Dos</h1>
      </div>
        {alltodo.map((todo) =>(
        <div key = {todo.title} >
          <ul className="list-group" >
            <li className={"list-group-item " + (todo.completed ? "list-group-item-success" : "list-group-item-info")}>
              <div>
              <strong> Title: </strong><label className="form-check-label" htmlFor="firstCheckbox">{todo.title}</label>
              </div>
              <div>
                <strong>Due Date:</strong> <label className="form-check-label" htmlFor="firstCheckbox">{todo.dueDate}</label>
              </div>
              <div>
                <strong> Comment:</strong><label className="form-check-label" htmlFor="firstCheckbox">{todo.comment}</label>
              </div>
              <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
              <div>
                <strong>Completed?</strong> <label className="form-check-label" htmlFor="firstCheckbox">{todo.completed ? "completed" : "not completed"}</label>
              </div>
            </li>
          </ul>
        <br />
      </div>
      ))}
    <div>
      {/* <Routes>
        <Route path="createToDo" element = {<CreateToDo />}> </Route>
      </Routes> */}
    </div>
    <button 
      type="button" 
      className="btn btn-outline-secondary" 
      onClick={() => navigate("/createToDo")}>
        Create a To-Do
    </button>
    </> 
 ) 
}
export default Content;