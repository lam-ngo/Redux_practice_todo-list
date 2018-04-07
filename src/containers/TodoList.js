import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { todoList_remove, doneList_add } from '../actions';

const TodoList = ({ todos, completeTodo, deleteTodo }) =>
  <div>
    <h3>Todo list:</h3>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos.map( (todo,index) =>
          <Todo todo={todo} key={index}
            button1="COMPLETE"
            button2="DELETE"
            function1={() => {
              completeTodo(todo)
              deleteTodo(index)
            }}
            function2={() => deleteTodo(index)}
          />
        )}
      </tbody>
    </table>
  </div>

const mapStateToProps = state => ({ todos: state.todoList })

const mapDispatchToProps = dispatch => ({
  completeTodo: todo => dispatch(doneList_add(todo)),
  deleteTodo: index => dispatch(todoList_remove(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
