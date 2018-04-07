import React from 'react';

//CONTAINERS
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import DoneList from '../containers/DoneList';
//STYLES
import { Wrapper } from '../styles';

const App = ({ todos, completeTodo, deleteTodo }) =>
  <div style={Wrapper}>
    <AddTodo />
    <TodoList />
    <DoneList />
  </div>

export default App;
