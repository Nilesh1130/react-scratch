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
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var data = tasks[this.props.cacheList] ? tasks[this.props.cacheList] : [];
    this.state = {data}
  }
  // Add todo handler
  addTodo = (val) => {
    // Assemble data
    const todo = {text: val, id: window.id++}
    // Update data
    var { data } = this.state;
    data.push(todo);
    // Update state
    this.setState({data}, () => {
      var tasks = JSON.parse(localStorage.getItem("tasks")) || {};
      tasks[this.props.cacheList] = tasks[this.props.cacheList] ? tasks[this.props.cacheList] : [];
      tasks[this.props.cacheList].push(todo);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
  }
  // Handle remove
  handleRemove = (id) => {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter
    this.setState({data: remainder});
  }

  render(){
    // Render JSX
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
