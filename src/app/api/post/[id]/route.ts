
import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server"
import { isValidObjectId } from "mongoose"

connect()


export async function GET(req: NextApiRequest, context: any) {

    try {

        let postId = context?.params?.id

        if (!postId) {
            return NextResponse.json({ success: false, message: 'Post is not given. or Not vaild' }, { status: 400 })
        }

        if (!isValidObjectId(postId)) {
            return NextResponse.json({ success: false, message: 'Given post id is invailid.' }, { status: 400 })
        }


        let findPost = await Post.findById(postId)


        if (!findPost) {
            return NextResponse.json({ success: false, message: 'Post not found with given id.' }, { status: 404 })
        }

        if (findPost.isDeleted) {
            return NextResponse.json({ success: false, message: 'Post is deleted now.' }, { status: 400 })
        }


        return NextResponse.json({ success: true, data: findPost, message: "New post created." }, { status: 200 })

        // return res.status(201).json({ success: true, data: [], message: "New post created." })

    } catch (error: any) {

        console.log(error.message)
        return NextResponse.json({ success: false, message: `${error.message} (Server Error)` }, { status: 500 })

        // return res.status(500).json({ success: false, data: [], message: `${error.message} (Server Error)` })
    }
}


