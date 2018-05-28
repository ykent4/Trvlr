import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Actions from '../js/actions/index.js';

//changes views between login page, destination page and profile page
class ConnectedBucketList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        BucketList
      </div>
    );
  }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

};

const BucketList = connect(mapStateToProps, mapDispatchToProps)(ConnectedBucketList);
export default BucketList;