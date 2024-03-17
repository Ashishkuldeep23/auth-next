'use client'

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import toast from "react-hot-toast"




export const getAllPosts = createAsyncThunk('post/getAllPost', async () => {


    const response = await fetch('/api/post/all')
    let data = await response.json();
    return data

    // const response = await axios.post("/api/users/signup", body)
    // return response.data
})




export interface PostInterFace {
    id : string,
    title: string,
    category: string,
    promptReturn: string,
    urlOfPrompt: string,
    aiToolName: {
        type: String,
        trim: true,
        default: '',
    },
    hashthats: string[],
    likes: 0,
    likesId: [],
    comments: [],
    isDeleted: false
}



interface PostSliceInterFace {
    isLoading: boolean,
    isFullfilled: boolean,
    isError: boolean,
    errMsg: string,
    allPost: PostInterFace[]
}

const initialState: PostSliceInterFace = {
    isLoading: false,
    isFullfilled: false,
    isError: false,
    errMsg: "",
    allPost: []
}

const psotSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {



    },

    extraReducers: (builder) => {

        builder

            .addCase(getAllPosts.pending, (state) => {
                state.isLoading = true
                state.errMsg = ''
            })

            .addCase(getAllPosts.fulfilled, (state, action) => {

                // console.log(action.payload)

                if (action.payload.success === true) {

                    state.allPost = action.payload.data
                    // toast.success(`${action.payload.message}`)
                    state.isFullfilled = true

                } else {
                    toast.error(`${action.payload.message || "Fetch failed."}`)
                    state.isError = true
                    state.errMsg = action.payload.message
                }

                state.isLoading = false

            })

            .addCase(getAllPosts.rejected, (state, action) => {

                state.isLoading = false
                state.isError = true
                toast.error(` ${action.error.message || "SignUp failed"}`)
                state.errMsg = action.error.message || 'Error'
            })


    }
})



export const { } = psotSlice.actions

export const usePostData = () => useSelector((state: RootState) => state.postReducer)

export default psotSlice.reducer





