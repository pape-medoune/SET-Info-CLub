import React from 'react'
import illustration from "../../assets/images/blog1.jpg";
import me from "../../assets/images/me.jpeg";
function SceanceTutorat() {
    return (
        <div className="w-full bg-[#9dccff7c] px-4 md:px-8 lg:px-16 xl:px-24 py-8 h-fit md:min-h-screen">
            <div className='flex w-full justify-between items-center mb-6'>
                <h2 className="text-2xl md:text-3xl font-poppins font-semibold">Sceance de Tutorat</h2>
                <h2 className="text-sm md:text-md font-poppins text-[#043873] font-semibold cursor-pointer hover:underline">Voir tout</h2>
            </div>

            <div className='w-full grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {[1, 2, 3, 4].map((_, index) => (
                    <div key={index} className="bg-white rounded-lg border p-4">
                        <img src={illustration} alt="SceanceTutorat img" className="w-full h-48 rounded-md object-cover" />
                        <div className="px-1 py-4">
                            <div className="font-bold text-xl mb-2 font-poppins text-[#2B2C34]"> Build markdown editor with react JS</div>
                            <p className="text-[#808080] truncate text-ellipsis font-regular font-poppins">
                                Lorem ipsum odor amet, consectetuer adipiscing diskpart
                                consectetuer adipiscing elit...
                            </p>
                        </div>
                        <div className="px-1 py-4">
                            <div className='flex flex-row gap-x-2'>
                                <img className="w-10 h-10 rounded-full" src={me} alt="Rounded avatar" />
                                <div className='flex flex-col gap-y-1'>
                                    <h1 className='text-[#2B2C34] text-sm font-regular font-poppins'>Mouhamedoune Fall</h1>
                                    <h1 className='text-[#808080] text-xs font-regular font-poppins'>14-Mai-2024</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default SceanceTutorat
