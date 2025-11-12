import React from 'react'
import { Button } from '@/components/ui/button'
import homeHero from '../assets/homeHero.png'
import { Play, Star, StarHalf, Users, DollarSign, Stars, CircleArrowRight, MoveRight, ChevronRight, Linkedin, Instagram, Facebook } from 'lucide-react';
import femaleModel from '@/assets/femaleModel.jpg'
import maleModel from '@/assets/maleModel.jpg'
import border1 from '@/assets/border1.png'
import course1 from '@/assets/course1.jpg'
import course2 from '@/assets/course2.jpg'
import course3 from '@/assets/course3.jpg'
import course4 from '@/assets/course4.png'
import edgex from '@/assets/edgex.png'


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

    ];

    return (
        <div className='mx-4'>
            <div >
                <div className="flex flex-col items-center">
                    <div className='text-center text-2xl font-bold mb-3'>
                        <h3>Empowering</h3>
                        <h3>Education with</h3>
                        <h3>Technology</h3>
                    </div>
                    <div className='mb-3 '>
                        <Button className='flex items-center gap-2 bg-[#1E7B82] text-white'>Join our Community <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="40" height="40" rx="20" fill="white" />
                            <path d="M26.3301 13.5291C26.5123 13.4633 26.7165 13.5093 26.8535 13.6462C26.9905 13.7832 27.0364 13.9874 26.9707 14.1697L22.6367 26.1697C22.6321 26.1825 22.6268 26.1954 22.6211 26.2078C22.552 26.3584 22.4412 26.4863 22.3018 26.5759C22.1621 26.6656 21.999 26.7136 21.833 26.7136C21.6672 26.7136 21.5048 26.6655 21.3652 26.5759C21.2304 26.4893 21.1232 26.3666 21.0537 26.2224L21.0527 26.2234L18.7939 21.7048L14.2764 19.447L14.2773 19.4451C14.1333 19.3756 14.0104 19.2693 13.9238 19.1345C13.8567 19.0298 13.8125 18.912 13.7949 18.7898L13.7861 18.6667L13.7949 18.5427C13.8126 18.4206 13.8567 18.3026 13.9238 18.198C14.0134 18.0586 14.1414 17.9477 14.292 17.8787L14.3301 17.863L26.3301 13.5291ZM19.7744 21.4314L21.8125 25.5066L25.2676 15.9382L19.7744 21.4314ZM14.9922 18.6863L19.0674 20.7244L24.5605 15.2312L14.9922 18.6863Z" fill="#1E7B82" />
                        </svg>
                        </Button>
                    </div>
                </div>
                <div className='relative bg-[#B2DFDB] rounded-2xl overflow-hidden'>
                    <img src={homeHero} alt='home-hero' className='max-w-full w-full h-auto object-cover block' />
                    <div className=' absolute top-0 left-0'>
                        <div className='flex flex-row'>
                            <div className='bg-white p-3 rounded-br-2xl'>
                                <Button className='bg-[#1E7B82] '>
                                    Explore Our Courses
                                </Button>
                            </div>

                            <div className='w-10 h-10 rounded-tl-md border-t-[.5px] border-l-[.55px] border-r-[10px] border-b-[10px] border-t-white border-l-white border-r-transparent border-b-transparent'>

                            </div>
                        </div>
                    </div>
                    <div className='bg-white  w-1/2 max-w-[50%] h-15 absolute bottom-0 right-0  rounded-tl-2xl p-4 flex items-center gap-4'>
                        <Button className='bg-[#1E7B82]'>
                            <Play className='w-5 h-5 fill-white' />
                            Watch Video
                        </Button>
                    </div>
                </div>
                <div className='w-4/5 max-w-[90%] h-40 ring-1 ring-[#A7A7A7]  mx-auto mt-10 grid grid-rows-5 rounded-lg pt-1'>
                    <div className='flex row-span-3 justify-around items-center'>
                        <div className='bg-[#34ACB4] h-fit flex justify-center p-1 rounded-full'>
                            <div className='ring-1 ring-white w-18 h-18 flex items-center justify-center rounded-full'>
                                20+
                            </div>
                        </div>

                        <div className='bg-[#34ACB4] h-fit w-fit  rounded-full flex items-center justify-center p-1'>
                            <img src={femaleModel} className='rounded-full w-12 h-12 ring-1 ring-white max-w-full object-cover' alt="femalemodel" />
                        </div>
                        <img src={maleModel} className='rounded-full ring-1 ring-[#34ACB4] w-12 h-12 max-w-full object-cover' alt="malemodel" />
                    </div>
                    <div className='row-span-1 flex justify-center items-center gap-1'>
                        <Star className='fill-[#34ACB4] text-[#34ACB4] w-4 h-4' />
                        <Star className='fill-[#34ACB4] text-[#34ACB4] w-4 h-4' />
                        <Star className='fill-[#34ACB4] text-[#34ACB4] w-4 h-4' />
                        <Star className='fill-[#34ACB4] text-[#34ACB4] w-4 h-4' />
                        <Star className='fill-[#34ACB4] text-[#34ACB4] w-4 h-4' />
                        <span className='font-bold'>(5.0)</span>
                    </div>
                    <div className='row-span-1 flex justify-around items-center'>
                        <p>JANE COOPER</p>
                    </div>

                </div>

            </div>
            <div className="my-10 rounded-2xl w-full mx-auto bg-[#34ACB4] h-32 flex flex-row items-center justify-center text-white gap-4 px-1">
                <div className='text-center grid grid-rows-2'>
                    <p className='text-xl font-bold mb-1'>20K+</p>
                    <p className='text-xs'>Registered<br />Students</p>
                </div>
                <div className='text-center grid grid-rows-2'>
                    <p className='text-xl font-bold mb-1'>7K+</p>
                    <p className='text-xs'>Available<br />Courses/Subjects</p>
                </div>
                <div className='text-center grid grid-rows-2'>
                    <p className='text-xl font-bold mb-1'>3K+</p>
                    <p className='text-xs'>Certified Tutors</p>
                </div>
                <div className='text-center grid grid-rows-2'>
                    <p className='text-xl font-bold mb-1'>12K+</p>
                    <p className='text-xs'>Accredited Quizzes</p>
                </div>
            </div>
            <div>
                <p className='text-[#FD8B3A] text-center font-bold'>OUR SERVICES</p>
                <p className='text-2xl '>Online tutoring services <br />
                    at<span className='inline-block relative px-2 pb-2 text-[#1E7B82] font-extrabold' style={{
                        backgroundImage: `url(${border1})`,
                        backgroundSize: '120% 4px',
                        backgroundPosition: 'bottom',
                        backgroundRepeat: 'no-repeat'
                    }}>EdgeX</span></p>
                <div className='mt-6 grid grid-cols-3 gap-4 text-start'>
                    <div className='bg-[#F0C933] rounded-lg w-fit p-4'>
                        <svg width="18" height="18" viewBox="0 0 8 8" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_44_6320)">
                                <path d="M6.59384 4.69559C6.46788 4.54031 6.3087 4.41524 6.12803 4.32958C5.94736 4.24392 5.74979 4.19984 5.54984 4.20059C5.24312 4.20026 4.94556 4.30509 4.70677 4.49759C4.54792 4.62315 4.41973 4.78321 4.33191 4.96565C4.24408 5.14809 4.19892 5.34812 4.19984 5.55059C4.19984 5.97359 4.39177 6.34844 4.69484 6.59459C4.93534 6.79334 5.23785 6.90161 5.54984 6.90059C5.89184 6.90059 6.20077 6.77144 6.44084 6.56444C6.71984 6.31559 6.89984 5.95559 6.89984 5.55059C6.89984 5.22659 6.78577 4.92644 6.59384 4.69559ZM5.85877 5.63452C5.85877 5.71259 5.81669 5.78752 5.75077 5.82644L5.32777 6.07844C5.29245 6.09979 5.25203 6.11121 5.21077 6.11152C5.13584 6.11152 5.06069 6.07259 5.01884 6.00352C5.00357 5.97815 4.99347 5.95001 4.98912 5.92072C4.98477 5.89143 4.98626 5.86157 4.9935 5.83286C5.00073 5.80415 5.01357 5.77715 5.03128 5.75342C5.049 5.72969 5.07122 5.7097 5.09669 5.69459L5.40877 5.50852V5.13052C5.40877 5.00744 5.51069 4.90552 5.63377 4.90552C5.75684 4.90552 5.85877 5.00744 5.85877 5.13052V5.63452ZM4.41877 1.75844V0.750444C4.41895 0.730696 4.41519 0.711111 4.40771 0.692834C4.40023 0.674557 4.38918 0.657956 4.3752 0.644002C4.36123 0.630048 4.34461 0.619022 4.32632 0.611568C4.30803 0.604115 4.28844 0.600384 4.26869 0.600594H2.93062C2.91087 0.600384 2.89128 0.604115 2.87299 0.611568C2.8547 0.619022 2.83808 0.630048 2.82411 0.644002C2.81014 0.657956 2.79908 0.674557 2.7916 0.692834C2.78412 0.711111 2.78036 0.730696 2.78054 0.750444V1.75844C2.78033 1.77821 2.78407 1.79782 2.79154 1.81612C2.799 1.83443 2.81005 1.85106 2.82403 1.86503C2.83801 1.87901 2.85464 1.89006 2.87294 1.89752C2.89124 1.90499 2.91085 1.90873 2.93062 1.90852H4.26869C4.28844 1.9087 4.30803 1.90494 4.3263 1.89746C4.34458 1.88998 4.36118 1.87893 4.37514 1.86495C4.38909 1.85098 4.40012 1.83436 4.40757 1.81607C4.41502 1.79778 4.41875 1.77819 4.41854 1.75844H4.41877ZM2.17417 0.606669C1.40602 0.654819 0.881318 1.05082 0.686018 1.71074C0.656093 1.80974 0.728093 1.90874 0.830018 1.90874H2.18002C2.19978 1.90896 2.21939 1.90522 2.2377 1.89775C2.256 1.89028 2.27263 1.87924 2.28661 1.86526C2.30058 1.85128 2.31163 1.83465 2.3191 1.81635C2.32657 1.79805 2.3303 1.77844 2.33009 1.75867V0.756744C2.33009 0.672819 2.25809 0.600819 2.17417 0.606669ZM5.02469 0.603294C5.79262 0.651219 6.31777 1.04722 6.51262 1.70714C6.51981 1.72985 6.52156 1.75393 6.51774 1.77745C6.51392 1.80096 6.50463 1.82324 6.49062 1.84251C6.47661 1.86177 6.45827 1.87748 6.43708 1.88836C6.41589 1.89924 6.39244 1.90499 6.36862 1.90514H5.01862C4.99889 1.90532 4.97932 1.90157 4.96106 1.8941C4.9428 1.88664 4.92621 1.87561 4.91226 1.86166C4.89831 1.84771 4.88727 1.83111 4.87981 1.81285C4.87234 1.79459 4.86859 1.77502 4.86877 1.75529V0.753144C4.86877 0.669219 4.94077 0.597219 5.02469 0.603294ZM6.59969 2.50837V3.82237C6.59969 3.93329 6.48269 4.00529 6.38369 3.95444C6.0402 3.77538 5.64819 3.71164 5.26566 3.77267C4.88314 3.83369 4.53042 4.01624 4.25969 4.29329C3.93058 4.62868 3.74725 5.08048 3.74962 5.55037C3.74962 5.79337 3.84547 6.10544 3.96562 6.36644C4.01354 6.47129 3.94154 6.60044 3.82454 6.60044H2.34247C2.11357 6.60047 1.8869 6.55541 1.67542 6.46782C1.46394 6.38023 1.27179 6.25183 1.10994 6.08996C0.948094 5.92809 0.819722 5.73592 0.73216 5.52443C0.644597 5.31294 0.599559 5.08627 0.599618 4.85737V2.50837C0.599408 2.48862 0.603138 2.46903 0.610592 2.45074C0.618045 2.43245 0.629071 2.41584 0.643025 2.40186C0.656979 2.38789 0.67358 2.37684 0.691857 2.36935C0.710134 2.36187 0.72972 2.35811 0.749468 2.35829H6.44962C6.46937 2.35811 6.48895 2.36187 6.50723 2.36935C6.52551 2.37684 6.54211 2.38789 6.55606 2.40186C6.57001 2.41584 6.58104 2.43245 6.58849 2.45074C6.59595 2.46903 6.59968 2.48862 6.59947 2.50837H6.59969Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_44_6320">
                                    <rect width="7.2" height="7.2" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <div className='bg-[#FEA7C7] rounded-lg w-fit p-4'>
                        <Users size={18} strokeWidth={1.75} className='text-white' />
                    </div>
                    <div className='bg-[#A7CF4B] rounded-lg w-fit p-4'>
                        <DollarSign size={18} strokeWidth={1.75} className='text-white bg-white-200' />
                    </div>
                    <p className='font-bold text-md'>24/7 Availability</p>
                    <p className='font-bold text-md'>One-on-One Teaching</p>
                    <p className='font-bold text-md'>Affordable Prices</p>
                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>

                </div>

            </div>
            <div className='mt-6'>
                <p className='text-center font-bold text-2xl'>What is <span className='text-[#FD8B3A] font-bold '>EdgeX</span></p>
                <p className='text-center text-sm mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <div className='mt-6 grid grid-cols-3 gap-2 md:gap-4'>
                    {coursesData.map((course) => (
                        <div key={course.id} className='ring-1 ring-[#A7A7A7] rounded-lg p-1 md:p-4 flex flex-col h-40 md:h-60'>
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
                    ))}
                </div>


            </div>
            <div className='mt-6'>
                <p className=' font-bold text-[#FD8B3A] text-center'>COURSES</p>
                <p>Select among our <span className=' font-bold'>available subjects</span> <br />
                    or courses relating to  <span className=' font-bold'>your preference</span></p>
                <div className='mt-6 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4'>
                    {userCoursesData.map((course) => (
                        <div key={course.id} className='ring-1 ring-[#A7A7A7] rounded-lg p-0.5 sm:p-1 md:p-2 grid grid-rows-[auto_auto_auto_auto_auto] h-40 sm:h-52 md:h-60'>
                            <img src={course.image} alt={course.title} className='w-full h-24 sm:h-32 md:h-36 object-cover rounded-lg row-span-1' />
                            <p className='font-bold text-[10px] sm:text-xs md:text-sm text-start line-clamp-2 row-span-1'>{course.title}</p>
                            <p className='font-bold text-[9px] sm:text-[10px] md:text-xs text-start row-span-1'>{course.creator}</p>
                            <div className='flex items-center gap-1 sm:gap-1.5 md:gap-2 row-span-1'>
                                <span className='text-[10px] sm:text-xs md:text-sm text-[#EB7F3A] font-bold'>{course.rating}</span>
                                {(() => {
                                    const fullStars = Math.floor(course.rating);
                                    const hasHalfStar = course.rating % 1 >= 0.5;
                                    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

                                    return (
                                        <>
                                            {Array.from({ length: fullStars }).map((_, i) => (
                                                <Star key={`full-${i}`} className='fill-[#EB7F3A] text-[#EB7F3A] w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] md:w-[10px] md:h-[10px]' />
                                            ))}
                                            {hasHalfStar && (
                                                <StarHalf key="half" className='fill-[#EB7F3A] text-[#EB7F3A] w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] md:w-[10px] md:h-[10px]' />
                                            )}
                                            {Array.from({ length: emptyStars }).map((_, i) => (
                                                <Star key={`empty-${i}`} className='text-[#EB7F3A] w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] md:w-[10px] md:h-[10px]' />
                                            ))}
                                        </>
                                    );
                                })()}
                                <span className='text-[9px] sm:text-[10px] md:text-xs'>({course.numberOfRatings.toLocaleString()})</span>
                            </div>
                            <p className='text-[10px] sm:text-xs md:text-sm font-bold text-start row-span-1 self-end'>₦{course.price.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-10 p-4 flex flex-row gap-5'>
                <div className='w-1/2 space-y-3'>
                    <div className='flex justify-start items-center gap-2'>
                        <div className='w-10 bg-amber-200'><hr className='border-[#EB7F3A]' /></div>
                        <p className='text-[#EB7F3A] text-md font-[NeoGram Trial]'>TESTIMONIAL</p>
                    </div>
                    <div className='text-justify space-y-4 text-[.5rem]  '>
                        <p className='text-[#34ACB4] text-xl '>What They Say?</p>

                        <p>edgeX has earned the trust of users across the globe, with more than 100,000 positive ratings.</p>
                        <p>Some students and teachers have benefited greatly from using edgeX, finding it an invaluable support in their learning and teaching journey.</p>
                        <p>Are you too? Please give your assessment</p>
                    </div>
                    <Button variant='outline' className='w-full text-start text-[#1E7B82] text-[.5rem] ring-1 ring-[#1E7B82] rounded-2xl h-6 flex justify-self-start relative justify-start'>
                        Write your assessment <MoveRight className='size-6 float-end absolute right-0 ring-1 ring-[#1E7B82] rounded-full p-1' />
                    </Button>
                </div>
                <div className='w-1/2 h-full'>
                    <Button className='rounded-full my-15 text-[#1E7B82] bg-white'><ChevronRight /> </Button>
                    <div className='border-l-4 border-l-black pl-4 rounded-[5px] text-[.5rem] h-1/2'>
                        <p className='text-justify '>Thank you so much for your support. This is exactly what I’ve been searching for, and it truly makes a difference. It saves me valuable time and effort, and edgeX is precisely what our work has been missing.</p>
                        <div className='flex justify-between mt-1.5'>
                            <p className=''>Enoch Ekele</p>
                            <div className='flex items-center gap-0.5'>
                                <Star className='fill-[#EB7F3A] text-[#EB7F3A] w-2 h-2' />
                                <Star className='fill-[#EB7F3A] text-[#EB7F3A] w-2 h-2' />
                                <Star className='fill-[#EB7F3A] text-[#EB7F3A] w-2 h-2' />
                                <Star className='fill-[#EB7F3A] text-[#EB7F3A] w-2 h-2' />
                                <Star className='fill-[#EB7F3A] text-[#EB7F3A] w-2 h-2' />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='bg-[#E0ECFF] w-[calc(100%+2rem)] h-25 -ml-4 flex flex-col items-center justify-center gap-1'>

                <div className='w-fit'>
                    <img src={edgex} alt="logo" className='w-20 h-15' />
                </div>

                <div className='text-center text-[.5rem] font-bold flex gap-1.5'>
                    <span>Home</span>|<span>Courses</span>|<span>About Us</span>|<span>Subscription</span>|<span>log in</span>|<span>Sign up</span>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    {/* Google icon - lucide-react doesn't have a Google icon, using a generic representation */}
                    <svg className='w-3 h-3 text-black fill-black' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
                    </svg>
                    <Linkedin className='w-3 h-3 text-black fill-black' />
                    <Instagram className='w-3 h-3 text-black' />
                    <Facebook className='w-3 h-3 text-black fill-white bg-black' />
                </div>


            </div>
            <div className='flex justify-between text-[.5rem] mt-4'>
                <p>(c) 2025 copyright | edgeX, All rights reserved</p>
                <p>Privacy & Policy    |    Terms & Condition</p>
            </div>
            




        </div>
    )
}

export default Body