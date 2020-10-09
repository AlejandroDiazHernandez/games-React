import React from 'react';

import '../styles/Keyboard.scss';

export default function Keyboard(props) {
  return (
    <div>
      {props.elements.split('').map((element) => (
        <button
          key={element}
          disabled={props.getDisabled ? props.getDisabled(element) : false}
          className="Keyboard__element"
          onClick={() => props.handleClick(element)}
        >
          {element}
        </button>
      ))}
    </div>
  );
}
