'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import axios from "axios";


const SignUpPage = () => {

    const router = useRouter()

    const [passType, setPassType] = useState(false)

    const [userData, setUserData] = useState({
        email: "",
        password: "",
        username: "",
    })



    const onSignup = async () => {

        try {
            
            console.log(userData)
        } catch (error  ) {


            console.log(error)
            
        }


    }



    return (
        <>
            <div className=' w-full h-screen flex flex-col items-center py-[25vh]'>



                <div className=' border px-4 py-4 rounded-md md:w-1/4'>

                    <p className=' text-4xl font-bold border-b text-center px-5 py-1 rounded-md '>SingUp</p>

                    <div className="sm:col-span-3">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-100 mt-3">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                value={userData.username}
                                onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }}
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Name'
                                className="block w-full rounded-md border-0 py-1.5 text-gray-100 font-semibold px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-100 mt-3">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                value={userData.email}
                                onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}
                                type="text"
                                name="email"
                                id="email"
                                placeholder='Email'
                                className="block w-full rounded-md border-0 py-1.5 text-gray-100 font-semibold px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black"
                            />
                        </div>
                    </div>


                    <div className="sm:col-span-4">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100 mt-3">
                            Password
                        </label>
                        <div className="mt-2 relative">
                            <input
                                value={userData.password}
                                onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}
                                id="password"
                                name="password"
                                // type="password"
                                type={!passType ? "password" : "text"}
                                placeholder='Password'
                                className="block w-full rounded-md border-0 py-1.5 text-gray-100 font-semibold px-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-black"
                            />
                            <span
                                className=' absolute border  rounded  border-zinc-500 top-1.5 right-2 hover:cursor-pointer'
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setPassType(!passType) }}
                            >👁️‍🗨️</span>
                        </div>
                    </div>


                    <div className=' flex'>

                        <button 
                        className=' px-4 border bg-green-400 text-white font-semibold mt-3 rounded ml-auto mr-10'
                        onClick={onSignup}
                        >SingUp</button>

                    </div>



                </div>

                <div className=' md:w-1/4 mt-2 flex  justify-end'>
                    <Link href={"/login"}>Already have account!</Link>
                </div>
            </div>
        </>
    )
}

export default SignUpPage