import { doneList as doneTodos } from '../data';
import { DONELIST_ADD, DONELIST_REMOVE } from '../actions';

const doneList = (state = doneTodos, action) => {
  switch (action.type) {
    case DONELIST_ADD:
      const removeIndex = action.payload;
      console.log(`DONELIST_ADD with index ${removeIndex}`);
      return [ ...state.slice(0, removeIndex), ...state.slice(removeIndex+1)];
    case DONELIST_REMOVE:
      console.log(`DONELIST_REMOVE with details ${action.payload}`);
      return [ ...state, action.payload];
    default:
      return state;
  }
};

export default doneList;
