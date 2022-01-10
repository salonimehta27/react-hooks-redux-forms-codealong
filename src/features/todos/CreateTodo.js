import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {todoAdded} from "./todosSlice"

function CreateTodo() {
const[task,setTask]=useState("")
const dispatch=useDispatch()

  function handleSubmit(e){
    e.preventDefault();
    dispatch(todoAdded(task))
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <p>
      <label>add to do:</label>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}placeholder="enter your task"></input>
      </p>
      <input type="submit"/>
    </form>
    <p>Form text:{task}</p>
  </div>;
}

export default CreateTodo;
