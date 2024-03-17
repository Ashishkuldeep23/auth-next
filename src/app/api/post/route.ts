import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";



connect()


export async function POST(req: NextRequest) {

    try {

        // console.log("fsdfsdfsdfsdfsfd")

        const reqBody = await req.json()

        // console.log(reqBody)

        const { title, category, promptReturn } = reqBody

        if (!title || !category || !promptReturn) {
            return NextResponse.json({ success: false, message: 'Mandatory fields not given.' }, { status: 404 })
        }


        let createNewPost = new Post(reqBody)

        createNewPost = await createNewPost.save()

        // return NextResponse.json({ success: true, data: createNewPost, message: "User created." }, { status: 201 })



        return NextResponse.json({ success: true, data: createNewPost, message: "New post created." }, { status: 201 })

    } catch (error: any) {

        console.log(error.message)
        return NextResponse.json({ success: false, message: `${error.message} (Server Error)` }, { status: 500 })
    }

}



// export async function GET(req: NextRequest) {
//     try {

//         // console.log("fsdfsdfsdfsdfsfd")
//         const token = req.cookies.get('token')

//         console.log(token)

//         console.log(req)

//         return NextResponse.json({ success: true, data: [], message: "New post created." }, { status: 201 })

//     } catch (error: any) {

//         console.log(error.message)
//         return NextResponse.json({ success: false, message: `${error.message} (Server Error)` }, { status: 500 })
//     }
// }




