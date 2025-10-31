import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import edgex  from '@/assets/edgex.png'
import { ChevronDown, MenuIcon, X,UserRound } from 'lucide-react'
import userImage from '@/assets/user.png'

function Header() {
    const [isOpen , setIsOpen]=useState(0)

    return (
        <div className='flex justify-between items-center p-4 w-full h-30'>
            <div>
                <img src={edgex} alt="logo" className='w-30 h-30' />
            </div>
            <div className="gap-4 hidden md:flex">
                <Button variant="ghost" asChild>
                    <Link to="/">Home</Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link to="/about">About</Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link to="/contact">Contact</Link>
                </Button>
            </div>
            <div className="flex gap-2">
                <div className="flex items-center">
                    <img src={userImage} alt="user" className='w-18 h-18  rounded-full ' />
                    {/* <ChevronDown className='transform rotate-180 w-5 h-5 text-[#1E7B82]' /> */}
                </div>
                <div className="hidden md:flex items-center gap-2">
                     <Button variant="outline" asChild>
                    <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                    <Link to="/register">Register</Link>
                </Button>
                </div>
               
            </div>
        </div>
    )
}

export default Header 