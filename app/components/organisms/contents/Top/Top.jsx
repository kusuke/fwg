import React, { Component } from 'react';

export default class Top extends Component {

  render() {
    const {
      members,
      counter,
      increment,
      decrement
    } = this.props;
    return (
      <div>
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