import React from 'react'
import Todo from './todo.jsx'
import AddTodo from './AddTodo.jsx'

export default ({ children, todos }) =>
  <div>
    {todos.map(Todo)}
    {children}
    <AddTodo />
  </div>

