import React from 'react'
import "../styles/HomePage.css";
import TransparentNavBar from '../Navigation bar/TransparentNavBar';

function HeroSection() {
    return (
        <div>

            <div className="bg ">
                <TransparentNavBar />
                <div className='flex md:gap-y-7 gap-y-4 text-white h-screen w-full flex-col items-center justify-center'>
                    <h2 className='text-lg uppercase font-montserrat font-bold'>
                        BIENVENU AU <span className='uppercase text-[#A7CEFC]'>SET INFO CLUB</span>
                    </h2>
                    <h1 className='px-8 md:px-60 text-center text-2xl w-full flex justify-center uppercase font-montserrat font-bold'>
                        L’endroit idéale pour les passionnés de technologie, de programmation, et d'innovation
                    </h1>
                    <h1 className=' text-center px-8 md:px-60  flex justify-center w-full text-lg font-montserrat font-medium '>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, malesuada primis nisi sodales senectus fringilla, ac fusce curabitur facilisis posuere nibh.
                    </h1>
                    <button className='rounded-full bg-[#ffffff49] w-fit px-12  text-center flex items-center justify-center h-fit py-4'>
                        <h1 className='text-lg  font-poppins font-semibold'>
                            Rejoindre le club
                        </h1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
