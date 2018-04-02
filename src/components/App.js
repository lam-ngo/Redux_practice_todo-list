import React, { Component } from 'react';
import { connect } from 'react-redux';

const TodoList = ({ todos }) =>
  <div>
    This is a todo list:
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos.map( (todo,index) =>
          <Todo todo={todo} key={index} />
        )}
      </tbody>
    </table>
    Add a new todo:

  </div>

const Todo = ({ todo }) =>
  <tr>
    <td>{todo.title}</td>
    <td>{todo.description}</td>
    <td>{todo.date}</td>
    <td><button>COMPLETE</button></td>
    <td><button>DELETE</button></td>
  </tr>

const mapStateToProps = state => ({ todos: state })

const mapDispatchToProps = dispatch => ({
  completeTodo: index => dispatch({ type: 'COMPLETE_TODO', payload: index}),
  deleteTodo: index => dispatch({ type: 'DELETE_TODO', payload: index}),
  addTodo: newTodo => dispatch({ type: 'ADD_TODO', payload: newTodo }),
})

const App = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default App;
