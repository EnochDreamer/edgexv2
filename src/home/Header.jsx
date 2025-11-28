import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import edgex from '@/assets/edgex.png'
import { ChevronDown, MenuIcon, X, UserRound } from 'lucide-react'
import userImage from '@/assets/user.png'

function Header() {
    const [isOpen, setIsOpen] = useState(0)

    return (
        <div className='flex justify-between items-center p-4 sm:p-10 md:p-20 w-full h-30'>
            <div>
                <img src={edgex} alt="logo" className='w-35 h-30'/>
            </div>
            <div className="gap-6 hidden sm:flex sm:text-[.725rem] md:text-[.9rem] font-bold">
                <NavLink to="/" className={({isActive}) => `transition ease-in  hover:border-b-2 hover:border-[#1E7B82] ${isActive ? 'border-b-2 border-[#1E7B82]' : ''}`}>
                    Home
                </NavLink>
                <NavLink to="/courses" className={({isActive}) => `transition ease-in  hover:border-b-2 hover:border-[#1E7B82] ${isActive ? 'border-b-2 border-[#1E7B82]' : ''}`}>
                    Courses
                </NavLink>
                <NavLink to="/about" className={({isActive}) => `transition ease-in  hover:border-b-2 hover:border-[#1E7B82] ${isActive ? 'border-b-2 border-[#1E7B82]' : ''}`}>
                    About Us
                </NavLink>
                <NavLink to="/contact" className={({isActive}) => `transition ease-in  hover:border-b-2 hover:border-[#1E7B82] ${isActive ? 'border-b-2 border-[#1E7B82]' : ''}`}>
                    Subscription
                </NavLink>
            </div>
            <div className="flex gap-2">
                <div className="flex items-center sm:hidden">
                    <img src={userImage} alt="user" className='w-18 h-18  rounded-full ' />
                    {/* <ChevronDown className='transform rotate-180 w-5 h-5 text-[#1E7B82]' /> */}
                </div>
                <div className="hidden sm:flex items-center gap-2">
                    <Button variant="outline" asChild className={'rounded-2xl text-[#1E7B82] hover:text-[#1E7B82] border-[#1E7B82]'}>
                        <Link to="/login">Login</Link>
                    </Button>
                    <Button asChild className={'bg-[#1E7B82] text-white hover:bg-[#155A5E] rounded-2xl'}>
                        <Link to="/register">Register</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Header