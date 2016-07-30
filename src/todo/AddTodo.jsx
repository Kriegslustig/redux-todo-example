import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions.jsx'

let input

const handleForm = dispatch => e => {
  e.preventDefault()
  dispatch(addTodo(input.value))
  input.value = ''
}

const AddTodo = ({ dispatch }) =>
  <form onSubmit={handleForm(dispatch)}>
    <input type='text' placeholder='To Do' ref={c => { input = c }} />
    <input type='submit' />
  </form>

export default connect()(AddTodo)

