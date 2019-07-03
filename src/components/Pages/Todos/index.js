import { connect } from 'react-redux'

import { addTodo } from 'store/actions'
import { getTodos } from 'store/selectors'
import Todos from './Todos'

function mapStateToProps(state) {
  return {
    todos: getTodos(state)
  }
}

const mapDispatchToProps = {
  addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
