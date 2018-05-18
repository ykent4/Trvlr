import React from 'react';
import style from './styles/card.scss';
import { Alert, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class Card extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log('cards :: ', this.props.destination.picture);

    let classStyle = {
      1: style.card_1,
      2: style.card_2,
      3: style.card_3,
      4: style.card_4,
      5: style.card_5,
      6: style.card_6,
      7: style.card_7,
      8: style.card_8,
    };

    return (
      <div className={style.card} id={classStyle[this.props.classNumber]}>
          <img className={style.card_image} src={this.props.destination.picture} alt="Card image" />
          <div className>
            <h5 className>{this.props.destination.name}</h5>
            <Button className={style.detail_button} type="button" bsStyle="info" bsSize="small" block >Details</Button>
        </div>
      </div>
    );
  }
}

export default Card;

