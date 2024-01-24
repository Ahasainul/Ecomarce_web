import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'



const Bannar = () => {
  return (
   <Link to= '' >
    <>
      <div className='bg-bgimg bg-cover bg-center bg-no-repeat '>
        <Container className='pt-[150px] pb-[180px]'>
          <div className=" relative before:absolute before:top-[130px] before:left-[-110px] before:content-[''] before:w-[2px] before:h-[100px] before:rounded-full  before:bg-gray-400 ml-[138px] ">
            <h1 className='text-[49px] font-bold'>Final Offer</h1>
            <h4 className='relative after:absolute top-[70px] left-[-136px] font-medium'>01</h4>
            <p className='pt-[33px] text-[16px] text-ptag pb-[50px] flex items-center'>Up to <span className='font-bold text-black text-[40px] px-[5px]'>50%</span> sale for all furniture items!</p>
            <Button className='text-white   hover:bg-white hover:text-black   hover:shadow-2xl px-[50px] py-[15px] text-[16px] font-bold bg-black' btnName='Shop Now' />
          </div>
        </Container>

      </div>
      <div className="bg-bannar p-5 ">
        <Container >
          <Flex>
            <div className="w-[33%] flex items-center gap-2"> <span className='font-bold'>2</span> <p className='font-medium text-[14px] text-ptag'>Tow  Years Warranty</p></div>



            <div className="w-[33%] justify-center gap-2 flex items-center ">
              <i class="fa-solid fa-cart-shopping"></i>

              <p className='font-medium text-[14px] text-ptag'>Free Shopping</p>

            </div>
            <div className="w-[33%] justify-end flex  items-center gap-2">  <i class="fa-solid fa-rotate-left"></i>
              <p className='font-medium text-[14px] text-ptag'>Routan Police  in 30 dayes</p>
            </div>
          </Flex>
        </Container>

      </div>


    </></Link>
  )
}

export default Bannar