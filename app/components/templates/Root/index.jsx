import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectActionAndState } from '../../../common/helpers/Connector';
import Root from './Root';

export default connectActionAndState((state) => {
  return { ...state }
}, {})
(class RootLayout extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <Root {...this.props} />
    )
  }
});