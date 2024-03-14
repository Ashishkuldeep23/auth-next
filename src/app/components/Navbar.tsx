'use client'

import { toggleModeValue, useThemeData } from "@/redux/slices/ThemeSlice"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { useState } from "react"
import { useDispatch } from "react-redux"

const Navbar = () => {


    // const themeValue = useThemeData().value

    const themeMode = useThemeData().mode

    const dispatch = useDispatch()

    const [isUserLogined , setIsUserLogined] =  useState(true)

    const params = usePathname()

    // console.log(params)


    return (
        <section className={`relative z-[2] flex justify-between w-full px-2 sm:px-10 py-4 ${!themeMode ? " bg-black text-white " : " bg-white text-black"}`}>

            <div className=" ">

                home

            </div>

            <div className=" flex flex-wrap gap-2 ">


                <div>
                    {


                        !isUserLogined
                            ?

                            <div className=" flex flex-wrap gap-1">
                                <Link
                                    href={"/signup"}
                                    className={` border rounded-full px-2 py-0.5 text-sm font-bold ${themeMode ? " bg-black border-black text-white " : " border-white bg-white text-black"}`}
                                >SignUp</Link>
                                <Link
                                    href={"/login"}
                                    className={`border rounded-full px-2 py-0.5 text-sm font-bold ${themeMode ? "border-black " : " border-white "}`}
                                >LogIn</Link>
                            </div>

                            :
                            <>

                                <div className=" flex flex-wrap gap-1">
                                    <button
                                        onClick={() => { alert('create new psot') }}

                                        className={` border rounded-full px-2 py-0.5 text-sm font-bold ${themeMode ? " bg-black border-black text-white " : " border-white bg-white text-black"}`}
                                    >Create Post</button>
                                    <button
                                        onClick={() => { alert('SignOut Fn') }}

                                        className={`border rounded-full px-2 py-0.5 text-sm font-bold ${themeMode ? "border-red-900 " : " border-red-100 "}`}
                                    >SignOut</button>
                                </div>
                            </>
                    }


                </div>




                <button
                    onClick={() => {

                        // console.log("dasdff")

                        // let newValue = (themeValue === "black") ? true : false

                        dispatch(toggleModeValue())

                        setIsUserLogined(!isUserLogined)

                    }}

                    className={`border rounded-full ${themeMode ? " border-black" : " border-white"}`}
                >
                    {

                        themeMode ? "🌛" : "🌞"
                    }
                </button>

            </div>

        </section>
    )
}

export default Navbar

