const doneList = (state = [
  { title: "Title 6", description: "This is todo 6", date: "Date 6"},
  { title: "Title 7", description: "This is todo 7", date: "Date 7"},
  { title: "Title 8", description: "This is todo 8", date: "Date 8"},
  { title: "Title 9", description: "This is todo 9", date: "Date 9"},
  { title: "Title 10", description: "This is todo 10", date: "Date 10"},
], action) => {
  switch (action.type) {
    case 'UNDO_TODO':
      const undoIndex = action.payload;
      console.log(`COMPLETE_TODO with index ${undoIndex}`);
      return [ ...state.slice(0, undoIndex), ...state.slice(undoIndex+1)];
    case 'DELETE_TODO':
      const deleteIndex = action.payload;
      console.log(`DELETE_TODO with index ${deleteIndex}`);
      return [ ...state.slice(0, deleteIndex), ...state.slice(deleteIndex+1)];
    default:
      return state;
  }
};

export default doneList;
