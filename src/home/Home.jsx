import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='mb-20'>
                <Body />
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home