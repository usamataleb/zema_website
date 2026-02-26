import React from "react";
import { Modal as BootstrapModal, Button } from "react-bootstrap";

const Modal = ({ show, handleClose, title, children, footer, size = "lg" }) => {
  return (
    <BootstrapModal show={show} onHide={handleClose} size={size} centered>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{children}</BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {footer}
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default Modal;

