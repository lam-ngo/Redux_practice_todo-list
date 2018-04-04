import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';

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
            completeTodo={() => completeTodo(index)}
            deleteTodo={() => deleteTodo(index)}
          />
        )}
      </tbody>
    </table>
  </div>

const mapStateToProps = state => ({ todos: state })

const mapDispatchToProps = dispatch => ({
  completeTodo: index => dispatch({ type: 'COMPLETE_TODO', payload: index}),
  deleteTodo: index => dispatch({ type: 'DELETE_TODO', payload: index}),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
