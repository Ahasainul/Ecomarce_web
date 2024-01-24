import React from 'react'

const Text = ({text,className}) => {
  return (
    <h1 className={`${className}`}>{text}</h1>
  )
}

export default Text