import React from 'react'
import DetailedCourseCard from './DetailedCourseCard'

function DetailedCourseGrid({ courses, title, description, className = '' }) {
    return (
        <div className={className}>
            {title && (
                <div className='mt-4'>
                    {typeof title === 'string' ? (
                        <p className='text-center font-bold'>{title}</p>
                    ) : (
                        <div className='text-center font-bold'>{title}</div>
                    )}
                    {description && <p className='text-xs mt-2 text-center'>{description}</p>}
                </div>
            )}
            <div className='mt-4 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4'>
                {courses.map((course) => (
                    <DetailedCourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    )
}

export default DetailedCourseGrid

