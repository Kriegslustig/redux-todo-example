import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers.jsx'
import TodoListContainer from './todo/TodoListContainer.jsx'

const store = createStore(reducers)

render(
  <Provider store={store}>
    <TodoListContainer />
  </Provider>,
  document.getElementById('root')
)

// const store = createStore(app)

