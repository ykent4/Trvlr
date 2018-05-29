import React from 'react';
import {
  Alert,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';

import style from './styles/card.scss';
import CardModal from './CardModal';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCardModal: false,
      addOrRemoveMemories: 'Add to Memories',
      addOrRemoveBucketList: 'Add to Bucket List',
    }

    this.openCardModal = this.openCardModal.bind(this);
    this.closeCardModal = this.closeCardModal.bind(this);
  }

  componentDidMount() {

    if (this.props.user.memories.includes(this.props.destination.name)) {
      this.setState({ addOrRemoveMemories: 'Remove from Memories' });
    } else {
      this.setState({ addOrRemoveMemories: 'Add to Memories' })
    }

    if (this.props.user.bucket_list.includes(this.props.destination.name)) {
      this.setState({ addOrRemoveBucketList: 'Remove from Bucket List' })
    } else {
      this.setState({ addOrRemoveBucketList: 'Add to Bucket List' })
    }


  }

  openCardModal() {
    this.setState({ showCardModal: true });
  }

  closeCardModal() {
    this.setState({ showCardModal: false });
  }

  handleMemoriesClick() {

    if (this.props.user.memories.includes(this.props.destination.name)) {
      this.props.removeMemories(this.props.user.username, this.props.destination.name, 'destination');
      this.setState({ addOrRemoveMemories: 'Remove from Memories' });
    } else {
      this.props.addMemories(this.props.user.username, this.props.destination.name, 'destination')
      this.setState({ addOrRemoveMemories: 'Add to Memories' })
    }

  }

  handleBucketListClick() {

    if (this.props.user.bucket_list.includes(this.props.destination.name)) {
      this.props.removeBucketList(this.props.user.username, this.props.destination.name, 'destination');
      this.setState({ addOrRemoveBucketList: 'Remove from Bucket List' })
    } else {
      this.props.addBucketList(this.props.user.username, this.props.destination.name, 'destination')
      this.setState({ addOrRemoveBucketList: 'Add to Bucket List' })
    }

  }

  render() {

    const classStyle = {
      1: style.card_1,
      2: style.card_2,
      3: style.card_3,
      4: style.card_4,
      5: style.card_5,
      6: style.card_6,
    }

    const popoverLeft = (
      <Popover id="popover-positioned-left" title={`In ${this.props.destination.memories} memories lists`}>
        <Button bsStyle="primary" bsSize="sm" className={style.add_buttons} onClick={() => this.handleMemoriesClick()}>{this.state.addOrRemoveMemories}</Button>
      </Popover>
    );

    const popoverRight = (
      <Popover id="popover-positioned-right" title={`In ${this.props.destination.bucket_list} bucket lists`}>
        <Button bsStyle="primary" bsSize="sm" className={style.add_buttons} onClick={() => this.handleBucketListClick()}>{this.state.addOrRemoveBucketList}</Button>
      </Popover>
    );

    return (
      <div className={style.card} id={classStyle[this.props.classNumber]}>
        <h5>{this.props.destination.name}</h5>
        <img className={style.card_image} src={this.props.destination.picture} alt="Card image" />
        <Button className={style.detail_button} onClick={this.openCardModal} type="button" bsSize="sm" block >Details</Button>
        <div className={style.save}>
          <OverlayTrigger trigger="click" rootClose={true} placement="left" overlay={popoverLeft}>
            <Button className={style.save_button} bsSize="sm"><img className={style.save_image} src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/media-pict-camera.png" /></Button>
          </OverlayTrigger>
          <OverlayTrigger trigger="click" rootClose={true} placement="right" overlay={popoverRight}>
            <Button className={style.save_button} bsSize="sm"><img className={style.save_image} src="https://d30y9cdsu7xlg0.cloudfront.net/png/47078-200.png" /></Button>
          </OverlayTrigger>
        </div>

        <CardModal showCardModal={this.state.showCardModal} closeCardModal={this.closeCardModal} destination={this.props.destination} />
      </div>
    );
  }
};

export default Card;