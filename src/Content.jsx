import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Content.css";
import DatePicker from "./CalendarComponent";


function Content() {

  const [todo, setToDo] = useState({});
  const [alltodo, setAllToDo] = useState([]);
  const [createToDo, setCreateToDo] = useState([]);

  const handleAllToDo = () => {
    console.log("handle allToDo");
    axios.get("http://localhost:8080/todo/alltodo").then((response) => {
      console.log(response.data);
      setAllToDo(response.data);
    });
  };

  const handleCreateToDo = (params, successCallback) => {
    console.log("handleCreateToDo", params);
    axios.post("http://localhost:8080/todo/createtodo", params).then((response) => {
      setToDo([...todo, response.data]);
      successCallback();
    });
  }

// post with axios. send the new todo object (JSON) to the back
// react router for the new page

useEffect(()=>{ handleAllToDo(); }, [])

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
              <div className="form-floating mb-3">
                <input type="title" className="form-control" id="floatingInput" placeholder="Title"/>
                <label for="floatingInput">Title</label>
              </div>
              <div>
                <strong>Due Date:</strong> <label className="form-check-label" htmlFor="firstCheckbox">{todo.dueDate}</label>
              </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Due Date </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><DatePicker /></a></li>
                  </ul>
                </div>
              <div>
                <strong> Comment:</strong><label className="form-check-label" htmlFor="firstCheckbox">{todo.comment}</label>
              </div>
              <div className="form-floating mb-3">
                <input type="comment" className="form-control" id="floatingInput" placeholder="comment"/>
                <label for="floatingInput">Comment</label>
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
{/* 
      const handleSubmit = (event) => {
        event.preventDefault();
        handleCreateToDo({
          // the form
        }, () => {
          console.log("To Do created successfully ")
        })
      } */}
    </> 
 ) 
}
export default Content;