import React, { Component } from 'react';

import Simple from './Simple';

var { connect } = require('react-redux');
var {
  appInitialize
} = require('./actions');

class MisPastillas extends Component <{}> {
  componentWillMount() {
    if(!this.props.app.initialized) {
      this.props.appInitialize()
    }
  }

  render() {
    return (
      <Simple />
    );
  }
};

function select(store) {
  return {
    app: store.appReducer,
  };
}

function actions(dispatch) {
  return {
    appInitialize: () => dispatch(appInitialize())
  };
}

module.exports = connect(select, actions)(MisPastillas)
