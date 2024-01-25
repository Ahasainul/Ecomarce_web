import React from 'react'
import Container from '../components/Container'
import { FaAngleRight } from "react-icons/fa";
import Button from '../components/Button';


const Map = () => {
    return (
        <div>
            <Container className='py-[112px]'>
                <div className="">
                        <h2 className='text-[49px] font-bold'>Contacts</h2>
                </div>
                <div className="flex mt-[12px] gap-4">
                    <p className='text-hadding2 text-[14px] flex items-center'>Home  <FaAngleRight className='ml-[8px] mt-[3px]' /></p>
                    <p className='text-hadding2 text-[14px]'>Contacts</p>
                </div>
                <div className="">
                <h2 className='text-[39px] pt-[120px] font-bold'>Fill up a Form</h2>
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
                    <h3 className='text-[16px] font-bold mt-[48px]'> Message</h3>
                    <input className='mt-[10px] w-full h-[80px]' type="text" placeholder='Your Message here' />
                    </div>
                 <Button  className='bg-black px-[60px] py-[10px] mt-[20px] text-white font-semibold'  btnName={'Post'}/>
                </div>
               <div className="mt-[112px]">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29211.971993415027!2d90.36216803391846!3d23.765327916085198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f3f608843b%3A0xf2c71ff392721324!2sLiberation%20War%20Museum!5e0!3m2!1sen!2sbd!4v1706167194385!5m2!1sen!2sbd" width="100%" height="570" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>
                </div>
            </Container>




        </div>
    )
}

export default Map