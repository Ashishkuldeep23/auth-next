import React from 'react'

import "@/app/components/styleForComps.css"


const MainLoader = ({ isLoading = false }: { isLoading: boolean }) => {
    return (
        <>

            {
                isLoading
                &&

                // <div className=' relative'>

                    <span
                        id="main_loader"
                        className='z-10 scale-150 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[45deg]'
                    ></span>

                // </div>

            }

        </>
    )
}

export default MainLoader