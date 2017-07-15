import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function render(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}