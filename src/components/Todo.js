import React from 'react';

const Todo = ({ todo, button1, button2, function1, function2 }) =>
  <tr>
    <td>{todo.title}</td>
    <td>{todo.description}</td>
    <td>{todo.date}</td>
    <td><button onClick={() => function1()}>{button1}</button></td>
    <td><button onClick={() => function2()}>{button2}</button></td>
  </tr>

  export default Todo;
