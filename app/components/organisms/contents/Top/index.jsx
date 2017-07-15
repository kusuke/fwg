import React, { Component } from 'react';
import { connectActionAndState } from '../../../../common/helpers/Connector';
import PropTypes from 'prop-types';
import Top from './Top';
import * as TopAction from '../../../../common/redux/TopAction';

export default connectActionAndState((state) => {
  const topState = {
    ...state.top,
    members: state.fetchData.members
  };
  return { ...topState }
}, {...TopAction})
(class TopContainer extends Component {
  static propTypes = {
    children: PropTypes.object,
    counter: PropTypes.number,
    members: PropTypes.object
    // increment: PropTypes.function,
    // decrement: PropTypes.function
  };

  render() {
    return (
      <Top {...this.props} />
    )
  }
});