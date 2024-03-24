import { connect } from "@/dbConfig/dbConfig";
import Post from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";



connect()


export async function GET(req: NextRequest) {

    try {

        // console.log("iktyutryetyr")

        let getAllPosts = await Post.find({ isDeleted: false })
            .sort({ "createdAt": "desc" })
            // .sort({ 
            //     createdAt: "-1"
            // })
            // .sort(["desc"])
            .populate({
                path: "author",
                // match: { isDeleted: false },
                select: "-updatedAt -createdAt -__v -_id -userId -productID -isDeleted -verifyTokenExp -verifyToken -forgotPassExp -forgotPassToken -password",
            })


        // console.log(getAllPosts)


        if (getAllPosts.length <= 0) {
            NextResponse.json({ success: false, message: `Posts not found. | 404` }, { status: 404 })
        }



        const response = NextResponse.json({ success: true, data: getAllPosts, message: "All post fetched." })

        response.headers.set("Cache-Controle", "no-store , max-age=0")


        // response.setHeaders("" , "")


        return response

    } catch (error: any) {

        console.log(error.message)
        return NextResponse.json({ success: false, message: `${error.message} (Server Error)` }, { status: 500 })
    }

}



