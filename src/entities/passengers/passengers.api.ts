import { apiSlice } from "~/shared/api/apiSlice"
import { Detail, RootInterface } from "./types"

export const passengersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPassengers: builder.query<RootInterface, void>({
            query: () => '/api/v1/passenger/list',
            providesTags: ['Passengers']
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
        }),
        updatePassenger: builder.mutation({
            query: ({body, params}) => ({
                url: '/api/v1/passenger/update',
                method: 'POST',
                body: {
                    id: body.id,
                    fio: body.fio,
                    category: body.category,
                    eks: body.eks,
                    sex: body.sex,
                    description: body.description,
                    phone: body.phone,
                  },
                params: { id: params.id },
            }),
            invalidatesTags: ['Passengers']
        }),
        deletePassenger: builder.mutation<any, {id: string}>({
            query: (body) => ({
                url: '/api/v1/passenger/delete',
                method: 'GET',
                params: { id: body.id }
            }),
            invalidatesTags: ['Passengers']
        }),
    }),
    
})

export const {
    useGetPassengersQuery, useLazySetPassengerQuery, useLazyGetPassengerQuery, useUpdatePassengerMutation, useLazyGetPassengersQuery, useDeletePassengerMutation
} = passengersApiSlice 