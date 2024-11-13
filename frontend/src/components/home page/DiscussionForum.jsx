import React from 'react'
import me from "../../assets/images/me.jpeg";
import { EllipsisVertical } from 'lucide-react';

function DiscussionForum() {
    return (
        <div className="w-full bg-[#9dccff7c] flex flex-col px-4 md:px-8 lg:px-16 xl:px-24 py-8 h-fit md:min-h-screen">
            <div className='flex w-full flex-col justify-start items-start gap-y-5 mb-6'>
                <h2 className="text-3xl md:text-4xl font-poppins font-semibold">Forum de Discussion du Club</h2>
                <div className='flex flex-col'>
                    <h2 className="text-md md:text-lg font-poppins text-[#696984] font-medium cursor-pointer hover:underline">Partagez vos connaissances, posez vos questions et collaborez avec d'autres</h2>
                    <h2 className="text-md md:text-lg font-poppins text-[#696984] font-medium cursor-pointer hover:underline">passionnés d'informatique !</h2>
                </div>
            </div>

            <div className='w-full grid gap-6 grid-cols-1 md:grid-cols-2'>
                {[1, 2, 3, 4].map((_, index) => (
                    <div key={index} className="bg-white flex-col flex gap-3 rounded-lg border p-4">
                        <div className="px-1 py-1 flex flex-row items-center justify-between">
                            <div className='flex flex-row gap-x-2'>
                                <img className="w-10 h-10 rounded-full" src={me} alt="Rounded avatar" />
                                <div className='flex flex-col gap-y-1'>
                                    <h1 className='text-[#2B2C34] text-sm font-regular font-poppins'>Mouhamedoune Fall</h1>
                                    <h1 className='text-[#808080] text-xs font-regular font-poppins'>14-Mai-2024</h1>
                                </div>
                            </div>


                            <EllipsisVertical className='text-[#808080]' />
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <h1 className='font-bold text-md font-poppins'>How to patch KDE on FreeBSD?</h1>
                            <h3 className='font-light text-sm font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla</h3>
                        </div>

                        <div className='flex w-full items-center justify-between'>
                            <div className="flex flex-row gap-2">
                                <div className='bg-[#EAEAEA] flex text-xs rounded-lg items-center justify-center text-[#808080] px-2 py-1'>
                                    goland
                                </div>
                                <div className='bg-[#EAEAEA] flex text-xs rounded-lg items-center justify-center text-[#808080] px-2 py-1'>
                                    linux
                                </div>
                                <div className='bg-[#EAEAEA] flex text-xs rounded-lg items-center justify-center text-[#808080] px-2 py-1'>
                                    overflow
                                </div>
                            </div>

                            <div className='flex flex-row items-center gap-x-3'>
                                <div className='flex items-center gap-x-1'>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0721 4.39234C17.3064 2.74742 14.8926 3.4103 13.4426 4.4662C12.8479 4.89915 12.5507 5.11563 12.3758 5.11563C12.2009 5.11563 11.9037 4.89915 11.309 4.4662C9.85899 3.4103 7.44517 2.74742 4.67954 4.39234C1.04996 6.55113 0.228669 13.6731 8.60069 19.6816C10.1953 20.826 10.9926 21.3982 12.3758 21.3982C13.759 21.3982 14.5563 20.826 16.1509 19.6816C24.5229 13.6731 23.7016 6.55113 20.0721 4.39234Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    <h1 className='text-[#808080]'>1288</h1>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.98295 19.3982C5.64213 19.2703 4.63768 18.8798 3.96404 18.2266C2.75578 17.0551 2.75578 15.1694 2.75578 11.3982V10.8982C2.75578 7.12695 2.75578 5.24134 3.96404 4.06976C5.17231 2.89819 7.11697 2.89819 11.0063 2.89819H15.1316C19.0209 2.89819 20.9656 2.89819 22.1738 4.06976C23.3821 5.24134 23.3821 7.12695 23.3821 10.8982V11.3982C23.3821 15.1694 23.3821 17.0551 22.1738 18.2266C20.9656 19.3982 19.0209 19.3982 15.1316 19.3982C14.5535 19.4107 14.0931 19.4533 13.6409 19.5532C12.405 19.8291 11.2605 20.4423 10.1296 20.9771C8.51804 21.739 7.71229 22.12 7.20662 21.7633C6.23925 21.0647 7.18481 18.9001 7.3967 17.8982" stroke="#808080" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                    <h1 className='text-[#808080]'>18</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className='flex my-10 md:my-16 w-full items-center justify-center h-fit '>
                <button className="bg-[#043873] w-fit font-semibold hover:bg-[#042073] text-white  py-3 px-6 rounded-lg text-lg">
                    Voir tout
                </button>
            </div>

        </div >
    )
}

export default DiscussionForum
