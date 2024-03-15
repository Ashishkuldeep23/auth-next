'use client'

import { toggleModeValue, useThemeData } from "@/redux/slices/ThemeSlice"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
// import { useRouter } from "next/router"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { useSession } from "next-auth/react"
import Image from "next/image"




const Navbar = () => {

    // const themeValue = useThemeData().value

    const themeMode = useThemeData().mode

    const dispatch = useDispatch()

    const { data: session } = useSession()

    const [isUserLogined, setIsUserLogined] = useState(true)

    const params = usePathname()

    const router = useRouter()

    // console.log(session)


    function goToHome() {
        // alert("dfsdfsdagsd")

        console.log(params)

        if (params !== '/') {
            router.push("/profile")
        } else {
            router.push("/")
        }

    }


    useEffect(() => {

        setIsUserLogined(!!session)

        console.log(session)


    }, [session])



    return (
        <section className={` sticky -top-3 z-[2] flex justify-between items-center w-full px-2 sm:px-10 py-4 ${!themeMode ? " bg-black text-white " : " bg-white text-black"}`}>

            <div
                className=" flex gap-1 p-[-10px] text-2xl capitalize font-[cursive]"
                onClick={() => goToHome()}
            >
                {
                    session?.user?.image
                    &&
                    <img
                        className=" w-8 border rounded-full"
                        src={session?.user?.image.toString()}
                        alt="User Image"
                        width={"10px"}
                    />
                }

                <p>Home</p>

            </div>

            <div className=" flex items-center flex-wrap gap-2 ">


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
                                        onClick={() => { router.push("/new-post") }}

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

                        // setIsUserLogined(!isUserLogined)

                    }}

                    className={`border rounded-full text-xs h-6 ${themeMode ? " border-black" : " border-white"}`}
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

