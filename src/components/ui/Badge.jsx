import React from 'react';
import './Badge.css';

const Badge = ({ children, variant = 'primary', className = '', ...props }) => {
  const classes = `badge badge-${variant} ${className}`;
  
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;