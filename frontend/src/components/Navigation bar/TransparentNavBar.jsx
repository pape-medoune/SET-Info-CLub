'use client'

import React, { useState, useEffect } from 'react'
import Logo1Transparent from '../../assets/svg/Logo1Transparent'
import { NavItems } from '../../constantes/NavItems'

function TransparentNavBar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md' : ''}`}>
            <div className='container mx-auto px-4 md:px-6 lg:px-8'>
                <div className='flex items-center justify-between py-4'>
                    <Logo1Transparent />

                    {/* Desktop menu */}
                    <ul className='hidden items-center md:flex space-x-8'>
                        {NavItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className='font-montserrat font-medium text-white hover:text-gray-300 transition-colors'>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        <button className="bg-[#A7CEFC] w-fit hover:bg-[#a7d4fc] text-white font-bold py-3 px-6 rounded-lg text-lg">
                            Se connecter
                        </button>
                    </ul>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {NavItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-montserrat font-medium text-white hover:text-gray-300 hover:bg-gray-700 transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <button className="my-3 bg-[#A7CEFC] w-full hover:bg-[#a7d4fc] text-white font-bold py-3 px-6 rounded-lg text-lg">
                            Se connecter
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default TransparentNavBar