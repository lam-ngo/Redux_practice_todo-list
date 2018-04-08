import React from 'react';

//CONTAINERS
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import DoneList from '../containers/DoneList';
//STYLES
import { Html, Wrapper, AppTitle } from '../styles';

const App = ({ todos, completeTodo, deleteTodo }) =>
  <div style={Html}>
    <div style={AppTitle}>Todo list with React-Redux</div>
    <div style={Wrapper}>
      <AddTodo />
      <TodoList />
      <DoneList />
    </div>
  </div>

export default App;
