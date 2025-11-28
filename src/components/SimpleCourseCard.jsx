import React from 'react'
import { Star } from 'lucide-react'

function SimpleCourseCard({ course }) {
    return (
        <div className='ring-1 ring-[#A7A7A7] rounded-lg p-1 md:p-4 flex flex-col h-40 md:h-60'>
            <img src={course.image} alt={course.title} className='w-full h-24 md:h-36 object-cover rounded-lg mb-1 md:mb-2' />
            <p className='font-bold text-[10px] md:text-xs mb-1 md:mb-2 text-start'>{course.title}</p>
            <div className='flex flex-row items-center justify-start gap-1 md:gap-2 mt-auto'>
                <div className='flex w-fit flex-row items-center justify-center gap-0.5 md:gap-1 text-[10px] md:text-xs ring-1 ring-[#A7A7A7] px-0.5 rounded-xs'>
                    <Star className='fill-[#EB7F3A] text-[#EB7F3A] w-[8px] h-[8px] md:w-[10px] md:h-[10px]' />
                    <span className='text-[10px] md:text-xs'>{course.rating}</span>
                </div>
                <span className='text-[10px] md:text-xs ring-1 ring-[#A7A7A7] px-0.5 rounded-xs'>{course.courseLength} total hours</span>
            </div>
        </div>
    )
}

export default SimpleCourseCard

