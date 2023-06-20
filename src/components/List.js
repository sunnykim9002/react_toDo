import React from 'react'
export default function List({ todoDate, setTodoDate }) {
    
  const getStyle = (completed) => {
    return {
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
                <div key={data.id} className="list flex justify-between content-center align-middle border-b-2 pb-2 pt-2 border-t-2 mb-4">
                    <div style={getStyle(data.completed)} >
                        <input
                            type="checkbox"
                            defaultChecked={false}
                            onChange={()=> handleCompleChange(data.id)}
                        />
                        {data.title}
                    </div>
                    <button
                    onClick={() => handleClick(data.id)}
                    className="submit-btn bg-blue-400 border-cyan-100 rounded text-white block w-5 "
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