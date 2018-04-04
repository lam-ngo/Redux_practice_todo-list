import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';

const App = ({ todos, completeTodo, deleteTodo }) =>
  <div>
    <AddTodo />
    <TodoList />
  </div>

export default App;
