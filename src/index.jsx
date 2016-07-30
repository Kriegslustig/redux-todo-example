import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
import Todo from './todo/Todo.jsx'

render(
  <main>
    <Todo name='Test' />
    <Todo name='Testing' />
  </main>,
  document.getElementById('app')
)

// const store = createStore(app)

