import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import Image from '../components/Image'
import imagss from'../assets/byskat.png'
import clk from '../assets/clk.png'
import watch from'../assets/watch.png'
import pat from '../assets/pat.png'
import Button from '../components/Button'
import bag from '../assets/bag.png'
import bags from '../assets/bags.png'
import botol from '../assets/botol.png'
import puta from '../assets/puta.png'
const Arrivals = () => {
  return (
    <>
    <Container className='pb-[50px]'>
        <Text className='text-[39px] mb-[44px] font-bold' text='New Arrivals'/>
        <div className=" flex gap-4">
        <div className="w-[25%] relative group ">
            <Image className='w-full' src={clk} alt='clk.png'/>
            <Button  className='text-white  absolute top-[20px] left-[26px] px-[32px] py-[9px] text-[14px] font-bold bg-black' btnName='New'/>
            <div className="h-[156px] bg-white absolute bottom-0 left-0 w-full invisible delay-100 ease-in-out duration-100 group-hover:visible ">
                <div className=" flex space-x-3  justify-end items-center mr-[30px] pt-[25px] mb-[21px]">
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Wish List</p>
                 <i class="fa-solid fa-heart"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px]  mb-[21px]">
               
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Compare</p>
                    <i class="fa-solid fa-rotate-right"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px] mb-[21px]">
             
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Cart</p>
                    <i class="fa-solid fa-cart-shopping font-bold"></i>
                   
                </div>


            </div>

        </div>
        <div className="w-[25%] relative group ">
            <Image className='w-full' src={imagss} alt='clk.png'/>
            <Button  className='text-white  absolute top-[20px] left-[26px] px-[32px] py-[9px] text-[14px] font-bold bg-black' btnName='New'/>
            <div className="h-[156px] bg-white absolute bottom-0 left-0 w-full invisible transition-all group-hover:visible ">
                <div className=" flex space-x-3  justify-end items-center mr-[30px] pt-[25px] mb-[21px]">
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Wish List</p>
                 <i class="fa-solid fa-heart"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px]  mb-[21px]">
               
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Compare</p>
                    <i class="fa-solid fa-rotate-right"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px] mb-[21px]">
             
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Cart</p>
                    <i class="fa-solid fa-cart-shopping font-bold"></i>
                   
                </div>


            </div>

        </div>
        <div className="w-[25%] relative group ">
            <Image className='w-full' src={watch} alt='clk.png'/>
            <Button  className='text-white  absolute top-[20px] left-[26px] px-[32px] py-[9px] text-[14px] font-bold bg-black' btnName='New'/>
            <div className="h-[156px] bg-white absolute bottom-0 left-0 w-full invisible transition-all group-hover:visible ">
                <div className=" flex space-x-3  justify-end items-center mr-[30px] pt-[25px] mb-[21px]">
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Wish List</p>
                 <i class="fa-solid fa-heart"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px]  mb-[21px]">
               
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Compare</p>
                    <i class="fa-solid fa-rotate-right"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px] mb-[21px]">
             
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Cart</p>
                    <i class="fa-solid fa-cart-shopping font-bold"></i>
                   
                </div>
             
            </div>
           

        </div>
        <div className="w-[25%] relative group ">
            <Image className='w-full' src={pat} alt='clk.png'/>
            <Button  className='text-white  absolute top-[20px] left-[26px] px-[32px] py-[9px] text-[14px] font-bold bg-black' btnName='New'/>
            <div className="h-[156px] bg-white absolute bottom-0 left-0 w-full invisible transition-all group-hover:visible ">
                <div className=" flex space-x-3  justify-end items-center mr-[30px] pt-[25px] mb-[21px]">
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Wish List</p>
                 <i class="fa-solid fa-heart"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px]  mb-[21px]">
               
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Compare</p>
                    <i class="fa-solid fa-rotate-right"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px] mb-[21px]">
             
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Cart</p>
                    <i class="fa-solid fa-cart-shopping font-bold"></i>
                   
                </div>


            </div>

        </div>

        </div>
    </Container>
    <Container className='pb-[50px]'>
        <Text className='text-[39px] mb-[44px] font-bold' text='Our Bestsellers'/>
        <div className=" flex space-x-4">
        <div className="w-[25%] relative group ">
            <Image className='w-full' src={bag} alt='clk.png'/>
            <Button  className='text-white  absolute top-[20px] left-[26px] px-[32px] py-[9px] text-[14px] font-bold bg-black' btnName='New'/>
            <div className="h-[156px] bg-white absolute bottom-0 left-0 w-full invisible delay-100 ease-in-out duration-100 group-hover:visible ">
                <div className=" flex space-x-3  justify-end items-center mr-[30px] pt-[25px] mb-[21px]">
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Wish List</p>
                 <i class="fa-solid fa-heart"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px]  mb-[21px]">
               
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Compare</p>
                    <i class="fa-solid fa-rotate-right"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px] mb-[21px]">
             
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Cart</p>
                    <i class="fa-solid fa-cart-shopping font-bold"></i>
                   
                </div>


            </div>

        </div>
        <div className="w-[25%] relative group ">
            <Image className='w-full' src={bags} alt='clk.png'/>
            <Button  className='text-white  absolute top-[20px] left-[26px] px-[32px] py-[9px] text-[14px] font-bold bg-black' btnName='New'/>
            <div className="h-[156px] bg-white absolute bottom-0 left-0 w-full invisible transition-all group-hover:visible ">
                <div className=" flex space-x-3  justify-end items-center mr-[30px] pt-[25px] mb-[21px]">
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Wish List</p>
                 <i class="fa-solid fa-heart"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px]  mb-[21px]">
               
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Compare</p>
                    <i class="fa-solid fa-rotate-right"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px] mb-[21px]">
             
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Cart</p>
                    <i class="fa-solid fa-cart-shopping font-bold"></i>
                   
                </div>


            </div>

        </div>
        <div className="w-[25%] relative group ">
            <Image className='w-full' src={botol} alt='clk.png'/>
            <Button  className='text-white  absolute top-[20px] left-[26px] px-[32px] py-[9px] text-[14px] font-bold bg-black' btnName='New'/>
            <div className="h-[156px] bg-white absolute bottom-0 left-0 w-full invisible transition-all group-hover:visible ">
                <div className=" flex space-x-3  justify-end items-center mr-[30px] pt-[25px] mb-[21px]">
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Wish List</p>
                 <i class="fa-solid fa-heart"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px]  mb-[21px]">
               
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Compare</p>
                    <i class="fa-solid fa-rotate-right"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px] mb-[21px]">
             
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Cart</p>
                    <i class="fa-solid fa-cart-shopping font-bold"></i>
                   
                </div>
             
            </div>
           

        </div>
        <div className="w-[25%] relative group ">
            <Image className='w-full' src={puta} alt='clk.png'/>
            <Button  className='text-white  absolute top-[20px] left-[26px] px-[32px] py-[9px] text-[14px] font-bold bg-black' btnName='New'/>
            <div className="h-[156px] bg-white absolute bottom-0 left-0 w-full invisible transition-all group-hover:visible ">
                <div className=" flex space-x-3  justify-end items-center mr-[30px] pt-[25px] mb-[21px]">
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Wish List</p>
                 <i class="fa-solid fa-heart"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px]  mb-[21px]">
               
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Compare</p>
                    <i class="fa-solid fa-rotate-right"></i>
                </div>
                <div className=" flex space-x-3  justify-end items-center mr-[30px] mb-[21px]">
             
                    <p className='text-hadding2 text-[16px] hover:font-semibold hover:text-black'>Add to Cart</p>
                    <i class="fa-solid fa-cart-shopping font-bold"></i>
                   
                </div>


            </div>

        </div>
  </div>
    </Container>
    
    </>
  )
}

export default Arrivals