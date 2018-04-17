import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { todo_undo, todo_delete } from '../actions';
import { Container, Table } from '../styles';

class CompletedList extends Component {
  render () {
    const completedTodos = this.props.todos
      ? this.props.todos.filter(todo => todo.completed === true)
      : [];
    return (
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
            {completedTodos.map( (todo,index) =>
              <Todo todo={todo} key={index}
                button1="UNDO"
                button2="DELETE"
                function1={() => {
                  this.props.undoTodo(todo.id)
                }}
                function2={() => this.props.deleteTodo(todo.id)}
              />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ todos: state.todos })

const mapDispatchToProps = dispatch => ({
  undoTodo: id => dispatch(todo_undo(id)),
  deleteTodo: id => dispatch(todo_delete(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CompletedList);
