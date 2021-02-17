import React from 'react';
import ReactDOM from 'react-dom';
export const Title = ({title}) => {
  return (
    <div>
       <div>
          <h1>{title}</h1>
       </div>
    </div>
  );
}

export const TodoForm = ({addTodo}) => {
  // Input tracker
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>
        +
      </button>
    </div>
  );
};

export const Todo = ({todo, remove}) => {
  // Each Todo
  return (<li onClick={()=>{remove(todo.id)}}>{todo.text}</li>);
}

export const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo, index) => {
    return (<Todo todo={todo} key={index} remove={remove}/>)
  });
  return (<ul>{todoNode}</ul>);
}
