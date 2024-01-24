import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import logo from '../assets/logo.png' 

const Futter = () => {
  return (
    <>
    <div className="bg-bg mt-[40px]">
        <Container>
            <div className="flex">
                <div className="w-[20%]">
                    <div className="">
                        <h3 className='text-[16px] font-bold pt-[50px] pb-[17px]'>MENU</h3>
                        <p className='text-sm text-hadding2 pb-[6px]'>Home</p>
                        <p className='text-sm text-hadding2 pb-[6px]'>Journal</p>
                        <p className='text-sm text-hadding2 pb-[6px]'>Contact</p>
                        <p className='text-sm text-hadding2 pb-[6px]'>About</p>
                        <p className='text-sm text-hadding2 pb-[6px]'>Shop</p>
                    </div>
                </div>
                <div className="w-[20%]">
                    <div className="">
                        <h3 className='text-[16px] font-bold pt-[50px] pb-[17px]'>SHOP</h3>
                        <p className='text-sm text-hadding2 pb-[6px]'>Category <span  className=' ml-[5px] text-hadding2'>1</span></p>
                        <p className='text-sm text-hadding2 pb-[6px]'>Category <span  className=' ml-[5px] text-hadding2'>2</span></p>
                        <p className='text-sm text-hadding2 pb-[6px]'>Category <span  className=' ml-[5px] text-hadding2'>3</span></p>
                        <p className='text-sm text-hadding2 pb-[6px]'>Category <span  className=' ml-[5px] text-hadding2'>4</span></p>
                        <p className='text-sm text-hadding2 pb-[6px]'>Category <span  className=' ml-[5px] text-hadding2'>5</span></p>
                       
                    </div>
                </div>
                <div className="w-[20%]">
                    <div className="">
                        <h3 className='text-[16px] font-bold pt-[50px] pb-[17px]'>HELP</h3>
                        <p className='text-sm text-hadding2 pb-[6px]'>Secure Payments</p>
                        <p className='text-sm text-hadding2 pb-[6px]'>Special E-shop</p>
                        <p className='text-sm text-hadding2 pb-[6px]'>Terms & Conditions</p>
                        <p className='text-sm text-hadding2 pb-[6px]'>About</p>
                        <p className='text-sm text-hadding2 pb-[6px]'>Privacy Policy</p>
                    </div>
                </div>
                <div className="w-[20%]">
                    <div className="">
                        <h3 className='text-[17px] font-bold pt-[50px] pb-[17px]'>(052) 611-5711</h3>
                        <h3 className='text-[17px] font-bold  pb-[17px]'>company@domain.com</h3>
                        <p className='text-sm text-hadding2 pb-[6px]'>575 Crescent Ave. Quakertown, PA 18951</p>

                        
                    </div>
                </div>
                <div className="w-[20%]">
                    <div className="pt-[50px]">
                      <Image src={logo} alt='logo.png'/>
                    </div>
                </div>
            </div>
            <div className="flex justify-between pt-[60px]">
                <div className="flex space-x-6">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                </div>
            <p className='text-sm text-hadding2 pb-[6px]'><p className='text-sm text-hadding2 pb-[6px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p></p>
            </div>
        </Container>
    </div>
    
    </>
  )
}

export default Futter