import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getDestinations } from '../js/actions/index.js';

//render the destinations page
class ConnectedDestination extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getDestinations();
  }

  render() {
    console.log('destination props :: ', this.props.destinations);
    return (
      <div>
        test destination
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { destinations: state.destinations };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getDestinations }, dispatch);
};

const Destination = connect(mapStateToProps, mapDispatchToProps)(ConnectedDestination);
export default Destination;

