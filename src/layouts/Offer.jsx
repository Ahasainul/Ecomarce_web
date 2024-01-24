import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import cap from '../assets/cap.png'
import tow from '../assets/lam.png'
import three from '../assets/hed.png'
import four from '../assets/sun.png'
import Text from '../components/Text'
import Button from '../components/Button'

const Offer = () => {
    return (
        <>
            <Container className='pb-[50px]'>
                <Text className='text-[39px] font-bold mb-[50px]' text='Special Offers' />
                <div className="flex space-x-5">
                    <div className="w-[25%]">
                        <div className="relative group">
                            <Image className='w-full' src={cap} alt='cap.png' />
                            <Button className='text-white   absolute top-[20px] left-[26px] px-[32px] py-[9px] text-[14px] font-bold bg-black' btnName='New' />
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

                        <div className="flex justify-between mt-[24px] mb-[15px]">
                            <h4 className='text-[20px] font-semibold'>Basic Crew Neck Tee</h4>
                            <p className='text-sm text-hadding2'> $44.00</p>
                        </div>
                        <p className='text-sm text-hadding2'> Black</p>
                    </div>
                    <div className="w-[25%]">
                        <div className="relative group">
                            <Image className='w-full' src={tow} alt='cap.png' />
                            <Button className='text-white  absolute top-[20px] left-[26px] px-[32px] py-[9px] text-[14px] font-bold bg-black' btnName='New' />
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

                        <div className="flex justify-between mt-[24px] mb-[15px]">
                            <h4 className='text-[20px] font-semibold'>Basic Crew Neck Tee</h4>
                            <p className='text-sm text-hadding2'> $44.00</p>
                        </div>
                        <p className='text-sm text-hadding2'> Black</p>
                    </div>
                    <div className="w-[25%]">
                        <div className="relative group">
                            <Image className='w-full' src={three} alt='cap.png' />
                            <Button className='text-white  absolute top-[20px] left-[26px] px-[32px] py-[9px] text-[14px] font-bold bg-black' btnName='New' />
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

                        <div className="flex justify-between mt-[24px] mb-[15px]">
                            <h4 className='text-[20px] font-semibold'>Basic Crew Neck Tee</h4>
                            <p className='text-sm text-hadding2'> $44.00</p>
                        </div>
                        <p className='text-sm text-hadding2'> Black</p>
                    </div>
                    <div className="w-[25%]">
                        <div className="relative group">
                            <Image className='w-full' src={four} alt='cap.png' />
                            <Button className='text-white   absolute top-[20px] left-[26px] px-[32px] py-[9px] text-[14px] font-bold bg-black' btnName='New' />
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

                        <div className="flex justify-between mt-[24px] mb-[15px]">
                            <h4 className='text-[20px] font-semibold'>Basic Crew Neck Tee</h4>
                            <p className='text-sm text-hadding2'> $44.00</p>
                        </div>
                        <p className='text-sm text-hadding2'> Black</p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Offer