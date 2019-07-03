import React, { useState } from 'react'
import { Grid, Col, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

import TodoList from './TodoList'

function handleAddTodo(input, setInput, addTodo) {
  if (!input.trim()) return
  addTodo(input)
  setInput('')
}

export default function Todos({ todos, addTodo }) {
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
        <TodoList todos={todos.filter(todo => !todo.completed)} />

        <h1>Completed</h1>
        <TodoList todos={todos.filter(todo => todo.completed)} />
      </Col>
    </Grid>
  )
}
