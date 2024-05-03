import React from "react";


function CreateToDo(props) {
  const handleSubmit = (event) => {
     event.preventDefault();
     const params = new FormData(event.target);
     props.handleCreateToDo(params, () => event.target.reset());
      handleCreateToDo({
          // the form
        }, () => {
        console.log("To Do created successfully ")
        })
      }
    return(
      <form onSubmit={handleCreateToDo}> 
      </form> 
      )
}






export default CreateToDo;