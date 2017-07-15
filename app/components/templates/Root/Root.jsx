import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';

import classNames from 'classnames/bind';
import styles from '../../../common/scss/common';
const css = classNames.bind(styles);

export default function render(props) {
  const { children } = props;
  return (
    <div className={css('app')}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}