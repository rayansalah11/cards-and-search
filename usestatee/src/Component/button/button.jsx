import React from 'react';
import './button.css';

function Button({text,handelClick}) {
    return (
      <button className="button" onClick={handelClick}>
{text}
      </button>
    );
  }
 export default Button;  