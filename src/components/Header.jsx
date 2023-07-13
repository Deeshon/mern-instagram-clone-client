import React from 'react'
import { Outlet } from 'react-router'
import {MdDarkMode, MdOutlineMessage} from 'react-icons/md'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'
import {HiMenu} from 'react-icons/hi'


const Header = () => {
  return (
    <main>
        <Navbar />
        <Outlet />
    </main>
  )
}

const Navbar = () => {
    return (
        <div className='bg-[#181818] text-white w-full h-24 flex items-center'>
            <div className='flex items-center justify-between w-[1240px] md:mx-auto mx-10'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold text-[#46c0dc] mr-5 '>Sociopedia.</h1>
                    <input className='bg-[#2d2d2d] rounded px-2 text-xs w-44 h-6 md:flex hidden' type='text' placeholder={`🔍︎ Search...`}></input>
                </div>
                <div className='flex justify-between md:w-72 items-center'>
                    <div className='md:flex hidden justify-between w-[140px]'>
                        <MdDarkMode size={22} />
                        <MdOutlineMessage  size={22} />
                        <IoMdNotificationsOutline size={22} />
                        <AiOutlineQuestionCircle size={22} />
                    </div>
                    <div>
                        <select className='bg-[#2d2d2d] text-sm p-2 rounded' name="profile">
                            <option className='text-sm h-12'>Fake Man</option>
                            <option className='text-sm'>Log out</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header