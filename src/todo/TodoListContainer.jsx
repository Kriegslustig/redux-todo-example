import { connect } from 'react-redux'
import TodoList from './TodoList.jsx'

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodoList)

