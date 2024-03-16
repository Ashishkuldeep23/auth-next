'use client'

import { setModeOnLoad, useThemeData } from "@/redux/slices/ThemeSlice";

import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {

  const themeMode = useThemeData().mode

  const dispatch = useDispatch()

  // console.log(themeMode)


  useEffect(() => {

    let getPrivousThemeValue = localStorage.getItem("authNextDark")

    if (getPrivousThemeValue) {
      getPrivousThemeValue = JSON.parse(getPrivousThemeValue)

      // console.log(getPrivousThemeValue)
      dispatch(setModeOnLoad({ mode: getPrivousThemeValue }))
    }
  }, [])

  return (
    <main className={`flex min-h-screen flex-col items-center gap-10 ${!themeMode ? " bg-black text-white " : " bg-white text-black"}`}>


      <Navbar />

      <div className=" flex flex-col justify-center items-center py-6 ">


        <div className="flex flex-col items-center ">

          <div className=" px-4 sm:px-10 flex flex-col items-center text-center ">

            <h1 className="text-4xl sm:text-6xl font-bold">Discover & Share</h1>
            <h1 id="ai_heading" className=" text-4xl sm:text-6xl font-bold pb-2">AI-Powered Prompts</h1>

            <h3 className=" w-11/12 sm:w-4/6 text-sm sm:text-xl leading-4 sm:leading-6 font-semibold">PromptiPedia is an open-surce AI prompting tool form mordern world to discover, create and share creative prompts </h3>

            <input
              type="text"
              className=" text-black p-0.5 px-2 font-bold mt-5 w-11/12 sm:w-4/6 rounded-full shadow-lg shadow-slate-300  border "
              placeholder="Search for prompt here."

            />

          </div>


          <SearchByDiv />


        </div>


        <div className="sm:px-6 mt-16 flex gap-5 p-0.5 flex-wrap justify-center ">


          {

            [null, null, null, null, null, null, null, null, null, null].map((ele, i) => {
              return (

                <Card key={i} ele={ele} />

              )
            })
          }

        </div>


      </div>

    </main>
  );
}




function Card({ ele }: any) {

  const themeMode = useThemeData().mode

  const promptText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam amet sed voluptas laborum quibusdam aperiam nesciunt vel magnam libero nam!  labndus dicta ullam ducimus."

  const charactersWant = 90

  return (
    <div
      onClick={() => { console.log(ele) }}

      style={{ padding: "3px" }}
      className=" bg-gradient-to-tr from-cyan-400  w-72 sm:w-80  sm:p-2 rounded hover:cursor-pointer hover:scale-105 sm:hover:scale-110 transition-all"
    >


      <div className={` p-1 ${!themeMode ? " bg-black text-white " : " bg-white text-black"}`}>


        <div className="rounded flex gap-1.5 items-center">

          <img className=" rounded-full w-8" src="https://res.cloudinary.com/dlvq8n2ca/image/upload/v1701708322/jual47jntd2lpkgx8mfx.png" alt="" />
          <p>Name Kumar</p>
        </div>

        <div

          // style={{ overflow : "hidden" , textOverflow : "ellipsis", whiteSpace : "balance"}}
          className=" text-sm"
        >

          {
            promptText.toString().length > charactersWant ? `${promptText.slice(0, charactersWant)}...` : `${promptText}`

            // promptText
          }

        </div>


        <div className=" flex gap-2 text-violet-500 font-semibold ">
          <p>#HTML</p>
          <p>#CSS</p>
          <p>#JS</p>
          <p>#ReactJs</p>
        </div>

        <div className=" flex gap-5 text-xs">
          <p>2 Likes</p>
          <p>1 Comments</p>
        </div>

      </div>


    </div>
  )
}



const SearchByDiv = () => {

  const [expandCat, setExpandCat] = useState(false)

  const [expandHash, setExpandHash] = useState(false)

  return (

    <>
      <div className=" w-11/12 sm:w-4/6 flex flex-col items-center px-1 sm:px-5  mt-7">

        <div className="w-full flex justify-around flex-wrap">


          <div>
            <p>Search By 👉</p>
          </div>

          <div>
            <p
              className=" border-b hover:cursor-pointer"
              onClick={() => { setExpandCat(!expandCat); setExpandHash(false); }}
            >Category</p>


          </div>

          <div>
            <p
              className=" border-b hover:cursor-pointer"
              onClick={() => { setExpandHash(!expandHash); setExpandCat(false); }}
            >#Hashthats</p>


          </div>

        </div>


        <div
          className={` border mt-2 rounded flex gap-2 flex-wrap justify-around px-1 overflow-hidden ${!expandCat ? " border-0 w-1/2 h-0 opacity-100" : " w-full  opacity-100"} transition-all `}
        >

          {
            ['General', "Tech", "News", "etc", 'General', "Tech", "News", "etc"].map((ele, i) => {
              return <p className=" font-bold text-violet-500 " key={i}>{ele}</p>
            })
          }

        </div>

        <div
          className={` border mt-2 rounded flex gap-2 flex-wrap justify-around px-1 overflow-hidden ${!expandHash ? " border-0 w-1/2 h-0 opacity-100" : " w-full opacity-100"} transition-all `}
        >


          {
            ['#GoogleLogin', "#ReactJs", "#Html", '#CSS', "#TechJobs"].map((ele, i) => {
              return <p className=" font-bold text-violet-500 " key={i}>{ele}</p>
            })
          }
        </div>




      </div>


    </>

  )
}

