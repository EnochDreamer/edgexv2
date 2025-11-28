import React from 'react'
import course1 from '@/assets/course1.jpg'
import course2 from '@/assets/course2.jpg'
import course3 from '@/assets/course3.jpg'
import course4 from '@/assets/course4.png'
import SimpleCourseGrid from '@/components/SimpleCourseGrid'
import DetailedCourseGrid from '@/components/DetailedCourseGrid'

function Body() {
    const coursesData = [
        {
            id: 1,
            image: course1,
            title: "Introduction to Web Development",
            rating: 4.5,
            courseLength: "12",
            numberOfRatings: "12k"
        },
        {
            id: 2,
            image: course2,
            title: "Advanced JavaScript Mastery",
            rating: 4.8,
            courseLength: "18",
            numberOfRatings: "21k"
        },
        {
            id: 3,
            image: course3,
            title: "React & Modern Frontend",
            rating: 4.9,
            courseLength: "15",
            numberOfRatings: "18k"
        }
    ];

    const userCoursesData = [
        {
            id: 1,
            image: course4,
            title: "Introduction to Web Development",
            price: 15000,
            creator: "John Doe",
            rating: 4.5,
            numberOfRatings: 1250
        },
        {
            id: 2,
            image: course4,
            title: "Advanced JavaScript Mastery",
            price: 25000,
            creator: "Jane Smith",
            rating: 4.8,
            numberOfRatings: 2100
        },
        {
            id: 3,
            image: course4,
            title: "React & Modern Frontend",
            price: 20000,
            creator: "Mike Johnson",
            rating: 4.9,
            numberOfRatings: 1850
        },
        {
            id: 4,
            image: course4,
            title: "Node.js Backend Development",
            price: 30000,
            creator: "Sarah Williams",
            rating: 4.7,
            numberOfRatings: 3200
        },
        {
            id: 5,
            image: course4,
            title: "Python for Data Science",
            price: 28000,
            creator: "David Chen",
            rating: 4.6,
            numberOfRatings: 2750
        },
        {
            id: 6,
            image: course4,
            title: "UI/UX Design Fundamentals",
            price: 22000,
            creator: "Emily Rodriguez",
            rating: 4.8,
            numberOfRatings: 1950
        },

    ];

    return (
        <div className='mx-4 sm:mx-10 md:mx-20 mt-6'>
            <SimpleCourseGrid 
                courses={coursesData}
                title={<p>Ready to kick-start your<br />career journey?</p>}
                description="Get the skills and real-world experience required by employers from tutors with years of experience under their belts."
            />

            <DetailedCourseGrid 
                courses={userCoursesData}
                title={<p>We've got the tech skills you desire,<br /> right here!</p>}
                description="From technical subjects to critical skills, edgeX supports your growth journey."
            />
            <SimpleCourseGrid 
                courses={coursesData}
                title={<p className='flex flex-start'>Suggestions for you</p>}
                description="Due and crafted, tailored for you to give you a smooth learning experience."
            />
            
        </div>
    )
}

export default Body

