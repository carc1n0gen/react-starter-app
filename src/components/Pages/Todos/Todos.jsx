import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Todos() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <TodoForm />

          <h1>In Progress</h1>
          <TodoList filter={todo => !todo.completed} />

          <h1>Completed</h1>
          <TodoList filter={todo => todo.completed} />
        </Col>
      </Row>
    </Container>
  );
}
