import React from 'react'
import event from "../../assets/images/event.jpg";
import { Calendar, MapPin, History, ArrowRight } from 'lucide-react';

function Events() {
    return (
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-16 h-fit">
            <div className='flex w-full justify-between items-center mb-6'>
                <h2 className="text-2xl md:text-3xl font-poppins font-semibold">Evènements & activités</h2>
                <h2 className="text-sm md:text-md font-poppins text-[#043873] font-semibold cursor-pointer hover:underline">Voir tout</h2>
            </div>

            <div className='w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                <div className="relative rounded-lg overflow-hidden col-span-full lg:col-span-2 aspect-video md:aspect-[4/3] lg:aspect-auto">
                    <img
                        src={event}
                        alt="Evenement"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 p-4 md:p-6 lg:p-8 flex flex-col justify-center text-white bg-gradient-to-t from-black/70 to-transparent">
                        <div className='flex items-center justify-end gap-x-1 mb-auto'>
                            <span className="text-sm text-white font-regular">Lire plus</span>
                            <ArrowRight size={16} />
                        </div>
                        <div className="flex flex-col w-full">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-2 w-full">IT DAYS</h3>
                            <p className="text-sm md:text-base font-regular mb-4 line-clamp-3 md:line-clamp-none">Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum, ultricies duis nibh senectus sociis mauris tellus eget massa, dignissim odio lacinia nisl pretium penatibus curabitur.</p>
                            <div className="flex flex-wrap gap-3 text-xs md:text-sm w-full">
                                <div className='flex items-center gap-x-1'>
                                    <Calendar size={14} />
                                    <span className="font-semibold">Date: 18/11/2024</span>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <MapPin size={14} />
                                    <span className="font-semibold">Lieux: Thiès, UIDT, Amphi B</span>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <History size={14} />
                                    <span className="font-semibold">Heure: 16h - 18h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid gap-4  lg:grid-cols-2'>
                    {[1, 2, 3, 4].map((_, index) => (
                        <div key={index} className='bg-[#F0F7FF] p-4 rounded-lg'>
                            <h3 className='font-poppins text-[#0F4284] font-semibold uppercase text-lg mb-2'>SCEANCE DE TUTORAT</h3>
                            <p className='font-poppins text-[#696984] font-semibold text-sm md:text-md'>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Events