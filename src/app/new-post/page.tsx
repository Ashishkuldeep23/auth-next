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
                className={`w-full min-h-screen flex flex-col items-center ${!themeMode ? " bg-black text-white " : " bg-white text-black"}`}
            >

                <Navbar />

                <div className='my-14 flex flex-col items-center '>

                    <p className=' my-2 border-b px-4 text-xl font-semibold'>Create a new post here👇</p>

                    <div className='rounded flex flex-col border w-11/12  sm:w-3/4 md:w-2/3'>

                        <div className='rounded mt-2 flex p-1 gap-2 flex-col sm:flex-row  '>

                            <div
                                className=' rounded p-1 border w-full sm:w-3/5'
                            >

                                <form
                                    className=' flex flex-col gap-2'
                                    onSubmit={() => { }}
                                >


                                    <div className=''>
                                        <input
                                            className={` w-4/5 border rounded-sm px-1 ${!themeMode ? " bg-slate-900 text-white" : " bg-slate-100 text-black"}`}
                                            placeholder="Give title of post"
                                            type={"text"}
                                            id="title"
                                        />

                                        <label
                                            className=' pl-2 pr-1 border-b font-semibold'
                                            htmlFor="title"
                                        >Title</label>

                                    </div>



                                    <div>

                                        <textarea
                                            style={{ resize: "none" }}
                                            placeholder="Give content of post"
                                            className={` w-4/5 border rounded-sm px-1 ${!themeMode ? " bg-slate-900 text-white" : " bg-slate-100 text-black"}`}
                                            name=""
                                            id="content"
                                            rows={3}
                                        ></textarea>

                                        <label
                                            className='pl-2 pr-1 border-b font-semibold'
                                            htmlFor="content"
                                        >Content</label>

                                    </div>



                                    <div>
                                        <input
                                            className={` w-4/5 border rounded-sm px-1 ${!themeMode ? " bg-slate-900 text-white" : " bg-slate-100 text-black"}`}
                                            placeholder="Give category of post"
                                            type={"text"}
                                            id="category"
                                        />

                                        <label
                                            className=' pl-2 pr-1 border-b font-semibold'
                                            htmlFor="category"
                                        >Category</label>

                                    </div>



                                    <div>
                                        <input
                                            className={` w-4/5 border rounded-sm px-1 ${!themeMode ? " bg-slate-900 text-white" : " bg-slate-100 text-black"}`}
                                            placeholder="Give url of post"
                                            type={"text"}
                                            id="url"
                                        />

                                        <label
                                            className=' pl-2 pr-1 border-b font-semibold'
                                            htmlFor="url"
                                        >*Url</label>

                                    </div>



                                    <div>
                                        <input
                                            className={` w-4/5 border rounded-sm px-1 ${!themeMode ? " bg-slate-900 text-white" : " bg-slate-100 text-black"}`}
                                            placeholder="Give origin of post"
                                            type={"text"}
                                            id="origin"
                                        />

                                        <label
                                            className=' pl-2 pr-1 border-b font-semibold'
                                            htmlFor="origin"
                                        >*Origin</label>

                                    </div>



                                    <div>
                                        <input
                                            className={` w-4/5 border rounded-sm px-1 ${!themeMode ? " bg-slate-900 text-white" : " bg-slate-100 text-black"}`}
                                            placeholder="Give HasThats of post"
                                            type={"text"}
                                            id="HasThats"
                                        />

                                        <label
                                            className=' pl-2 pr-1 border-b font-semibold'
                                            htmlFor="HasThats"
                                        >*Hasthats</label>

                                    </div>






                                </form>

                                <p className=' text-center'>star(*) marked are optional.</p>

                            </div>

                            <div
                                className='rounded p-1 border w-full sm:w-2/5'
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur adipisci, velit perferendis atque culpa rerum! Hic magnam quo est quia quas laudantium, deleniti sed incidunt atque architecto consectetur minus exercitationem!

                            </div>

                        </div>

                        <div className=' flex justify-center '>
                            <button className=' w-10/12 my-1 rounded-full font-bold bg-green-400 hover:bg-green-600 transition-all'>Create</button>
                        </div>


                        <div>

                        </div>

                    </div>

                </div>


            </div>

        </>
    )
}

export default NewPostPage

