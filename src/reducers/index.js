import { combineReducers } from 'redux';
import todoList from './todoList.js';
import doneList from './doneList.js';

export default combineReducers({
  todoList,
  doneList,
});
