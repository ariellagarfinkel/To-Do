import React from "react";
import { useState } from "react";
import DatePicker from "react-date-picker";
import axios from "axios";


function CreateToDo(props) {

  const [todo, setToDo] = useState({});

  const handleSubmit = (event) => {
     event.preventDefault();
     const params = new FormData(event.target);
     handleCreateToDo(params, () => event.target.reset());
     console.log("To Do created successfully ");
    }


    const handleCreateToDo = (params, successCallback) => {
      console.log("handleCreateToDo", params);
      axios.post("http://localhost:8080/todo/createtodo", params).then((response) => {
        setToDo([...todo, response.data]);
        successCallback();
      });
    }

    return(
      <form onSubmit={handleSubmit}> 
        {/* <div>
              <label className="form-check-label" htmlFor="firstCheckbox"> Title </label>
              </div> */}
              <div className="form-floating mb-3">
                <input type="title" className="form-control" id="floatingInput" placeholder="Title"/>
                <label for="floatingInput">Title</label>
              </div>
              {/* <div>
                <strong>Due Date:</strong> <label className="form-check-label" htmlFor="firstCheckbox"></label>
              </div> */}
                <div className="btn-group">
                  <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Due Date </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><DatePicker /></a></li>
                  </ul>
                </div>
              {/* <div>
               <label className="form-check-label" htmlFor="firstCheckbox"> Comment</label>
              </div> */}
              <div className="form-floating mb-3">
                <input type="comment" className="form-control" id="floatingInput" placeholder="comment"/>
                <label for="floatingInput">Comment</label>
              </div>
              {/* <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/> */}
              <button 
                type="button" 
                className="btn btn-outline-secondary" onSubmit={handleCreateToDo}>
                  console.log("handleCreateToDo")
                Submit
              </button>
      </form> 
      )
}
export default CreateToDo;