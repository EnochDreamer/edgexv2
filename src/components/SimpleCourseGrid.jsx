import React from 'react'
import SimpleCourseCard from './SimpleCourseCard'

function SimpleCourseGrid({ courses, title, description, className = '' }) {
    return (
        <div className={className}>
            {title && (
                <div className='mt-6'>
                    {typeof title === 'string' ? (
                        <p className='text-center font-bold'>{title}</p>
                    ) : (
                        <div className='text-center font-bold'>{title}</div>
                    )}
                    {description && <p className='text-xs mt-2 text-center'>{description}</p>}
                </div>
            )}
            <div className='mt-6 grid grid-cols-3 gap-2 md:gap-4'>
                {courses.map((course) => (
                    <SimpleCourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    )
}

export default SimpleCourseGrid

