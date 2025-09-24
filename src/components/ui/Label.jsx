import React from 'react'

const Label = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={`block mb-2 font-medium ${className}`}>
      {children}
    </label>
  )
}

export default Label