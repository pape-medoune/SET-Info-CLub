import React from 'react'
import { Partenariat } from '../../constantes/Partenariat'

function Partenaire() {
    return (
        <div className="w-full bg-[#ffffff] flex flex-col px-4 md:px-8 lg:px-16 xl:px-24 py-8 h-fit md:min-h-screen">
            <div className='flex w-full flex-col justify-center items-center gap-y-5 mb-6'>
                <h2 className="text-3xl md:text-4xl font-poppins  text-[#252641] font-semibold">Nos partenaires</h2>
                <div className='flex flex-col px-5 md:px-48'>
                    <h2 className="text-xs md:text-sm font-poppins text-[#808080] font-medium   ">Nous collaborons avec des entreprises et des institutions qui partagent notre vision d'un monde plus connecté et plus innovant. Ensemble, nous offrons à nos membres des opportunités uniques pour se former et se démarquer dans le secteur technologique.</h2>
                </div>
            </div>

            <div className='w-full items-center justify-center  gap-6 flex flex-wrap'>
                {
                    Partenariat.map((ele, index) => (
                        <div div key={index} className='bg-[#EBEAED] flex items-center rounded-lg justify-center px-6 py-4 w-[270px] h-[160px]' >
                            <img src={ele.logo} className=' rounded-lg object-cover w-[113px] h-[113px]' alt={ele.name} />
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Partenaire
