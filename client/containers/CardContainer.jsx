import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { 
  addMemories, 
  removeMemories, 
  addBucketList, 
  removeBucketList 
} from '../js/actions';
import Card from '../components/Card.jsx';

const mapStateToProps = state => {
  return {
    user: state.Login.user
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addMemories, removeMemories, addBucketList, removeBucketList }, dispatch);
}

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);
export default CardContainer;