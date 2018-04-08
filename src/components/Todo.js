import React from 'react';
import { Table, Button } from '../styles';

const Todo = ({ todo, button1, button2, function1, function2 }) =>
  <tr style={Table.row}>
    <td>{todo.title}</td>
    <td>{todo.description}</td>
    <td>{todo.date}</td>
    <td><button style={Button} onClick={() => function1()}>{button1}</button></td>
    <td><button style={Button} onClick={() => function2()}>{button2}</button></td>
  </tr>

  export default Todo;
