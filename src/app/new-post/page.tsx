'use client'

import { useThemeData } from '@/redux/slices/ThemeSlice'
import React, { useState } from 'react'
import HomeButton from '../components/HomeButton'
import Navbar from '../components/Navbar'

const NewPostPage = () => {

    const themeMode = useThemeData().mode

    interface NewPostType {
        title: string,
        category: string,
        content: string,
        url: string,
        origin: string,
        hashs: string[],

    }

    const [newPostData, setNewPostData] = useState<NewPostType>({
        title: "",
        category: "",
        content: "",
        url: "",
        origin: "",
        hashs: [],
    })


    const [newHash, setNewHash] = useState<string>("")



    type TypeCatAndHash = {
        categories: string[],
        hashthasts: string[]
    }

    const [catAndHash, setCatAndHash] = useState<TypeCatAndHash>({
        categories: [],
        hashthasts: ["#ok", "#bk", "#ck"]

    })




    function addNewHash(e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) {

        e.preventDefault()
        e.stopPropagation()

        if (!newHash) return


        let newArr = [...newPostData?.hashs, `#${newHash}`]
        let uniqueArr = new Set(newArr)

        // console.log([...uniqueArr])


        setNewPostData({
            ...newPostData,
            hashs: [...uniqueArr]
        })

        setNewHash("")
    }


    function cutOneHash(index: number) {

        newPostData.hashs.splice(index, 1)
        setNewPostData({
            ...newPostData,
            hashs: newPostData.hashs
        })
    }






    const classNamesForInputs = ` w-[68%] border rounded-sm px-1 ${!themeMode ? " bg-slate-900 text-white" : " bg-slate-100 text-black"}`


    return (
        <>

            <div
                className={`w-full min-h-screen flex flex-col items-center ${!themeMode ? " bg-black text-white " : " bg-white text-black"}`}
            >

                <Navbar />

                <div className='my-14 flex flex-col items-center w-full '>

                    <p className=' my-2 border-b px-4 text-xl font-semibold'>Create a new post here👇</p>

                    <div className={`rounded flex flex-col border w-11/12 xs:w-[80%]  sm:w-3/4 md:w-2/3 ${themeMode ? "bg-green-100" : "bg-green-900"} `}>

                        <div className='rounded mt-2 flex p-1 gap-2 flex-col sm:flex-row  '>

                            <div
                                className={`rounded p-1 border w-full sm:w-3/5 ${!themeMode ? " bg-black" : " bg-white"}`}
                            >

                                <form
                                    className=' flex flex-col gap-2'
                                    onSubmit={() => { }}
                                >


                                    <div className=''>
                                        <input
                                            className={`${classNamesForInputs}`}
                                            placeholder="Give title of post"
                                            type={"text"}
                                            id="title"
                                            value={newPostData?.title}
                                            name='title'
                                            onChange={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setNewPostData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
                                            }}
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
                                            className={`${classNamesForInputs}`}
                                            id="content"
                                            rows={3}

                                            value={newPostData?.content}
                                            name='content'
                                            onChange={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setNewPostData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
                                            }}
                                        ></textarea>

                                        <label
                                            className='pl-2 pr-1 border-b font-semibold'
                                            htmlFor="content"
                                        >Content</label>

                                    </div>


                                    <div>
                                        <input
                                            className={`${classNamesForInputs}`}
                                            placeholder="Give category of post"
                                            type={"text"}
                                            id="category"
                                            value={newPostData?.category}
                                            name='category'
                                            onChange={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setNewPostData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
                                            }}
                                        />

                                        <label
                                            className='pl-2 pr-1 border-b font-semibold'
                                            htmlFor="category"
                                        >Category</label>

                                    </div>


                                    <div>
                                        <input
                                            className={`${classNamesForInputs}`}
                                            placeholder="Give url of post"
                                            type={"text"}
                                            id="url"
                                            value={newPostData?.url}
                                            name='url'
                                            onChange={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setNewPostData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
                                            }}
                                        />

                                        <label
                                            className=' pl-2 pr-1 border-b font-semibold'
                                            htmlFor="url"
                                        >*Url</label>

                                    </div>


                                    <div>
                                        <input
                                            className={`${classNamesForInputs}`}
                                            placeholder="Give origin of post"
                                            type={"text"}
                                            id="origin"
                                            value={newPostData?.origin}
                                            name='origin'
                                            onChange={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setNewPostData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
                                            }}
                                        />

                                        <label
                                            className=' pl-2 pr-1 border-b font-semibold'
                                            htmlFor="origin"
                                        >*Origin</label>

                                    </div>


                                    <div>

                                        <div className={` ${!themeMode ? "text-violet-300" : "text-violet-700"} flex flex-wrap items-center gap-1`}>

                                            {
                                                newPostData.hashs.map((ele, i) => {
                                                    return (
                                                        <p
                                                            key={i}
                                                            className=' border border-cyan-400 pl-2 rounded-md'
                                                        >{ele}
                                                            <span
                                                                onClick={() => cutOneHash(i)}
                                                                className='bg-red-500 rounded-full font-semibold px-1 mx-1 text-white hover:cursor-pointer hover:bg-red-700 '
                                                            >x</span>
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>


                                        <div className='my-1 flex'>

                                            <div
                                                className={` relative flex justify-end w-[68%] border rounded `}
                                            // className={`flex  `}
                                            >


                                                <input
                                                    className={`${classNamesForInputs} w-full relative z-10 rounded-e-none `}
                                                    placeholder="Give HasThats of post"
                                                    type={"text"}
                                                    id="HasThats"

                                                    value={newHash}
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setNewHash(() => e.target.value)
                                                    }
                                                    }

                                                    onKeyDown={(e) => {
                                                        // e.preventDefault();
                                                        // console.log(e.key)
                                                        if (e.key === "Enter") {
                                                            addNewHash(e)
                                                        }
                                                    }}

                                                />

                                                <button
                                                    className=' -ml-1 mb-0.5 scale-y-[1.6] scale-x-125'
                                                    onClick={(e) => {
                                                        // e.preventDefault()
                                                        addNewHash(e)
                                                    }}
                                                >⬆️</button>


                                                {
                                                    // // // Suggetion div with logic here ---------->

                                                    newHash
                                                    &&

                                                    <div className={`absolute z-[1] top-[110%] rounded w-full p-0.5 min-h-10 ${!themeMode ? "bg-black" : "bg-white"} `}>

                                                        {

                                                            catAndHash.hashthasts.map((ele, i) => {
                                                                return <div
                                                                    className=' border-b'
                                                                    key={i}
                                                                    onClick={() => {

                                                                        newPostData.hashs.push(ele)

                                                                        // console.log(newPostData.hashs)

                                                                        setNewPostData({
                                                                            ...newPostData,
                                                                            hashs: newPostData.hashs
                                                                        });
                                                                        setNewHash("");
                                                                    }}
                                                                >{ele}</div>
                                                            })

                                                        }


                                                    </div>
                                                }


                                            </div>


                                            <label
                                                className=' pl-2 pr-1 border-b font-semibold'
                                                htmlFor="HasThats"
                                            >*Hasthats</label>

                                        </div>


                                    </div>

                                </form>

                                <p className=' text-center'>star(*) marked are optional.</p>

                            </div>

                            <div
                                className={`rounded p-1 border w-full sm:w-2/5 ${!themeMode ? " bg-black" : " bg-white"}`}
                            >

                                {/* <div>
                                    User InFo ---
                                </div> */}

                                <div className="rounded-t flex gap-1.5 items-center border-b border-cyan-400">

                                    <img className=" rounded-full w-8" src="https://res.cloudinary.com/dlvq8n2ca/image/upload/v1701708322/jual47jntd2lpkgx8mfx.png" alt="" />
                                    <p>Name Kumar</p>
                                </div>

                                <div className=" flex justify-between flex-wrap gap-1">
                                    <p className=" capitalize">{newPostData.title}</p>

                                    {
                                        newPostData.category
                                        &&
                                        <p className=" ml-auto text-xs">({newPostData.category})</p>
                                    }

                                </div>

                                <div className=" text-sm  max-h-40 overflow-y-scroll"
                                >

                                    {
                                        newPostData.content
                                    }


                                </div>


                                <div className=' mt-1'>

                                    {
                                        newPostData.url
                                        &&
                                        <p className=' text-sm' > URl : {newPostData.url}</p>
                                    }



                                    {
                                        newPostData.origin
                                        &&
                                        <p className=' text-sm text-end'>By : {newPostData.origin}</p>
                                    }




                                </div>


                                <div className=" flex flex-wrap gap-2 text-violet-500 font-semibold ">
                                    {

                                        newPostData.hashs.length > 0

                                        &&

                                        newPostData.hashs.map((hash, i) => {
                                            return <p key={i}>{hash}</p>
                                        })


                                    }
                                </div>

                                {/* <div className=" flex gap-5 text-xs">
                                    <p>2 Likes</p>
                                    <p>1 Comments</p>
                                </div> */}

                            </div>

                        </div>

                        <div className=' flex justify-end '>
                            <button className={`px-8 mx-8 my-1 rounded-full font-bold bg-green-400 hover:bg-green-600 transition-all ${themeMode ? "text-green-900" : "text-green-900"}`}>Create</button>
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

