export const todoReducer = (state = [
  { title: "Title 1", description: "This is todo 1", date: "Date 1"},
  { title: "Title 2", description: "This is todo 2", date: "Date 2"},
  { title: "Title 3", description: "This is todo 3", date: "Date 3"},
  { title: "Title 4", description: "This is todo 4", date: "Date 4"},
  { title: "Title 5", description: "This is todo 5", date: "Date 5"},
], action) => {
  switch (action.type) {
    case 'COMPLETE_TODO':
      console.log('COMPLETE_TODO');
      return state;
    case 'DELETE_TODO':
      console.log('DELETE_TODO');
      return state;
    case 'ADD_TODO':
      console.log('ADD_TODO');
      return state;
    default:
      return state;
  }
};
