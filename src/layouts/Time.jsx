import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import clock from '../assets/gori.png'
import Text from '../components/Text'
import Button from '../components/Button'
const Time = () => {
  return (
   <>
   <Container className='mb-[50px] bg-clk'>
    <div className="flex">
        <div className="w-[50%]">
            <Image src={clock} alt='clock.png'/>
        </div>




        <div className="w-[50%]">
            <div className="">
                <Text className='mt-[68px] text-[38px] font-bold mb-[30px]' text={'Phone of the year'}/>
                <p className='mb-[40px] text-sm pr-[350px] text-hadding'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                <Button className='text-white px-[50px] py-[15px] hover:bg-white hover:text-black   hover:shadow-2xl text-[16px] font-bold bg-black' btnName='Shop Now' />
            </div>
        </div>
    </div>
   </Container>
   </>
  )
}

export default Time