import React from 'react'
import { Modal as ReactModal } from 'react-bootstrap'

export default function Modal({ title, show, onHide, children }) {
  return (
    <ReactModal show={show} onHide={onHide}>
      <ReactModal.Header closeButton>
        <ReactModal.Title>{title}</ReactModal.Title>
      </ReactModal.Header>
      <ReactModal.Body>
        {children}
      </ReactModal.Body>
    </ReactModal>
  )
}