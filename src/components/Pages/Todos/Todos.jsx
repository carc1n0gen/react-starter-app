import React from 'react';
import { Grid, Col } from 'react-bootstrap';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Todos() {
  return (
    <Grid>
      <Col md={6} mdOffset={3}>
        <TodoForm />

        <h1>In Progress</h1>
        <TodoList filter={todo => !todo.completed} />

        <h1>Completed</h1>
        <TodoList filter={todo => todo.completed} />
      </Col>
    </Grid>
  );
}
