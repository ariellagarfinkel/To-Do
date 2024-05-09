import React from "react";
import { useState } from "react";
import DatePicker from "react-date-picker";
import axios from "axios";


function CreateToDo(props) {

  const [todo, setToDo] = useState({});
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
     event.preventDefault();
    //  const params = new FormData(event.target);
     const params = {
      title: title,
      dueDate: dueDate,
      comment: comment
     };
     console.log("submit to do", params);
    //  handleCreateToDo(params, () => event.target.reset());
     handleCreateToDo(params, () => {
      setTitle("");
      setDueDate(new Date());
      setComment("");
     });
     console.log("To Do created successfully ");
    }
// create an object to send back to the server. post data to the server. 

    const handleCreateToDo = (params, successCallback) => {
      console.log("handleCreateToDo", params);
      axios.post("http://localhost:8080/todo/createtodo", params).then((response) => {
        setToDo([...todo, response.data]);
        successCallback();
      });
    }

    return(
      <form onSubmit={handleSubmit}> 
              <div className="form-floating mb-3">
                <input type="title" className="form-control" id="floatingInput" placeholder="Title"/>
                <label for="floatingInput">Title</label>
              </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Due Date </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><DatePicker /></a></li>
                  </ul>
                </div>
              <div className="form-floating mb-3">
                <input type="comment" className="form-control" id="floatingInput" placeholder="comment"/>
                <label for="floatingInput">Comment</label>
              </div>
              <button 
                type="submit" 
                className="btn btn-outline-secondary" onSubmit={handleCreateToDo}>
                Submit
              </button>
      </form> 
      )
}
export default CreateToDo;