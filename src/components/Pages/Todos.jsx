import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Button, FormGroup, ControlLabel, FormControl, ListGroup, 
  ListGroupItem, Glyphicon, Badge } from 'react-bootstrap'

import { addTodo, toggleTodo, hoverTodo } from 'store/actions'
import { getTodos } from 'store/selectors'

function handleAddTodo(input, setInput, addTodo) {
  if (!input.trim()) return
  addTodo(input)
  setInput('')
}

function Todos({ todos, addTodo, toggleTodo, hoverTodo }) {
  const [input, setInput] = useState('')
  return (
    <Grid>
      <Col md={6} mdOffset={3}>
        <form onSubmit={e => { e.preventDefault(); handleAddTodo(input, setInput, addTodo) }}>
          <FormGroup controlId="text">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              value={input}
              placeholder="todo..."
              onChange={e => setInput(e.target.value)}
            />
          </FormGroup>
          <Button bsSize="xs" bsStyle="success" type="submit">
            + create todo
          </Button>
        </form>

        <h1>In Progress</h1>

        {!todos.length &&
          <p>There are no todos yet.</p>
        }

        <ListGroup>
          {todos.filter(todo => !todo.completed).map((todo) => (
            <ListGroupItem 
              key={todo.id}
              onClick={e => toggleTodo(todo.id)}
              onMouseOver={e => hoverTodo(todo.id)}
              onMouseOut={e => hoverTodo(todo.id)}
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
          {todos.filter(todo => todo.completed).map((todo) => (
            <ListGroupItem
              key={todo.id}
              onClick={e => toggleTodo(todo.id)}
              onMouseOver={e => hoverTodo(todo.id)}
              onMouseOut={e => hoverTodo(todo.id)}
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
