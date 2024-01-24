import React from 'react'
import Naver from '../layouts/Naver'
import { Outlet } from 'react-router-dom'
import Futter from '../layouts/Futter'


const Routelayot = () => {
  return (
   <>
    <Naver/>
    <Outlet/>
    <Futter/>
   
   </>
  )
}

export default Routelayot