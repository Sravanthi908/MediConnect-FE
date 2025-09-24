import React from 'react'

const Alert = ({ children, type }) => {
  const bgColor = type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
  return (
    <div className={`p-3 mb-4 rounded ${bgColor}`}>
      {children}
    </div>
  )
}

export default Alert