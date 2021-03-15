import React from 'react';

const Button = (props) => {
  return (
    <button className = {props.buttonClass} onClick = {props.click}>{props.content}</button>
  );
}

export default Button;
