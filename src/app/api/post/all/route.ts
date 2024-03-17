import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";



connect()


export async function GET(req: NextRequest) {

    try {

        // console.log("iktyutryetyr")

        let getAllPosts = await Post.find({ isDeleted: false })


        // console.log(getAllPosts)


        if (getAllPosts.length <= 0) {
            NextResponse.json({ success: false, message: `Posts not found. | 404` }, { status: 404 })
        }



        return NextResponse.json({ success: true, data: getAllPosts, message: "All post fetched." }, { status: 201 })

    } catch (error: any) {

        console.log(error.message)
        return NextResponse.json({ success: false, message: `${error.message} (Server Error)` }, { status: 500 })
    }

}



