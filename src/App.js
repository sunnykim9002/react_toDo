import React, { useState } from "react";
import List  from "./components/List";
import Form  from "./components/Form";
import "../src/App.css";

export default function App()  {

const [todoDate, setTodoDate] = useState([]);
const [value, setValue] = useState("");



  

const handleSubmit = (e) => {
  e.preventDefault();

  let newTodo = {
    id: Date.now(),
    title : value,
    completed: false
  }
  setTodoDate((prev)=> [...prev, newTodo]);
  setValue("");
}

    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1 className="font-bold text-3xl">할일 목록</h1>  
          </div>
        </div>
      <List todoDate={todoDate} setTodoDate={setTodoDate} />
      <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
      </div>
    )
}