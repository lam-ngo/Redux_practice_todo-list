import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { todo_complete, todo_delete } from '../actions';
import { Container, Table } from '../styles';

class TodoList extends Component {
  render () {
    const todos = this.props.todos
      ? this.props.todos.filter(todo => todo.completed === false)
      : [];
    return (
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
                    this.props.completeTodo(todo.id)
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
  completeTodo: id => dispatch(todo_complete(id)),
  deleteTodo: id => dispatch(todo_delete(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
