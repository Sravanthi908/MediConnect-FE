import React from 'react';
import './Card.css';

const Card = ({ children, className = '', ...props }) => {
  const classes = `card ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;