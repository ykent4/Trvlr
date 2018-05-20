import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CardModal = (props) => {
  console.log('model component ', props.showCardModal);
  return (
    <div>
      <Modal show={props.showCardModal} onHide={() => props.closeCardModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          <hr />

          <h4>Overflowing text to show scroll behavior</h4>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.closeCardModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CardModal;