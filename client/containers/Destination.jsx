import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import style from './styles/destination.scss';
import { Pager } from 'react-bootstrap';

import { getDestinations } from '../js/actions/index.js';
import Card from './card.jsx';

//render the destinations page
class ConnectedDestination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      set: 0,
      previous: true,
      next: false,
    }

    this.renderSixCards = this.renderSixCards.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  componentDidMount() {
    this.props.getDestinations();
  }

  renderSixCards(set) {
    let sixCards = this.props.destinations.slice(this.state.set, this.state.set + 6);
    let classCounter = 0;

    return sixCards.map((destination) => {
      classCounter++;
      return <Card key={destination.name} destination={destination} classNumber={classCounter} />
    })
  }

  handlePreviousClick() {
    this.setState(prevState => { return { set: prevState.set - 6 } });
    this.setState({ next: false });

    if (this.state.set === 6) {
      this.setState({ previous: true })
    } else {
      this.setState({ previous: false });
    }
  }

  handleNextClick() {

    this.setState(prevState => { return { set: prevState.set + 6 } });
    this.setState({ previous: false });

    if (this.state.set === 30) {
      this.setState({ next: true });
    } else {
      this.setState({ next: false });
    }
  }

  render() {

    return (
      <div className={style.container}>
        {this.props.destinations.length > 1 && this.renderSixCards(this.state.set)}

        <Pager className={style.pagination}>
          <Pager.Item href="#" disabled={this.state.previous} onClick={() => this.handlePreviousClick()}>Previous</Pager.Item>{' '}
          <Pager.Item href="#" disabled={this.state.next} onClick={() => this.handleNextClick()}>Next</Pager.Item>
        </Pager>

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

