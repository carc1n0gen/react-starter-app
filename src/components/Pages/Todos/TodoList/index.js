import { connect } from 'react-redux'

import { toggleTodo, hoverTodo } from 'store/actions'
import TodoList from './TodoList'

const mapDispatchToProps = {
  toggleTodo,
  hoverTodo,
}

export default connect(null, mapDispatchToProps)(TodoList)
