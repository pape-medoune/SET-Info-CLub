import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { podcastItems } from "../../constantes/Podcast";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Podcast() {
    const splideRef = React.useRef(null);

    const goNext = () => {
        splideRef.current?.go('+1');
    };

    const goPrev = () => {
        splideRef.current?.go('-1');
    };

    return (
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 py-8 h-fit">
            <h2 className="text-3xl font-poppins font-semibold mb-6 text-left">Listes de Lectures</h2>
            <div className="relative group w-full flex items-center justify-between">
                <Splide
                    ref={splideRef}
                    options={{
                        type: 'loop',
                        perMove: 1,
                        perPage: 4,
                        gap: '2rem',
                        pagination: false,
                        arrows: false,
                        breakpoints: {
                            // 640: {
                            //     perPage: 1,
                            // },
                            768: {
                                perPage: 2,
                            },
                            1024: {
                                perPage: 3,
                            },
                            1280: {
                                perPage: 4,
                            },
                        },
                    }}
                    aria-label="Podcast Slides"
                    className="splide__list w-full flex items-center justify-center"
                >
                    {podcastItems.map((ele, index) => (
                        <SplideSlide key={index} className="splide__slide w-full flex justify-center items-center">
                            <div className="relative rounded-lg overflow-hidden md:w-[300px] w-full" style={{ paddingBottom: '125%' }}>
                                <img
                                    src={ele.illustration}
                                    alt={ele.name}
                                    className="absolute  object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4">
                                    <div className="bg-white relative -top-5 lg:-top-16 bg-opacity-80 rounded-lg px-2 py-4 text-center">
                                        <span className="text-lg font-semibold">{ele.name}</span>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
                <button
                    onClick={goPrev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md focus:outline-none z-10 "
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                    onClick={goNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md focus:outline-none z-10"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
            </div>
        </div>
    );
}