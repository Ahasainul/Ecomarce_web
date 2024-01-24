import React from 'react'

const List = ({className,ManuName}) => {
  return (
    <li className={`  ${className}`}>{ManuName}</li>
  )
}

export default List