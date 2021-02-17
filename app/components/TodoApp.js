import React from 'react';
import ReactDOM from 'react-dom';
import {Title, TodoForm, TodoList} from './todo'
window.id = 0;
class TodoApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
  }
  // Add todo handler
  addTodo = (val) => {
    // Assemble data
    const todo = {text: val, id: window.id++}
    // Update data
    var { data } = this.state;
    data.push(todo);
    // Update state
    var tasks = JSON.parse(localStorage.getItem("tasks")) || {};
    tasks[this.props.cacheList] = tasks[this.props.cacheList] ? tasks[this.props.cacheList] : [];
    tasks[this.props.cacheList].push(todo);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.forceUpdate()
  }
  // Handle remove
  handleRemove = (id) => {
    console.log('id',id)
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    const index = tasks[this.props.cacheList].findIndex(x => x.id == id)
    tasks[this.props.cacheList].splice(index,1)
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.forceUpdate()
  }

  render(){
    // Render JSX
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var data = tasks[this.props.cacheList] ? tasks[this.props.cacheList] : [];
    this.state = {data}
    return (
      <div>
        <Title title={this.props.title}/>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove}
        />
      </div>
    );
  }
}

export default TodoApp;
