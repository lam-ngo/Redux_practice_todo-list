import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { todoList_add, doneList_remove } from '../actions';

const DoneList = ({ doneTodos, undoTodo, deleteTodo }) =>
  <div>
    <h3>Done todo list:</h3>
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
        {doneTodos.map( (todo,index) =>
          <Todo todo={todo} key={index}
            button1="UNDO"
            button2="DELETE"
            function1={() => {
              undoTodo(todo)
              deleteTodo(index)
            }}
            function2={() => deleteTodo(index)}
          />
        )}
      </tbody>
    </table>
  </div>

const mapStateToProps = state => ({ doneTodos: state.doneList })

const mapDispatchToProps = dispatch => ({
  undoTodo: todo => dispatch(todoList_add(todo)),
  deleteTodo: index => dispatch(doneList_remove(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DoneList);
