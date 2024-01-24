import React from 'react'

const Button = ({btnName,className}) => {
  return (
   <button className={`${className}`}>{btnName}</button>
  )
}

export default Button