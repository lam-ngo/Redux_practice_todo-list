import React from 'react'
import { connect } from 'react-redux'

const AddTodo = ({ dispatch }) => {
  let title = { value: ''}, description = { value: ''}, date = { value: ''}

  return (
    <div>
      <h3>Add a new todo:</h3>
      <div>
        <form onSubmit={e => {
            e.preventDefault()
            if (!title.value || !description.value || !date.value) {
              alert('No field should be empty!')
              return
            }
            dispatch({
              type: 'ADD_TODO',
              payload: {
                title: title.value,
                description: description.value,
                date: date.value
              }
            })
            title.value = ''
            description.value = ''
            date.value = ''
          }}>
          <input type="text" placeholder="Title" ref={node => title = node}></input>
          <input type="text" placeholder="Description" ref={node => description = node}></input>
          <input type="date" ref={node => date = node}></input>
          <button type="submit">ADD</button>
        </form>
      </div>
    </div>
  )
}

export default connect()(AddTodo)
