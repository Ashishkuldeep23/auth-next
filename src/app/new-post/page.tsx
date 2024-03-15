'use client'

import { useThemeData } from '@/redux/slices/ThemeSlice'
import React from 'react'
import HomeButton from '../components/HomeButton'
import Navbar from '../components/Navbar'

const NewPostPage = () => {

    const themeMode = useThemeData().mode

    return (
        <>

            <div 
            className={`w-full h-screen flex flex-col items-center justify-center ${!themeMode ? " bg-black text-white " : " bg-white text-black"}`}
            >

                <HomeButton />

                <Navbar />

                NewPostPage
            </div>

        </>
    )
}

export default NewPostPage

