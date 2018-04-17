export const TODO_ADD = 'TODO_ADD';
export const TODO_COMPLETE = 'TODO_COMPLETE';
export const TODO_UNDO = 'TODO_UNDO';
export const TODO_DELETE = 'TODO_DELETE';

export const todo_add = todo => ({
  type: TODO_ADD,
  payload: todo,
})

export const todo_complete = id => ({
  type: TODO_COMPLETE,
  payload: id,
});

export const todo_undo = id => ({
  type: TODO_UNDO,
  payload: id,
});

export const todo_delete = id => ({
  type: TODO_DELETE,
  payload: id,
});
