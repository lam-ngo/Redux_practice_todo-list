export const ADD_TODO = 'ADD_TODO';
export const TODOLIST_COMPLETE = 'TODOLIST_COMPLETE';
export const TODOLIST_DELETE = 'TODOLIST_DELETE';
export const DONELIST_UNDO = 'DONELIST_UNDO';
export const DONELIST_DELETE = 'DONELIST_DELETE';

export const addTodo = (title, description, date) => ({
  type: ADD_TODO,
  payload: { title, description, date }
})

export const todoList_complete = index => ({
  type: TODOLIST_COMPLETE,
  payload: index,
});

export const todoList_delete = index => ({
  type: TODOLIST_DELETE,
  payload: index,
});

export const doneList_undo = index => ({
  type: DONELIST_UNDO,
  payload: index,
});

export const doneList_delete = index => ({
  type: DONELIST_DELETE,
  payload: index,
});
