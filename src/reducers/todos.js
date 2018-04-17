import todos from '../data';
import {
TODO_ADD,
TODO_COMPLETE,
TODO_UNDO,
TODO_DELETE,
} from '../actions';

const todoReducer = (state = todos, action) => {
  switch (action.type) {
    case TODO_ADD:
      console.log(`TODO_ADD with details ${action.payload}`);
      let newId;
      let newIdFound = false;
      while(!newIdFound) {
        newId = Math.floor(Math.random() * 100);
        let overlapId = state.filter(todo => todo.id === newId);
        if(overlapId.length === 0) {
          console.log(`newIdFound = true, new id = ${newId}`);
          newIdFound = true;
        }
      }
      action.payload.id = newId;
      return [ ...state, action.payload];
    case TODO_COMPLETE:
      const completedID = action.payload;
      console.log(`TODO_COMPLETE with id ${completedID}`);
      return state.map(todo =>
        (todo.id === completedID)
          ? {...todo, completed: true}
          : todo
      );
    case TODO_UNDO:
      const undoID = action.payload;
      console.log(`TODO_UNDO with id ${undoID}`);
      return state.map(todo =>
        (todo.id === undoID)
          ? {...todo, completed: false}
          : todo
      );
    case TODO_DELETE:
      const deleteID = action.payload;
      console.log(`TODO_DELETE with id ${deleteID}`);
      return state.filter(todo => todo.id !== deleteID);
    default:
      return state;
  }
};

export default todoReducer;
