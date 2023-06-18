import React, {Component} from "react";
import "../src/App.css";

export default class App extends Component {
  state = {
    todoDate : [
    ],
    value : ""
  }

  // style
  // btnStyle = {
  //   color: "#fff",
  //   border: "none",
  //   padding: "5px 9px",
  //   borderRadius: "50%",
  //   cursor: "pointer",
  //   float:"right"
  // }

  getStyle = (completed) => {
    return {
      marinBottom:"10px",
      padding: "10px",
      borderTop: "1px #ccc dotted",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? " line-through" : "none",
    }
  }


  handleClick = (id) => {
    let newTodoData = this.state.todoDate.filter(data => data.id !== id);
    console.log("newTodoData", newTodoData);
    this.setState({ todoDate: newTodoData});
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title : this.state.value,
      completed: false
    }
    this.setState({ todoDate: [...this.state.todoDate, newTodo], value : ""})
  }

  handleCompleChange = (id) => {
    let newTodoData = this.state.todoDate.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed
      }
      return data;
    });
    this.setState({ todoDate:newTodoData})
  }




  render () {
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>  
          </div>
        </div>
      {this.state.todoDate.map((data) => (
        <div style={this.getStyle(data.completed)} key={data.id} className="list">
          <input 
            type="checkbox" 
            defaultChecked={false}
            onChange={()=> this.handleCompleChange(data.id)}
          />
          {data.title}
          <button 
          style={this.btnStyle}
          onClick={() => this.handleClick(data.id)}
          className="submit-btn"
          >
          x
          </button>
        </div>      
      ))}


      <form style={{display:'flex'}} onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="value" 
          style={{ flex:"10", padding: "5px"}} 
          placeholder="해야할일을 입력하세요." 
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" name="입력" className="btn" style={{ flex:"1"}}/>

      </form>
      </div>
    )
  }
}