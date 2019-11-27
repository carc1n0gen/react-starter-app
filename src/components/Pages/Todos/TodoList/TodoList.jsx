import styled from 'styled-components';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup, ListGroupItem, Badge as BSBadge,
} from 'react-bootstrap';
import { FaCheck, FaUndo } from 'react-icons/fa';

import { TodosContext } from 'components/Contexts/TodosContext';

const IconWrapper = styled.span`
  font-size: 11px;
`;

function Badge({ todo }) {
  if ((!todo.completed && todo.hover) || (todo.completed && !todo.hover)) {
    return <BSBadge pill variant="secondary"><IconWrapper><FaCheck /></IconWrapper></BSBadge>;
  }
  if (todo.completed) {
    return <BSBadge pill variant="secondary"><IconWrapper><FaUndo /></IconWrapper></BSBadge>;
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
  const filteredTodos = todos.filter(filter);
  return !filteredTodos.length
    ? (
      <p>Nothing here yet</p>
    ) : (
      <ListGroup>
        {
          filteredTodos.map(todo => (
            <ListGroupItem
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              onMouseOver={() => hoverTodo(todo.id)}
              onMouseOut={() => hoverTodo(todo.id)}
              onFocus={() => hoverTodo(todo.id)}
              onBlur={() => hoverTodo(todo.id)}
              className="d-flex justify-content-between align-items-center"
            >
              {todo.text}
              <Badge todo={todo} className="ml-auto" />
            </ListGroupItem>
          ))}
      </ListGroup>
    );
}

TodoList.propTypes = {
  filter: PropTypes.func.isRequired,
};
