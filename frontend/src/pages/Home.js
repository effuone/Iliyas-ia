import React from 'react'
import CarouselComponent from '../components/Carousel'
import Hero from '../components/Hero'

function Home() {
    return (
        <div className='container'>
            <Hero />
            <h2 className='d-flex justify-content-center mb-5'>Our Best Art Works</h2>
            <CarouselComponent />
        </div>
    )
}

export default Home