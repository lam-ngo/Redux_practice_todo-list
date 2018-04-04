import React, { Component } from 'react';
import { connect } from 'react-redux';

const TodoList = ({ todos, addTodo, completeTodo, deleteTodo }) =>
  <div>
    <h3>Add a new todo:</h3>
    <div>
      <input type="text" placeholder="Title"></input>
      <input type="text" placeholder="Description"></input>
      <input type="date"></input>
      <button
        onClick={() => addTodo({
          title: "New title",
          description: "This is a new todo",
          date: "New date"
        })}>
        ADD
      </button>
    </div>

    <h3>Todo list:</h3>
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
          <Todo todo={todo} key={index}
            completeTodo={() => completeTodo(index)}
            deleteTodo={() => deleteTodo(index)}
          />
        )}
      </tbody>
    </table>
  </div>

const Todo = ({ todo, completeTodo, deleteTodo }) =>
  <tr>
    <td>{todo.title}</td>
    <td>{todo.description}</td>
    <td>{todo.date}</td>
    <td><button onClick={() => completeTodo()}>COMPLETE</button></td>
    <td><button onClick={() => deleteTodo()}>DELETE</button></td>
  </tr>

const mapStateToProps = state => ({ todos: state })

const mapDispatchToProps = dispatch => ({
  addTodo: newTodo => dispatch({ type: 'ADD_TODO', payload: newTodo }),
  completeTodo: index => dispatch({ type: 'COMPLETE_TODO', payload: index}),
  deleteTodo: index => dispatch({ type: 'DELETE_TODO', payload: index}),
})

const App = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default App;
