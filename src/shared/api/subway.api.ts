import { apiSlice } from "~/shared/api/apiSlice"
import { IPathRootInterface, RootInterface } from "./subway.types"

export const subwayApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getStations: builder.query<RootInterface, void>({
            query: () => ({
                url: '/subway/stations',
                method: 'GET'
            }),
        }),
        getPath: builder.query<IPathRootInterface, { from: string, to: string }>({
            query: ({ from, to }) => ({
                url: '/subway/path',
                method: 'GET',
                params: {
                    from,
                    to
                }
            }),
        }),
    })
})

export const {
    useGetStationsQuery, useLazyGetPathQuery
} = subwayApiSlice 