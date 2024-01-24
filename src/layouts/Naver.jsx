import Container from '../components/Container'
import List from '../components/List'
import Image from '../components/Image'
import React from 'react'
import Flex from '../components/Flex'
import Text from '../components/Text'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


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

                            <List className='list-none text-hadding2 text-sm hover:font-bold  active:hover:text-hadding    mr-[40px]'   ManuName='Home' />
                            <List className='list-none text-hadding2 text-sm hover:font-bold hover:text-hadding  pr-[40px]' ManuName='Shop' />
                            <List className='list-none text-hadding2 text-sm hover:font-bold hover:text-hadding  mr-[40px]' ManuName='About' />
                            <List className='list-none text-hadding2 text-sm hover:font-bold hover:text-hadding   mr-[40px]' ManuName='Contacts' />
                            <List className='list-none text-hadding2 text-sm hover:font-bold hover:text-hadding  mr-[40px]' ManuName='Journal' />

                        </Flex>
                    </div>
                </div>

            </Container>
            <div className="bg-bg py-[20px] border border-border">
                <Container className=''>
                    <Flex>
                        <div className="w-[20%] flex items-center ">
                        <i class="fa-solid fa-bars  "></i>
                        <Text className=' pl-2 text-sm text-hadding'  text={'Shop by Category'} />
                        </div>
                        <div className="w-[60%] flex justify-center ">
                        <input type="search" className='w-[600px] py-[16px] pl-[8px]' placeholder='Search Products' />
                        <i class="fa-solid fa-magnifying-glass relative  top-[20px] left-[-50px] font-bold"></i>
                        </div>
                        <div className="w-[20%]  flex justify-end items-center gap-[40px] ">
                        <div className="flex gap-2">
                        <i class="fa-solid fa-user"></i>
                        <i class="fa-solid fa-caret-down"></i>
                        </div>
                        <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </Flex>
                    
                </Container>
            </div>

        </>
    )
}

export default Naver