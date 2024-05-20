import { useState } from "react";
import DatePicker from "react-date-picker";
import axios from "axios";


function CreateToDo() {

  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [comment, setComment] = useState("");

  const url = "http://localhost:3000/todo/createtodo"

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post(url, {title: title, comment: comment});
        console.log(response.data);
      }catch (error) {
        console.log(error.response);
      }
      console.log(title, dueDate, comment);
    };
   
   

    return(
      <form onSubmit={handleSubmit}> 
              <div className="form-floating mb-3">
                <input type="title" className="form-control" id="floatingInput" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                <label for="floatingInput">Title</label>
              </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Due Date </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><DatePicker /></a></li>
                  </ul>
                </div>
              <div className="form-floating mb-3">
                <input type="comment" className="form-control" id="floatingInput" placeholder="comment" value={comment} onChange={(event) => setComment(event.target.value)}/>
                <label for="floatingInput">Comment</label>
              </div>
              <button 
                type="submit" 
                className="btn btn-outline-secondary">
                Submit
              </button>
      </form> 
      )
    }
export default CreateToDo;

