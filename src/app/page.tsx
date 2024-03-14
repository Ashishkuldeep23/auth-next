'use client'

import { useThemeData } from "@/redux/slices/ThemeSlice";

import Navbar from "./components/Navbar";

export default function Home() {

  const themeMode = useThemeData().mode

  // console.log(themeMode)

  return (
    <main className={`flex min-h-screen flex-col items-center gap-10 ${!themeMode ? " bg-black text-white " : " bg-white text-black"}`}>


      <Navbar />

      <div className=" flex flex-col justify-center items-center py-6 ">


        <div className="flex flex-col items-end">

          <div className=" px-4 sm:px-10 flex flex-col items-center text-center ">

            <h1 className="text-4xl sm:text-6xl font-bold">Discover & Share</h1>
            <h1 id="ai_heading" className=" text-4xl sm:text-6xl font-bold pb-2">AI-Powered Prompts</h1>

            <h3 className=" w-11/12 sm:w-4/6 text-sm sm:text-xl leading-4 sm:leading-6 font-semibold">PromptiPedia is an open-surce AI prompting tool form mordern world to discover, create and share creative prompts </h3>

            <input
              type="text"
              className=" mt-5 w-11/12 sm:w-4/6 rounded text-xl shadow-lg shadow-slate-300 border"
            />

          </div>

        </div>


        <div className="sm:px-6 mt-16 flex gap-5 p-0.5 flex-wrap justify-center ">


          {

            [null, null, null, null , null , null , null].map((ele, i) => {
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



  return (
    <div
      onClick={() => { console.log(ele) }}

      className=" w-72 sm:w-80 border border-rose-900 p-1 sm:p-2 rounded hover:cursor-pointer hover:scale-105 sm:hover:scale-110 transition-all"
    >


      <div className=" flex gap-1.5 items-center">
        
        <img className=" w-8" src="https://res.cloudinary.com/dlvq8n2ca/image/upload/v1701708322/jual47jntd2lpkgx8mfx.png" alt="" />
        <p>Name</p>
      </div>

      <div className=" text-sm">

        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam amet sed voluptas laborum quibusdam aperiam nesciunt vel magnam libero nam!  labndus dicta ullam ducimus.
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
  )
}

