
'use client'

import HomeButton from '@/app/components/HomeButton'
import { useThemeData } from '@/redux/slices/ThemeSlice'
import React from 'react'

const ProfilePageParams = ({ params }: any) => {

    const themeMode = useThemeData().mode

    return (
        <div
        className={`w-full h-screen flex flex-col justify-center items-center ${!themeMode ? " bg-black text-white " : " bg-white text-black"} `}
        >

            <HomeButton />

            <p>User</p>
            <p>ProfilePage <span className=' rounded px-2 bg-orange-500 text-black mx-2 font-semibold'>{params.id}</span></p>
        </div>
    )
}

export default ProfilePageParams
