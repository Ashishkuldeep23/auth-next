'use client'

import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { RootState } from "../store"



interface ThemeInter {
    mode: boolean,
}

const initialState: ThemeInter = { mode: false }

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {

        // makeDark(state){
        //     state.mode = true;
        // },
        // makeLight(state){
        //     state.mode = false;
        // }


        toggleModeValue(state) {

            // if(!state.mode){
            // }

            if (!state.mode) {
                state.mode = true
                localStorage.setItem("authNext", JSON.stringify(true))
            } else {
                state.mode = false
                localStorage.setItem("authNext", JSON.stringify(false))
            }

        },

        setModeOnLoad(state, action) {
            let { mode } = action.payload

            state.mode = mode
        }



    }
})



export const { toggleModeValue, setModeOnLoad } = themeSlice.actions

export const themeData = () => useSelector((state: RootState) => state.themeReducer)

export default themeSlice.reducer





