'use client'

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import toast from "react-hot-toast"
import axios from "axios"




type BodyData = {
    email: string,
    password: string,
    username: string,
}


export const createNewUser = createAsyncThunk('user/createNewUser', async (body: BodyData) => {



    // const option = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: body
    // }
    // const response = await fetch('', option)
    // let data = await response.json();
    // return data



    // try {

    const response = await axios.post("/api/users/signup", body)

    // console.log(response)

    return response.data

    // } catch (error: any) {

    // console.log("SignUp failed", error.message)
    // // alert("SignUp failed")

    // toast.error("SignUp failed")
    // }


})




export interface UserDataInterface {
    username: string,
    email: string,
    isVerified: boolean,
    isAdmin: boolean,
}



interface ThemeInter {
    isLoading: boolean,
    isFullfilled: boolean,
    isError: boolean,
    userData: UserDataInterface
}

const initialState: ThemeInter = {

    isLoading: false,
    isFullfilled: false,
    isError: false,
    userData: {
        username: "",
        email: "",
        isVerified: false,
        isAdmin: false
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {


    },
    extraReducers: (builder) => {
        builder
            // // // SingUp user --------->
            .addCase(createNewUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createNewUser.fulfilled, (state, action) => {
                // console.log(action.payload)

                if (action.payload.status === false) {

                    state.isError = true

                } else {

                    state.userData = action.payload.data
                    toast.success(`${action.payload.message}`)

                    state.isFullfilled = true
                }


                // console.log(action.payload.message)

                state.isLoading = false

            })
            .addCase(createNewUser.rejected, (state, action) => {

                // console.log(action)

                state.isLoading = false
                state.isError = true

                toast.error("SignUp failed")

            })



    }
})



export const { } = userSlice.actions

export const useUserState = () => useSelector((state: RootState) => state.userReducer)

export default userSlice.reducer





