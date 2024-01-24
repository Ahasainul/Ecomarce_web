import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Image from '../components/Image';
import clock from '../assets/clk.png'
import jar from '../assets/jar.png'
import Button from '../components/Button';

const Brands = () => {
    return (
        <>

            <Container>
                <div className="">
                    <Text className='font-bold text-[49px] pb-[11px]' text={'About'} />
                    <div className=" flex space-x-3">
                        <p className='flex items-center text-sm text-hadding2 space-x-2'>Home   <FaChevronRight className='ml-[8px]' /> </p>

                        <p className='text-sm text-hadding2'>About</p>
                    </div>
                </div>
                <div className="flex mt-[110px] gap-5">

                    <div className="w-1/2 relative">
                        <Link>
                            <Image className='w-full' src={clock} alt='clk.png' />
                        </Link>
                        <Button className='text-base font-bold px-[97px] bg-black py-[28px] absolute bottom-12 left-[50%] translate-x-[-50%] text-white' btnName={'Our Brands'} />
                    </div>
                    <div className="w-1/2 relative">
                        <Link>
                            <Image className='w-full' src={jar} alt='jar.png' />
                        </Link>
                        <Button className='text-base font-bold px-[97px] bg-black py-[28px] absolute bottom-12 left-[50%] translate-x-[-50%] text-white' btnName={'Our Brands'} />
                    </div>

                </div>
                <div className="mt-[112px] pb-[118px]">
                    <h3 className='text-[40px] '>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h3>
                </div>
                <div className="flex gap-8">
                    <div className="w-1/3">
                        <h2 className='text-[25px] pb-[11px] font-bold'>Our Vision</h2>
                        <p className='text-base text-hadding2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="w-1/3">
                        <h2 className='text-[25px] pb-[11px] font-bold'>Our Story</h2>
                        <p className='text-base text-hadding2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                    </div>
                    <div className="w-1/3">
                        <h2 className='text-[25px] font-bold pb-[11px]'>Our Brands</h2>
                        <p className='text-base text-hadding2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                </div>


            </Container>

        </>
    )
}

export default Brands