'use client'

import { useThemeData } from "@/redux/slices/ThemeSlice";
import Image from "next/image";

import Link from "next/link";

export default function Home() {

  const themeMode = useThemeData().mode

  // console.log(themeMode)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">


      {/* <p>{!themeMode && "OK"}</p> */}



      <p className=" my-3 text-center">Pages present in this web app</p>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">


        {
          // // // Routes cart for now ------->

          ['login', 'signup', 'profile', 'profile/ashish'].map((ele, i) => {
            return (
              <Link
                key={i}
                href={`/${ele}`}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

              >
                <p className=" capitalize">{ele}</p>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50 capitalize`}>
                  Go to {ele} page.
                </p>
              </Link>
            )
          })


        }


      </div>
    </main>
  );
}
