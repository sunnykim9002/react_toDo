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
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className="w-full p-5 m-4 bg-white rounded shadow lg:w-1/3 lg:max-w-lg">
          <div className="flex justify-between mb-10">
            <h1 className="font-bold text-3xl text-center w-full">할일 목록</h1>  
          </div>
          <List todoDate={todoDate} setTodoDate={setTodoDate} />
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
        </div>
      </div>
    )
}