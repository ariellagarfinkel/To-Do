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
    //   <div>
    //     <div>
    //       <h1>Display the data</h1>
    //     </div>
    //     <div>
    //       {todo.comment}
    //       {todo.title}
    //       {todo.completed ? "completed" : "not completed"}
    //     </div>
    //     <div>
    //      <h1>List of ToDos</h1>
    //     </div>
    //     <div>
    //       {alltodo.map((todo) =>(
    //         <div key = {todo.title}>
    //           <p>{todo.comment}</p>
    //           <p>{todo.title}</p>
    //           <p>{todo.completed ? "completed" : "not completed" }</p>
    //         </div>
    //         ))}
    //     </div>
    //   </div>
  
    <>
  <h1>List of To Dos</h1>
    {/* {alltodo.map((todo) =>(
    <div key = {todo.title}>
    ))} */}
  <ul class="list-group">
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
    <label class="form-check-label" for="firstCheckbox">{todo.title}</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
    <label class="form-check-label" for="secondCheckbox">{todo.title}</label>
  </li>
  <li class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
    <label class="form-check-label" for="thirdCheckbox">{todo.title}</label>
  </li>
</ul>
 </> 
 ) 
}






export default Content;
