'use client'

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import toast from "react-hot-toast"




type BodyData = {
    email: string,
    password: string,
    username: string,
}


export const createNewUser = createAsyncThunk('user/createNewUser', async (body: BodyData) => {



    const option: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }
    const response = await fetch('/api/users/signup', option)
    let data = await response.json();
    return data



    // const response = await axios.post("/api/users/signup", body)
    // return response.data



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

                    toast.error(`${action.payload.message || "SignUp Error"}`)

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

                toast.error(` ${action.error.message || "SignUp failed"}`)

            })



    }
})



export const { } = userSlice.actions

export const useUserState = () => useSelector((state: RootState) => state.userReducer)

export default userSlice.reducer





