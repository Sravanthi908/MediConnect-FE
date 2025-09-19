// src/components/ui/Loader.jsx
import React from 'react';

const Loader = ({ size = 'medium', text = 'Loading...', className = '' }) => {
  const sizeClasses = {
    small: 'loader-small',
    medium: 'loader-medium',
    large: 'loader-large'
  };
  
  const classes = [
    'loader',
    sizeClasses[size] || sizeClasses.medium,
    className
  ].join(' ');
  
  return (
    <div className={classes}>
      <div className="loader-spinner"></div>
      {text && <div className="loader-text">{text}</div>}
    </div>
  );
};

export default Loader;