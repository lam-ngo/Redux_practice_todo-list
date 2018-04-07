import { todoList as todos } from '../data';
import { TODOLIST_ADD, TODOLIST_REMOVE } from '../actions';

const todoList = (state = todos, action) => {
  switch (action.type) {
    case TODOLIST_REMOVE:
      const removeIndex = action.payload;
      console.log(`TODOLIST_REMOVE with index ${removeIndex}`);
      return [ ...state.slice(0, removeIndex), ...state.slice(removeIndex+1)];
    case TODOLIST_ADD:
      console.log(`TODOLIST_ADD with details ${action.payload}`);
      return [ ...state, action.payload];
    default:
      return state;
  }
};

export default todoList;
