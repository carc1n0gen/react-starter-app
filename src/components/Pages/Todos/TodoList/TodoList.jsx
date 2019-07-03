import React from 'react'
import { ListGroup, ListGroupItem, Badge, Glyphicon } from 'react-bootstrap'

function renderBadge(todo) {
  if (todo.completed && todo.hover) {
    return <Badge><Glyphicon glyph="refresh" /></Badge>
  } else if (todo.completed && !todo.hover || !todo.completed && todo.hover) {
    return <Badge><Glyphicon glyph="ok" /></Badge>
  } else {
    return null
  }
}

export default function({ todos, toggleTodo, hoverTodo }) {
    return !todos.length 
      ? (
        <p>Nothing here yet</p> 
      ) : (
        <ListGroup>{
          todos.map((todo) => (
            <ListGroupItem 
              key={todo.id}
              onClick={e => toggleTodo(todo.id)}
              onMouseOver={e => hoverTodo(todo.id)}
              onMouseOut={e => hoverTodo(todo.id)}
            >
              {renderBadge(todo)}
              {todo.text}
            </ListGroupItem>
          ))}  
        </ListGroup>
      )
}
