import styled from 'styled-components'
import React from 'react'
import { ListGroup, ListGroupItem, Badge, Glyphicon } from 'react-bootstrap'

const IconWrapper = styled.span`
  font-size: 11px;
`

function renderBadge(todo) {
  if (todo.completed && todo.hover) {
    return <Badge><IconWrapper><Glyphicon glyph="refresh" /></IconWrapper></Badge>
  } else if (todo.completed && !todo.hover || !todo.completed && todo.hover) {
    return <Badge><IconWrapper><Glyphicon glyph="ok" /></IconWrapper></Badge>
  } else {
    return null
  }
}

export default function TodoList({ todos, todosContext }) {
    return !todos.length
      ? (
        <p>Nothing here yet</p>
      ) : (
        <ListGroup>{
          todos.map((todo) => (
            <ListGroupItem 
              key={todo.id}
              onClick={() => todosContext.toggleTodo(todo.id)}
              onMouseOver={() => todosContext.hoverTodo(todo.id)}
              onMouseOut={() => todosContext.hoverTodo(todo.id)}
            >
              {renderBadge(todo)}
              {todo.text}
            </ListGroupItem>
          ))}  
        </ListGroup>
      )
}
