import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { todoList_add, doneList_remove } from '../actions';
import { Container, Table } from '../styles';

const DoneList = ({ doneTodos, undoTodo, deleteTodo }) =>
  <div style={Container}>
    <h3>Completed todos</h3>
    <table style={Table.table}>
      <thead>
        <tr style={Table.row}>
          <th style={Table.column_title}>Title</th>
          <th style={Table.column_description}>Description</th>
          <th style={Table.column_date}>Date</th>
          <th style={Table.column_button}></th>
          <th style={Table.column_button}></th>
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
