import React, { useState, useContext, useCallback } from 'react'
import { Grid, Col, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

import { TodosContext } from 'components/Contexts/TodosContext'
import TodoList from './TodoList'

export default function Todos() {
  const [input, setInput] = useState('')
  const { todos, addTodo } = useContext(TodosContext)

  const onSubmit = useCallback((e) => {
    e.preventDefault()

    if (!input.trim()) return
    addTodo(input)
    setInput('')
  })

  return (
    <Grid>
      <Col md={6} mdOffset={3}>
        <form onSubmit={onSubmit}>
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
