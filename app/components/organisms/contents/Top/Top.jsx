import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './css/index.scss';
const css = classNames.bind(styles);

export default class Top extends Component {

  render() {
    const {
      members,
      counter,
      increment,
      decrement
    } = this.props;
    return (
      <div className={css('container')}>
        <h2>{counter}</h2>
        <button onClick={() => increment()}> + </button>
        <button onClick={() => decrement()}> - </button>
        <h2>members</h2>
        <div>
          <ul>
            {Object.keys(members).map((data)=> {
              return (
                <li key={data}>{members[data]}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}