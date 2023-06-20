import React, { useState } from "react";
import List  from "./components/List";
import "../src/App.css";

export default function App()  {

const [todoDate, setTodoDate] = useState([]);
const [value, setValue] = useState("");



  const handleChange = (e) => {
    setValue(e.target.value);
  }

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
            <h1>할일 목록</h1>  
          </div>
        </div>

      <List todoDate={todoDate} setTodoDate={setTodoDate} />

      <form style={{display:'flex'}} onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="value" 
          style={{ flex:"10", padding: "5px"}} 
          placeholder="해야할일을 입력하세요." 
          value={value}
          onChange={handleChange}
        />
        <input type="submit" name="입력" className="btn" style={{ flex:"1"}}/>

      </form>
      </div>
    )
}