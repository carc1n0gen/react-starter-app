import React, { useState, useContext, useCallback } from 'react';
import {
  Button, Form,
} from 'react-bootstrap';

import { TodosContext } from 'components/Contexts/TodosContext';

export default function TodoForm() {
  const [input, setInput] = useState('');
  const { addTodo } = useContext(TodosContext);
  const onSubmit = useCallback((e) => {
    e.preventDefault();

    if (!input.trim()) return;
    addTodo(input);
    setInput('');
  });

  return (
    <form onSubmit={onSubmit}>
      <Form.Group controlId="text">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={input}
          placeholder="todo..."
          onChange={e => setInput(e.target.value)}
        />
      </Form.Group>
      <Button size="sm" variant="success" type="submit" className="mb-2">
        + create todo
      </Button>
    </form>
  );
}
