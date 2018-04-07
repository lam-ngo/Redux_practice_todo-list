import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';

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
            function1={() => undoTodo(index)}
            function2={() => deleteTodo(index)}
          />
        )}
      </tbody>
    </table>
  </div>

const mapStateToProps = state => ({ doneTodos: state.doneList })

const mapDispatchToProps = dispatch => ({
  undoTodo: index => dispatch({ type: 'UNDO_TODO', payload: index}),
  deleteTodo: index => dispatch({ type: 'DELETE_TODO', payload: index}),
})

export default connect(mapStateToProps, mapDispatchToProps)(DoneList);
