import React from 'react'
import { connect } from 'react-redux'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <h3>Add a new todo:</h3>
      <div>
        <input type="text" placeholder="Title"></input>
        <input type="text" placeholder="Description"></input>
        <input type="date"></input>
        <button
          onClick={() => dispatch({
            type: 'ADD_TODO',
            payload: {
              title: "New title",
              description: "This is a new todo",
              date: "New date"
            }
          })}>
          ADD
        </button>
      </div>
    </div>
  )
}

export default connect()(AddTodo)
