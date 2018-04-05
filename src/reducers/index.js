import { combineReducers } from 'redux';

const todoReducer = (state = [
  { title: "Title 1", description: "This is todo 1", date: "Date 1"},
  { title: "Title 2", description: "This is todo 2", date: "Date 2"},
  { title: "Title 3", description: "This is todo 3", date: "Date 3"},
  { title: "Title 4", description: "This is todo 4", date: "Date 4"},
  { title: "Title 5", description: "This is todo 5", date: "Date 5"},
], action) => {
  switch (action.type) {
    case 'COMPLETE_TODO':
      const completeIndex = action.payload;
      console.log(`COMPLETE_TODO with index ${completeIndex}`);
      return [ ...state.slice(0, completeIndex), ...state.slice(completeIndex+1)];
    case 'DELETE_TODO':
      const deleteIndex = action.payload;
      console.log(`DELETE_TODO with index ${deleteIndex}`);
      return [ ...state.slice(0, deleteIndex), ...state.slice(deleteIndex+1)];
    case 'ADD_TODO':
      console.log(`ADD_TODO with details ${action.payload}`);
      return [ ...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  todoList: todoReducer,
});
