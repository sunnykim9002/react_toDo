import React from 'react'

export default function List({ todoDate, setTodoDate }) {
    
  const getStyle = (completed) => {
    return {
      marinBottom:"10px",
      padding: "10px",
      borderTop: "1px #ccc dotted",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? " line-through" : "none",
    }
  };
  
  const handleCompleChange = (id) => {
    let newTodoData = todoDate.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed
      }
      return data;
    });

    setTodoDate(newTodoData);
  }

  const handleClick = (id) => {
    let newTodoData = todoDate.filter(data => data.id !== id);
    console.log("newTodoData", newTodoData);
    setTodoDate(newTodoData)
  }

  return (
    <div>
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
    </div>
  )
}


// rce 단축어 사용 
// rfc