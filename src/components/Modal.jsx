import React from 'react';
import PropTypes from 'prop-types';
import { Modal as ReactModal } from 'react-bootstrap';

export default function Modal({
  title, show, onHide, children,
}) {
  return (
    <ReactModal show={show} onHide={onHide} centered>
      <ReactModal.Header closeButton>
        <ReactModal.Title>{title}</ReactModal.Title>
      </ReactModal.Header>
      <ReactModal.Body>
        {children}
      </ReactModal.Body>
    </ReactModal>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: '',
  show: false,
  onHide: null,
  children: null,
};
