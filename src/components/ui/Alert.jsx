import React from 'react';
import './Alert.css';

const Alert = ({ children, variant = 'info', className = '', ...props }) => {
  const classes = `alert alert-${variant} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Alert;