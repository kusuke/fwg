import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './css/index.scss';

const css = classNames.bind(styles);

export default function render() {
  return (
    <footer className={css('footer')}>
      footer書いてね
    </footer>
  )
}