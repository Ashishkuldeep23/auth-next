import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {

    try {

        return NextResponse.json({ success: true, data: ["data1", "data2"], message: "User created." }, { status: 201 })

    } catch (error: any) {

        console.log(error.message)
    }

}



