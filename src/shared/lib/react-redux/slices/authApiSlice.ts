import { apiSlice } from "~/shared/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/authentification',
                method: 'POST',
                body: credentials
            })
        }),
    })
})

export const {
    useLoginMutation
} = authApiSlice