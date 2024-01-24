import React from 'react'
import Container from '../components/Container'
import { FaAngleRight, FaChevronDown, FaPlus } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import Button from '../components/Button';
import Image from '../components/Image';
import helo from '../assets/hed.png'
import sun from '../assets/sun.png'
import lam from '../assets/lam.png'
import watch from '../assets/watch.png'
import { Link } from 'react-router-dom';


const Card = () => {
    return (
        <>

            <Container >
                <div className="flex gap-5 py-[25px]  text-hadding2 ">
                    <div className=" flex gap-3 items-center">
                        <p className='text-[24px]'>Home  </p>
                        <FaAngleRight />
                    </div>
                    <p className='text-[24px]'>Products</p>

                </div>

            </Container>
            <div className=" border-y py-[20px] border-border">
                <Container>
                    <div className="">
                        <div className=" flex justify-between">
                            <div className=" flex items-center ">
                                <h3 className='text-[25px] font-bold'>Product</h3>
                                <div className="flex gap-5 items-center  ml-[54px]">
                                    <h3 className='text-hadding2 text-[16px]'> $88.00</h3>
                                    <h3 className='text-[20px] font-bold'>$44.00</h3>
                                </div>
                            </div>
                            <Button className='py-[12px] text-sm rounded px-[50px] bg-black text-white' btnName='Add to Cart' />
                        </div>
                    </div>
                </Container>
            </div>
            <Container className='py-[12px]'>
                <div className=" flex gap-5 flex-wrap">
                    <div className="w-[48%]">
                        <Image className='w-full' src={helo} alt='head.png' />
                    </div>
                    <div className="w-[48%]">
                        <Image className='w-full' src={sun} alt='head.png' />
                    </div>
                    <div className="w-[48%]">
                        <Image className='w-full' src={lam} alt='head.png' />
                    </div>
                    <div className="w-[48%]">
                        <Image className='w-full' src={watch} alt='head.png' />
                    </div>
                </div>

                <div className=" mt-[20px]">
                    <h3 className='text-[39px] font-bold'>Product</h3>
                    <div className="">
                        <div className="flex items-center mt-[18px]">
                            <CiStar className='text-orange-700 ' />
                            <CiStar className='text-orange-700 ' />
                            <CiStar className='text-orange-700 ' />
                            <CiStar className='text-orange-700 ' />
                            <CiStar className='text-orange-700 ' />
                            <CiStar className='text-orange-700 ' />
                            <div className="">
                                <p className='text-sm text-hadding2 ml-[20px]'>1 Review</p>
                            </div>

                        </div>
                        <div className="flex gap-5 items-center mt-[30px] pb-[20px]">
                            <h3 className='text-hadding2 text-[16px]'> $88.00</h3>
                            <h3 className='text-[20px] font-bold'>$44.00</h3>
                        </div>
                        <div className="  border-t border-border   w-[50%] flex items-center ">
                            <div className="">  <h2 className='text-[16px] font-bold pt-[20px] '>COLOR:</h2></div>
                            <div className=" flex space-x-4 pt-[22px] ml-[30px]">
                                <div className="w-[20px] h-[20px] bg-green-600 rounded-full"></div>
                                <div className="w-[25px] h-[25px] bg-red-600 rounded-full"></div>
                                <div className="w-[20px] h-[20px] bg-orange-600 rounded-full"></div>
                                <div className="w-[20px] h-[20px] bg-yellow-600 rounded-full"></div>
                                <div className="w-[20px] h-[20px] bg-blue-600 rounded-full"></div>
                            </div>
                        </div>
                        <div className="  border-t border-border flex items-center w-[50%] mt-[20px] ">
                            <div className="">  <h2 className='text-[16px] font-bold pt-[20px] '>SIZE:</h2></div>
                            <div className=" flex ml-[70px] text-hadding2  items-center space-x-20 px-[10px] border mt-[22px]">
                                <p>S</p>
                                <FaChevronDown />

                            </div>
                        </div>
                        <div className="   flex items-center w-[50%] mt-[20px] ">
                            <div className="">  <h2 className='text-[16px] font-bold pt-[20px] '>QUANTITY:</h2></div>
                            <div className=" flex ml-[20px] text-hadding2  items-center space-x-10 px-[10px] border mt-[22px]">
                                <p>+</p>
                                <p>1</p>
                                <p className='font-bold'>-</p>
                            </div>
                        </div>
                        <div className="   flex  w-[50%] mt-[20px] ">
                            <div className="">  <h2 className='text-[16px] font-bold pt-[20px] '>STATUS:</h2></div>
                            <div className=" flex ml-[20px] text-hadding2   space-x-10 px-[10px]  mt-[20px]">

                                <p className='font-bold'>In stock</p>
                            </div>

                        </div>
                        <div className=" flex gap-8 mt-[30px]">
                            <Button className='py-[12px] text-sm rounded px-[50px] hover:bg-black hover:text-white border' btnName='Add to Wish List' />
                            <Button className='py-[12px] text-sm rounded px-[50px] hover:bg-black border hover:text-white' btnName='Add to Cart' />
                        </div>
                    </div>
                    <div className="">
                        <div className=" flex items-center justify-between w-[50%] mt-[30px] border-t border-b py-[20px]">
                            <h3 className='text-[25px] font-bold'>FEATURES & DETAILS</h3>
                            <div className="">

                                <FaPlus />
                            </div>
                        </div>
                        <div className=" flex items-center justify-between w-[50%]  border-b py-[20px]">
                            <h3 className='text-[25px] font-bold'>SHIPPING & RETURNS</h3>
                            <div className="">

                                <FaPlus />
                            </div>
                        </div>
                        <div className="w-[50%] mt-[20px]">
                            <p className='text-hadding2 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>


                </div>

                <div className="   flex  w-[50%] mt-[20px] ">
                    <div className="">  <h2 className='text-[16px]  text-hadding2  font-bold pt-[20px] '>Description</h2></div>
                    <div className=" flex ml-[20px]  space-x-10 px-[10px]  mt-[20px]">

                        <p className='font-bold'>Reviews (1)</p>
                    </div>

                </div>
                <div className="mt-[42px] border-b  pb-[16px]">
                    <p className='text-[16px]  text-hadding2 '>1 review for Product</p>
                </div>
                <div className="mt-[23px] flex justify-between  ">
                    <div className="space-x-[30px] flex">
                        <div className="">
                            <h3 className='text-[16px] font-semibold'>John Ford</h3>
                        </div>
                        <div className="flex items-center ">
                            <CiStar className='text-orange-700 ' />
                            <CiStar className='text-orange-700 ' />
                            <CiStar className='text-orange-700 ' />
                            <CiStar className='text-orange-700 ' />
                            <CiStar className='text-orange-700 ' />
                            <CiStar className='text-orange-700 ' />


                        </div>
                    </div>
                    <div className="">
                        <p className='text-hadding2 text-sm'>6 months ago</p>
                    </div>
                </div>
                <div className=" border-b pb-[15px]">
                    <p className='text-[17px] leading-[30px] text-hadding2 mt-[15px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="">
                    <h1 className='text-[20px] font-bold mt-[50px]'>Add a Review</h1>
                    <div className=" pb-[15px] border-b w-1/2">
                    <h3 className='text-[16px] font-bold mt-[48px]'> Name</h3>
                    <input className='mt-[10px]' type="text" placeholder='Your name here' />
                    </div>
                    <div className=" pb-[15px] border-b w-1/2">
                    <h3 className='text-[16px] font-bold mt-[48px]'> Email</h3>
                    <input className='mt-[10px]' type="email" placeholder='Your Email here' />
                    </div>
                    <div className=" pb-[15px] border-b w-1/2">
                    <h3 className='text-[16px] font-bold mt-[48px]'> Review</h3>
                    <input className='mt-[10px] w-full h-[80px]' type="text" placeholder='Your review here' />
                    </div>
                 <Button  className='bg-black px-[60px] py-[10px] mt-[20px] text-white font-semibold'  btnName={'Post'}/>
                </div>


       

            </Container>


        </>
    )
}

export default Card