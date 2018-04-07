export const TODOLIST_ADD = 'TODOLIST_ADD';
export const TODOLIST_REMOVE = 'TODOLIST_REMOVE';
export const DONELIST_ADD = 'DONELIST_ADD';
export const DONELIST_REMOVE = 'DONELIST_REMOVE';

export const todoList_add = (title, description, date) => ({
  type: TODOLIST_ADD,
  payload: { title, description, date },
})

export const todoList_remove = index => ({
  type: TODOLIST_REMOVE,
  payload: index,
});

export const doneList_add = (title, description, date) => ({
  type: DONELIST_ADD,
  payload: { title, description, date },
});

export const doneList_remove = index => ({
  type: DONELIST_REMOVE,
  payload: index,
});
