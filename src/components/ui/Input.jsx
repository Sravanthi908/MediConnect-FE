import React from 'react'

const Input = ({ className, ...props }) => {
  return (
    <input
      className={`w-full px-3 py-2 border border-gray-300 rounded ${className}`}
      {...props}
    />
  )
}

export default Input