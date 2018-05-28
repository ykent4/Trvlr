import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import style from './styles/cardmodal.scss';

const CardModal = (props) => {

  return (
    <div>
      <Modal show={props.showCardModal} onHide={() => props.closeCardModal()}>
        <Modal.Header closeButton>
          <Modal.Title className={style.modal_text}>{props.destination.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={props.modal_body}>
            <img className={style.image} src={props.destination.picture} alt="Card image" />

          <hr />
          <p className={style.modal_text}>{props.destination.description}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.closeCardModal()}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

}


export default CardModal;