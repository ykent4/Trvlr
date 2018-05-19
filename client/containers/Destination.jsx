import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import style from './styles/destination.scss';

import { getDestinations } from '../js/actions/index.js';
import Card from './card.jsx';

//render the destinations page
class ConnectedDestination extends React.Component {
  constructor(props) {
    super(props);

    this.renderSixCards = this.renderSixCards.bind(this);
  }

  componentDidMount() {
    this.props.getDestinations();
  }

  renderSixCards() {
    let sixCards = this.props.destinations.slice(0,6);
    let classCounter = 0;

    return sixCards.map((destination) => {
      classCounter++;
      return <Card key={destination.name} destination={destination} classNumber={classCounter}/>
    })
  }

  render() {

    return (
      <div className={style.container}>
        {this.props.destinations.length > 1 && this.renderSixCards()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { destinations: state.Destination.destinations };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getDestinations }, dispatch);
};

const Destination = connect(mapStateToProps, mapDispatchToProps)(ConnectedDestination);
export default Destination;

