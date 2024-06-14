import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "~/shared/lib/react-redux/slices/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async ( args, api, extraOptions ) => {
    let result = await baseQuery(args, api, extraOptions)
    console.log(result?.error?.status)

    if(result?.error?.status === 401 || result?.error?.status === 'PARSING_ERROR') {
        console.log('sending refresh token')
        const refreshResult = await baseQuery({ url: '/authentification/refresh', method: "POST", body: { access: api.getState().auth.token, refresh: api.getState().auth.refreshToken}}, api, extraOptions)
        console.log(refreshResult)
        if (refreshResult.data) {
            const user = api.getState().auth.user
            api.dispatch(setCredentials({...refreshResult.data, user}))
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result
}
export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Passengers', 'Employees', 'Orders'],
    endpoints: builder => ({})
})
