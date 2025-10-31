import { House, ArrowDownAZ, CircleDollarSign, CircleUserRound } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'   

function Footer() {
  return (
    <div className='sm:hidden px-2 pb-2 w-full fixed bottom-0 bg-white'>
      <hr className='border-t border-gray-300 mb-2' />
      <div className='flex justify-between items-center'>
        <NavLink to="/" className='flex flex-col items-center gap-1'>
          {({ isActive }) => (
            <div className='flex flex-col items-center gap-1'>
              <div className={`size-8 flex items-center justify-center rounded-full ${isActive ? 'bg-[#1E7B82]' : ''}`}>
                <House className={`w-8 h-5 ${isActive ? 'text-white' : ''}`} />
              </div>
              <p className="text-sm">Home</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/courses" className='flex flex-col items-center gap-1'>
          {({ isActive }) => (
            <div className='flex flex-col items-center gap-1'>
              <div className={`size-8 flex items-center justify-center rounded-full ${isActive ? 'bg-[#1E7B82]' : ''}`}>
                <ArrowDownAZ className={`w-8 h-5 ${isActive ? 'text-white' : ''}`} />
              </div>
              <p className="text-sm">Courses</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/subscriptions" className='flex flex-col items-center gap-1'>
          {({ isActive }) => (
            <div className='flex flex-col items-center gap-1'>
              <div className={`size-8 flex items-center justify-center rounded-full ${isActive ? 'bg-[#1E7B82]' : ''}`}>
                <CircleDollarSign className={`w-8 h-5 ${isActive ? 'text-white' : ''}`} />
              </div>
              <p className="text-sm">Subscriptions</p>
            </div>
          )}
        </NavLink>
        <NavLink to="/profile" className='flex flex-col items-center gap-1'>
          {({ isActive }) => (
            <div className='flex flex-col items-center gap-1'>
              <div className={`size-8 flex items-center justify-center rounded-full ${isActive ? 'bg-[#1E7B82]' : ''}`}>
                <CircleUserRound className={`w-8 h-5 ${isActive ? 'text-white' : ''}`} />
              </div>
              <p className="text-sm">Profile</p>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  )
}

export default Footer