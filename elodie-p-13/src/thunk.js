import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProfile, setUserProfile, signin } from "./api";

export const signinThunk = createAsyncThunk(
    'user/signin',
    async (data) => {
        const res = await signin(data.email, data.password)
        return (await res.json()).body
      },
)

export const getUserProfileThunk = createAsyncThunk(
    'user/getUserProfile',
    async (token) => {
        const res = await getUserProfile(token)
        return (await res.json()).body

      },
)

export const setUserProfileThunk = createAsyncThunk(
    'user/setUserProfile',
    async (data) => {
        const res = await setUserProfile(data.firstName, data.lastName, data.token)
        return (await res.json()).body
      },
)