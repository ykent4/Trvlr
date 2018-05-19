import React from 'react';
import style from './styles/card.scss';
import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

const Card = (props) => {

  const classStyle = {
    1: style.card_1,
    2: style.card_2,
    3: style.card_3,
    4: style.card_4,
    5: style.card_5,
    6: style.card_6,
  }

  return (
    <div className={style.card} id={classStyle[props.classNumber]}>
      <img className={style.card_image} src={props.destination.picture} alt="Card image" />
      <div className>
            <h5 className>{props.destination.name}</h5>
        <Button className={style.detail_button} type="button" bsStyle="info" bsSize="sm" block >Details</Button>
      </div>
      <div className={style.memories}><Button className={style.attribute_button} bsSize="sm"><img className={style.attribute_image} src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/media-pict-camera.png" /></Button> In {props.destination.memories} memories </div>
      <div><Button className={style.attribute_button} bsSize="sm"><img className={style.attribute_image} src="https://d30y9cdsu7xlg0.cloudfront.net/png/29962-200.png" /></Button> In {props.destination.bucket_list} bucket lists </div>
    </div>
  );
};

export default Card;

