import React from 'react'
import { Star, StarHalf } from 'lucide-react'

function DetailedCourseCard({ course }) {
    const fullStars = Math.floor(course.rating);
    const hasHalfStar = course.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className='ring-1 ring-[#A7A7A7] rounded-lg p-0.5 sm:p-1 md:p-2 grid grid-rows-[auto_auto_auto_auto_auto] h-40 sm:h-52 md:h-60'>
            <img src={course.image} alt={course.title} className='w-full h-24 sm:h-32 md:h-36 object-cover rounded-lg row-span-1' />
            <p className='font-bold text-[10px] sm:text-xs md:text-sm text-start line-clamp-2 row-span-1'>{course.title}</p>
            <p className='font-bold text-[9px] sm:text-[10px] md:text-xs text-start row-span-1'>{course.creator}</p>
            <div className='flex items-center gap-1 sm:gap-1.5 md:gap-2 row-span-1'>
                <span className='text-[10px] sm:text-xs md:text-sm text-[#EB7F3A] font-bold'>{course.rating}</span>
                {Array.from({ length: fullStars }).map((_, i) => (
                    <Star key={`full-${i}`} className='fill-[#EB7F3A] text-[#EB7F3A] w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] md:w-[10px] md:h-[10px]' />
                ))}
                {hasHalfStar && (
                    <StarHalf key="half" className='fill-[#EB7F3A] text-[#EB7F3A] w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] md:w-[10px] md:h-[10px]' />
                )}
                {Array.from({ length: emptyStars }).map((_, i) => (
                    <Star key={`empty-${i}`} className='text-[#EB7F3A] w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] md:w-[10px] md:h-[10px]' />
                ))}
                <span className='text-[9px] sm:text-[10px] md:text-xs'>({course.numberOfRatings.toLocaleString()})</span>
            </div>
            <p className='text-[10px] sm:text-xs md:text-sm font-bold text-start row-span-1 self-end'>₦{course.price.toLocaleString()}</p>
        </div>
    )
}

export default DetailedCourseCard

