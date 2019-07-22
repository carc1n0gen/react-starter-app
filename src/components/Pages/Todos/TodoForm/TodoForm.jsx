import React, { useState, useContext, useCallback } from 'react';
import {
  Button, FormGroup, ControlLabel, FormControl,
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
  );
}
