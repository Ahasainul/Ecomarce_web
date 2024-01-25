import Container from '../components/Container'
import List from '../components/List'
import Image from '../components/Image'
import React from 'react'
import Flex from '../components/Flex'
import Text from '../components/Text'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { FaUser,FaCaretDown, } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const Naver = () => {
    return (
        <>
            <Container>
                <div className="py-[30px] flex">

                    <div className="w-[40%]">
                        <Link to='/'>   <Image src={Logo} alt='logo.png' /></Link>
                    </div>
                    <div className="w-[60%]">

                        <Flex>

                            <Link to='/'>  <List className='list-none text-hadding2 text-sm hover:font-bold  active:hover:text-hadding    mr-[40px]' ManuName='Home' /></Link>
                            <Link to='/About'>  <List className='list-none text-hadding2 text-sm hover:font-bold hover:text-hadding  pr-[40px]' ManuName='Shop' /></Link>
                            <Link to='/Card'>  <List className='list-none text-hadding2 text-sm hover:font-bold hover:text-hadding  mr-[40px]' ManuName='About' /></Link>
                            <Link to='/Contacts'>  <List className='list-none text-hadding2 text-sm hover:font-bold hover:text-hadding   mr-[40px]' ManuName='Contacts' /></Link>
                          <Link to='/shop'>  <List className='list-none text-hadding2 text-sm hover:font-bold hover:text-hadding  mr-[40px]' ManuName='Journal' /></Link>

                        </Flex>
                    </div>
                </div>

            </Container>
            <div className="bg-bg py-[20px] border border-border">
                <Container className=''>
                    <Flex>
                        <div className="w-[20%] flex items-center ">
                           <Icon/>
                            <Text className=' pl-2 text-sm text-hadding' text={'Shop by Category'} />
                        </div>
                        <div className="w-[60%] flex justify-center ">
                            <input type="search" className='w-[600px] py-[16px] pl-[8px]' placeholder='Search Products' />
                            <i class="fa-solid fa-magnifying-glass relative  top-[20px] left-[-50px] font-bold"></i>
                        </div>
                        <div className="w-[20%]  flex justify-end items-center gap-[40px] ">
                            <div className="flex gap-2">
                            <FaUser />
                            <FaCaretDown />
                            </div>
                          <Link to='/About'>  <FaCartShopping /></Link>
                        </div>
                    </Flex>

                </Container>
            </div>

        </>
    )
}

export default Naver