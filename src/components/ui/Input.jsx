import React from 'react';
import './Input.css';

const Input = ({ className = '', ...props }) => {
  const classes = `input ${className}`;
  
  return (
    <input className={classes} {...props} />
  );
};

export default Input;