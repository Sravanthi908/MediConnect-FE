import React from 'react';
import './Label.css';

const Label = ({ children, className = '', ...props }) => {
  const classes = `label ${className}`;
  
  return (
    <label className={classes} {...props}>
      {children}
    </label>
  );
};

export default Label;