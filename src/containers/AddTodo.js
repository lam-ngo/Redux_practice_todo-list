import React from 'react';
import { connect } from 'react-redux';
import { todo_add } from '../actions';
import { Container, Input, Button } from '../styles';

const AddTodo = ({ dispatch }) => {
  let title = { value: ''}, description = { value: ''}, date = { value: ''}

  return (
    <div style={Container}>
      <h3>Add a new todo</h3>
      <div>
        <form onSubmit={e => {
            e.preventDefault()
            if (!title.value || !description.value || !date.value) {
              alert('No field should be empty!')
              return
            }
            dispatch(todo_add({
              id: 0,
              title: title.value,
              description: description.value,
              date: date.value,
              completed: false,
            }))
            title.value = ''
            description.value = ''
            date.value = ''
          }}>
          <input type="text" style={Input} placeholder="Title"
            ref={node => title = node}></input>
          <input type="text" style={Input} placeholder="Description"
            ref={node => description = node}></input>
          <input type="date" style={Input}
            ref={node => date = node}></input>
          <button style={Button} type="submit">ADD</button>
        </form>
      </div>
    </div>
  )
}

export default connect()(AddTodo)
