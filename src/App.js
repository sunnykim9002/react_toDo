import React, { useState } from "react";
import "../src/App.css";

export default function App()  {

const [todoDate, setTodoDate] = useState([]);
const [value, setValue] = useState("");

  const getStyle = (completed) => {
    return {
      marinBottom:"10px",
      padding: "10px",
      borderTop: "1px #ccc dotted",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? " line-through" : "none",
    }
  }


  const handleClick = (id) => {
    let newTodoData = todoDate.filter(data => data.id !== id);
    console.log("newTodoData", newTodoData);
    setTodoDate(newTodoData)
  }

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

  const handleCompleChange = (id) => {
    let newTodoData = todoDate.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed
      }
      return data;
    });

    setTodoDate(newTodoData);
  }


    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>  
          </div>
        </div>
      {todoDate.map((data) => (
        <div style={getStyle(data.completed)} key={data.id} className="list">
          <input 
            type="checkbox" 
            defaultChecked={false}
            onChange={()=> handleCompleChange(data.id)}
          />
          {data.title}
          <button 
          onClick={() => handleClick(data.id)}
          className="submit-btn"
          >
          x
          </button>
        </div>      
      ))}


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