import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { todoList_remove, doneList_add } from '../actions';
import { Container, Table } from '../styles';

const TodoList = ({ todos, completeTodo, deleteTodo }) =>
  <div style={Container}>
    <h3>Todo list</h3>
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
