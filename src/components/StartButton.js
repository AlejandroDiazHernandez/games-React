import React from 'react';

import '../styles/StartButton.scss';

export default function StartButton(props) {
  return (
    <button className="StartButton" onClick={props.onClick}>
      {props.isStarted ? 'Terminar partida' : 'Comenzar partida'}
    </button>
  );
}
