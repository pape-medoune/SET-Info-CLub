import React from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TestimonialItems } from "../../constantes/TestimonialItems"

export default function Testimonial() {
    const splideRef = React.useRef(null)

    const goNext = () => {
        splideRef.current?.go('+1')
    }

    const goPrev = () => {
        splideRef.current?.go('-1')
    }

    return (
        <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-24 py-12">
            <h2 className="text-3xl font-bold mb-8 text-[#2D3748]">Ce que disent nos membres</h2>
            <div className="relative w-full">
                <Splide
                    ref={splideRef}
                    options={{
                        type: 'loop',
                        perMove: 1,
                        perPage: 1,
                        gap: '2rem',
                        pagination: true,
                        arrows: false,
                    }}
                    aria-label="Testimonial Slides"
                >
                    {TestimonialItems.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="flex flex-col md:flex-row h-full w-full justify-center items-center gap-8">
                                <div className="w-full md:w-[400px]">
                                    <img
                                        src={item.photo}
                                        alt={item.name}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <svg width="46" height="31" className="mb-3" viewBox="0 0 46 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.7336 30.2449C27.0168 30.2449 26.4024 29.9889 25.8904 29.4769C25.4808 28.9649 25.276 28.3505 25.276 27.6337C25.276 26.8145 25.4296 25.9953 25.7368 25.1761L33.8776 4.1329C34.3896 3.1089 34.9016 2.2897 35.4136 1.6753C36.028 0.958499 37.0008 0.600098 38.332 0.600098H43.4008C44.22 0.600098 44.8344 0.907297 45.244 1.52169C45.756 2.1361 45.9096 2.9553 45.7048 3.9793L42.3256 25.7905C42.2232 27.0193 41.8136 28.0945 41.0968 29.0161C40.38 29.8353 39.3048 30.2449 37.8712 30.2449H27.7336ZM3.15761 30.2449C2.44081 30.2449 1.82641 29.9889 1.31441 29.4769C0.904812 28.9649 0.700012 28.3505 0.700012 27.6337C0.700012 26.8145 0.853612 25.9953 1.16081 25.1761L9.30161 4.1329C9.81361 3.1089 10.3768 2.2897 10.9912 1.6753C11.6056 0.958499 12.5272 0.600098 13.756 0.600098H18.8248C19.644 0.600098 20.2584 0.907297 20.668 1.52169C21.18 2.1361 21.3336 2.9553 21.1288 3.9793L17.7496 25.7905C17.6472 27.0193 17.2376 28.0945 16.5208 29.0161C15.804 29.8353 14.78 30.2449 13.4488 30.2449H3.15761Z" fill="#252641" />
                                    </svg>
                                    <h1 className="text-2xl text-[#4A5568] mb-6 relative">
                                        {item.avis}
                                    </h1>
                                    <div className="font-semibold text-xl text-[#2D3748]">{item.name}</div>
                                    <div className="text-[#4299E1]">{item.profession}</div>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
                <button
                    onClick={goPrev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none z-10"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                    onClick={goNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md focus:outline-none z-10"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            </div>
        </div>
    )
}