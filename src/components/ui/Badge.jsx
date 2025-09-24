import React from 'react'

const Badge = ({ children }) => {
  return (
    <span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-200 rounded">
      {children}
    </span>
  )
}

export default Badge