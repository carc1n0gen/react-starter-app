import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Button, FormGroup, ControlLabel, FormControl, ListGroup, 
  ListGroupItem, Glyphicon, Badge } from 'react-bootstrap'
import { addTodo, toggleTodo, hoverTodo } from '../App/redux/actions'
import { getTodos } from '../App/redux/selectors'

class Todos extends Component {
  state = {
    input: ''
  }

  handleAddTodo = e => {
    e.preventDefault()
    if (!this.state.input.trim()) return

    this.props.addTodo(this.state.input)
    this.setState({ input: '' })
  }

  handleToggleTodo = id => {
    this.props.toggleTodo(id)
  }

  handleHoverTodo = id => {
    this.props.hoverTodo(id)
  }

  render = () => (
    <Grid>
      <Col md={6} mdOffset={3}>
        <form onSubmit={this.handleAddTodo}>
          <FormGroup controlId="text">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              value={this.state.input}
              placeholder="todo..."
              onChange={e => this.setState({ input: e.target.value })}
            />
          </FormGroup>
          <Button bsSize="xs" bsStyle="success" type="submit">
            + create todo
          </Button>
        </form>

        <h1>In Progress</h1>

        {!this.props.todos.length &&
          <p>There are no todos yet.</p>
        }

        <ListGroup>
          {this.props.todos.filter(todo => !todo.completed).map((todo) => (
            <ListGroupItem 
              key={todo.id}
              onClick={e => this.handleToggleTodo(todo.id)}
              onMouseOver={e => this.handleHoverTodo(todo.id)}
              onMouseOut={e => this.handleHoverTodo(todo.id)}
            >
              {todo.hover &&
                <Badge><Glyphicon glyph="ok" /></Badge>
              }
              {todo.text}
            </ListGroupItem>
          ))}
        </ListGroup>

        <h1>Completed</h1>
        <ListGroup>
          {this.props.todos.filter(todo => todo.completed).map((todo) => (
            <ListGroupItem
              key={todo.id}
              onClick={e => this.handleToggleTodo(todo.id)}
              onMouseOver={e => this.handleHoverTodo(todo.id)}
              onMouseOut={e => this.handleHoverTodo(todo.id)}
            >
              {todo.hover ?
                <Badge><Glyphicon glyph="refresh" /></Badge> :
                <Badge><Glyphicon glyph="ok" /></Badge>
              }
              {todo.text}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </Grid>
  )
}

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  hoverTodo
}

const mapStateToProps = state => ({
  todos: getTodos(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
