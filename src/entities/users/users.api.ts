import { apiSlice } from "~/shared/api/apiSlice"
import { RootInterface } from "./users.types"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        setUser: builder.mutation({
            query: (body) => ({
                url: '/db_service/api/v1/account/set',
                method: 'POST',
                body
            })
        }),
        getRoles: builder.query<RootInterface, void>({
            query: () => '/db_service/api/v1/role/list'
        }),
    })
})

export const {
    useSetUserMutation, useGetRolesQuery
} = usersApiSlice 