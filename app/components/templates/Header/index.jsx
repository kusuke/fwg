import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './css/index.scss';

const css = classNames.bind(styles);

export default function render() {
  return (
    <header className={css('headerArea')}>
      <h1>
        <a href="/" class="siteLogo">FWG</a>
      </h1>
    </header>
  )
}