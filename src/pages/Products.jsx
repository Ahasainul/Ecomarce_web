import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import Image from '../components/Image'
import three from '../assets/cap.png'
import Button from '../components/Button'
import imagss from '../assets/byskat.png'
import clk from '../assets/clk.png'
import watch from '../assets/watch.png'
import pat from '../assets/pat.png'
import bag from '../assets/bag.png'
import bags from '../assets/bags.png'
import botol from '../assets/botol.png'
import puta from '../assets/puta.png'
const Products = () => {
    return (
        <>
            <Container className='py-[50px]  '>
                <div className="">
                    <Text className='text-[39px] font-bold' text='Products' />
                    <div className="flex pt-[11px] space-x-2 text-[12px] text-hadding2">
                        <p>Home <i class="fa-solid fa-chevron-right text-[8px]"></i></p>
                        <p>Products</p>
                    </div>
                </div>
                <div className="flex mt-[130px]  space-x-10">

                    <div className="w-[20%] ">
                        <div className="">
                            <Text className='text-[20px] font-bold' text='Shop by Category' />

                            <div className="flex justify-between  mt-[35px] pb-[15px] border-b">
                                <p className='text-sm text-hadding2 pb-[6px]'>Category <span className=' ml-[5px] text-hadding2'>1</span></p>
                                <i class="fa-solid fa-plus text-hadding2 text-sm"></i>
                            </div>
                            <div className="flex justify-between  mt-[15px] pb-[15px]  border-b">
                                <p className='text-sm text-hadding2 pb-[6px]'>Category <span className=' ml-[5px] text-hadding2'>1</span></p>

                            </div>
                            <div className="flex justify-between  mt-[15px] pb-[15px]  border-b">
                                <p className='text-sm text-hadding2 pb-[6px]'>Category <span className=' ml-[5px] text-hadding2'>1</span></p>

                            </div>
                            <div className="flex justify-between  mt-[15px] pb-[15px]  border-b">
                                <p className='text-sm text-hadding2 pb-[6px]'>Category <span className=' ml-[5px] text-hadding2'>1</span></p>
                                <i class="fa-solid fa-plus text-hadding2 text-sm"></i>

                            </div>
                            <div className="flex justify-between  mt-[15px] pb-[15px]  border-b">
                                <p className='text-sm text-hadding2 pb-[6px]'>Category <span className=' ml-[5px] text-hadding2'>1</span></p>

                            </div>

                        </div>
                        <div className="pt-[50px]">
                            <div className=" flex justify-between items-center">
                                <Text className='text-[20px] font-bold' text='Shop by Color' />
                                <i class="fa-solid fa-chevron-up text-[12px]"></i>
                            </div>

                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">
                                <div className="w-[10px] h-[10px] bg-orange-600 rounded-full"></div>
                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>Color 1 </p>

                            </div>
                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">
                                <div className="w-[10px] h-[10px] bg-red-600 rounded-full"></div>
                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>Color 2 </p>

                            </div>
                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">
                                <div className="w-[10px] h-[10px] bg-blue-600 rounded-full"></div>
                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>Color 3 </p>

                            </div>
                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">
                                <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>Color 4 </p>

                            </div>
                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">
                                <div className="w-[10px] h-[10px] bg-teal-500 rounded-full"></div>
                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>Color 5 </p>

                            </div>


                        </div>
                        <div className="pt-[50px]">
                            <div className=" flex justify-between items-center">
                                <Text className='text-[20px] font-bold' text='Shop by Brand' />

                            </div>

                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">

                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>Brand 1  </p>

                            </div>

                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">

                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>Brand 2  </p>

                            </div>

                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">

                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>Brand 3  </p>

                            </div>

                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">

                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>Brand 4  </p>

                            </div>

                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">

                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>Brand 5  </p>

                            </div>



                        </div>
                        <div className="pt-[50px]">
                            <div className=" flex justify-between items-center">
                                <Text className='text-[20px] font-bold' text='Shop by Price' />

                            </div>

                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">

                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>$10.00 - $19.99 </p>

                            </div>

                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">

                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>$40.00 - $69.99 </p>

                            </div>

                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">

                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>$20.00 - $29.99 </p>

                            </div>

                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">

                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>$30.00 - $39.99 </p>

                            </div>

                            <div className="flex items-center space-x-2  mt-[15px] pb-[15px] border-b">

                                <p className='text-sm text-hadding2 pt-1 pb-[6px]'>$40.00 - $69.99  </p>

                            </div>



                        </div>


                    </div>










                    <div className="w-[80%]">
                        <div className="">

                            <div className="flex justify-between">
                                <div className=" space-x-4">
                                    <i class="fa-brands fa-windows p-[10px] text-[20px] hover:bg-black hover:text-white"></i>
                                    <i class="fa-solid fa-list p-[10px] text-[20px] hover:bg-black hover:text-white"></i>
                                </div>
                                <div className="flex">
                                    <div className="flex mr-[40px]">
                                        <p>Sort by:</p>
                                        <div className="ml-[14px]">
                                            <button className='pr-[15px] pl-[15px] hover:bg-white hover:text-black  bg-border2 text-hadding2 border'> Featured <i class="fa-solid fa-caret-down ml-[80px]"></i></button>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <p>Show: </p>
                                        <div className="ml-[14px]">
                                            <button className='pr-[15px] pl-[15px]   hover:bg-white hover:text-black  bg-border2 text-hadding2 border'> Featured <i class="fa-solid fa-caret-down ml-[60px]"></i></button>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>


                        <div className=" pt-[50px] flex space-x-5">
                            <div className="w-[33%]">
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
                            <div className="w-[33%]">
                                <div className="relative group">
                                    <Image className='w-full' src={watch} alt='cap.png' />
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
                            <div className="w-[33%]">
                                <div className="relative group">
                                    <Image className='w-full' src={pat} alt='cap.png' />
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
                        </div>
                        <div className=" pt-[50px] flex space-x-5">
                            <div className="w-[33%]">
                                <div className="relative group">
                                    <Image className='w-full' src={bag} alt='cap.png' />
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
                            <div className="w-[33%]">
                                <div className="relative group">
                                    <Image className='w-full' src={bags} alt='cap.png' />
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
                            <div className="w-[33%]">
                                <div className="relative group">
                                    <Image className='w-full' src={botol} alt='cap.png' />
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
                        </div>
                        <div className=" pt-[50px] flex space-x-5">
                            <div className="w-[33%]">
                                <div className="relative group">
                                    <Image className='w-full' src={puta} alt='cap.png' />
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
                            <div className="w-[33%]">
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
                            <div className="w-[33%]">
                                <div className="relative group">
                                    <Image className='w-full' src={clk} alt='cap.png' />
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
                        </div>
                        <div className="flex mt-[50px] items-center  ">

                            <div className="w-[30%]">
                                <div className="flex gap-2">
                           
                                    <h3 className='py-[9px] px-[15px] hover:bg-black border border-border2 text-hadding2 hover:text-white'>1</h3>
                                    <h3 className='py-[9px] px-[15px] hover:bg-black border border-border2 text-hadding2 hover:text-white'>2</h3>
                                    <h3 className='py-[9px] px-[15px] hover:bg-black border border-border2 text-hadding2 hover:text-white'>3</h3>
                                    <h3 className='py-[9px] px-[15px] hover:bg-black border border-border2 text-hadding2 hover:text-white'>4</h3>
                                    <h3 className='py-[9px] px-[15px] hover:bg-black border border-border2 text-hadding2 hover:text-white'>5</h3>
                                    <h3 className='py-[9px] px-[15px] hover:bg-black border border-border2 text-hadding2 hover:text-white'>...</h3>
                                    <h3 className='py-[9px] px-[15px] hover:bg-black border border-border2 text-hadding2 hover:text-white'>10</h3>
                                </div>


                            </div>


                            <div className="w-[70%] text-end">
                                <p className='text-hadding2  text-sm'>Products from 1 to 12 of 80</p>
                            </div>
                        </div>

                    </div>
                </div>



            </Container>
        </>
    )
}

export default Products