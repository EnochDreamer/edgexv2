import React from 'react'
import { Bell } from 'lucide-react'

function Header() {
    return (
        <div className='mx-10'>
            <div className='flex justify-between'>
                <h1 className='text-[#1E7B82] font-bold text-xl'>Courses</h1>
                <div className='relative'>
                    <div className='bg-[#474256] rounded-full size-8 flex justify-center items-center'>
                        <Bell className='fill-white text-white size-5' />
                    </div>
                    <div className='bg-red-600 text-white rounded-full size-3 text-[.5rem] absolute top-0 right-0 font-bold'>2</div>
                </div>
            </div>
          
        </div>

    )
}

export default Header