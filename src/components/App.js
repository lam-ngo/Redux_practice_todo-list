import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import DoneList from '../containers/DoneList';

const App = ({ todos, completeTodo, deleteTodo }) =>
  <div>
    <AddTodo />
    <TodoList />
    <DoneList />
  </div>

export default App;
