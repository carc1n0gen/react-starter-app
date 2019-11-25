import styled from 'styled-components';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup, ListGroupItem, Badge as BSBadge, Glyphicon,
} from 'react-bootstrap';

import { TodosContext } from 'components/Contexts/TodosContext';

const IconWrapper = styled.span`
  font-size: 11px;
`;

function Badge({ todo }) {
  if ((!todo.completed && todo.hover) || (todo.completed && !todo.hover)) {
    return <BSBadge><IconWrapper><Glyphicon glyph="ok" /></IconWrapper></BSBadge>;
  }
  if (todo.completed) {
    return <BSBadge><IconWrapper><Glyphicon glyph="refresh" /></IconWrapper></BSBadge>;
  }
  return null;
}

Badge.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    hover: PropTypes.bool.isRequired,
  }).isRequired,
};

export default function TodoList({ filter }) {
  const { todos, toggleTodo, hoverTodo } = useContext(TodosContext);
  return !todos.length
    ? (
      <p>Nothing here yet</p>
    ) : (
      <ListGroup>
        {
        todos.filter(filter).map(todo => (
          <ListGroupItem
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            onMouseOver={() => hoverTodo(todo.id)}
            onMouseOut={() => hoverTodo(todo.id)}
            onFocus={() => hoverTodo(todo.id)}
            onBlur={() => hoverTodo(todo.id)}
          >
            <Badge todo={todo} />
            {todo.text}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
}

TodoList.propTypes = {
  filter: PropTypes.func.isRequired,
};
