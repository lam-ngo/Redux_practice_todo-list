import React from 'react';

const Todo = ({ todo, completeTodo, deleteTodo }) =>
  <tr>
    <td>{todo.title}</td>
    <td>{todo.description}</td>
    <td>{todo.date}</td>
    <td><button onClick={() => completeTodo()}>COMPLETE</button></td>
    <td><button onClick={() => deleteTodo()}>DELETE</button></td>
  </tr>

  export default Todo;
