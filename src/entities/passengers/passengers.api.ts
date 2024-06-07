import { apiSlice } from "~/shared/api/apiSlice"
import { Detail, RootInterface } from "./types"

export const passengersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPassengers: builder.query<RootInterface, void>({
            query: () => '/api/v1/passenger/list',
            keepUnusedDataFor: 5,
        }),
        getPassenger: builder.query<Detail, { fio?: string, phone?: string }>({
            query: (args) => ({
                url: `/api/v1/passenger`,
                method: 'GET',
                params: args
            })
        }),
        setPassenger: builder.query<any, Detail>({
            query: (body) => ({
                url: '/api/v1/passenger/set',
                method: 'POST',
                body
            })
        })
    })
})

export const {
    useGetPassengersQuery, useLazySetPassengerQuery, useLazyGetPassengerQuery
} = passengersApiSlice 