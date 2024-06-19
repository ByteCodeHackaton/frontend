import { apiSlice } from "~/shared/api/apiSlice"
import { Detail, IActiveGetRootInterface, IActiveRootInterface, IBodyRootInterface, ICategoryRootInterface, IStatusesRootInterface, RootInterface } from "./orders.types"

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getOrders: builder.query<RootInterface, {limit: number, off: number}>({
            query: (args) => ({
                url: '/db_service/api/v1/order/list',
                method: 'GET',
                params: {
                    limit: args.limit,
                    off: args.off
                }
            }),
            providesTags: ['Orders']
        }),
        setOrder: builder.query<any, Detail>({
            query: (body) => ({
                url: '/db_service/api/v1/order/set',
                method: 'POST',
                body
            })
        }),
        updateOrder: builder.mutation({
            query: ({body, params}) => ({
                url: '/db_service/api/v1/order/update',
                method: 'POST',
                body: 
                {
                    cat_pas: body.cat_pas,
                    datetime: body.datetime,
                    id_pas: body.id_pas,
                    id_st1: body.id_st1,
                    id_st2: body.id_st2,
                    insp_sex_f: body.insp_sex_f,
                    insp_sex_m: body.insp_sex_m,
                    status: body.status,
                    time3: body.time3,
                    time4: body.time4,
                    time_over: body.time_over,
                    tpz: body.tpz,
                    id: params.id
                  },
            }),
            invalidatesTags: ['Orders']
        }),
        deleteOrder: builder.mutation<any, {id: string}>({
            query: (body) => ({
                url: '/db_service/api/v1/order/delete',
                method: 'DELETE',
                params: { id: body.id }
            }),
            invalidatesTags: ['Orders']
        }),
        getOrdersStatuses: builder.query<IStatusesRootInterface, void>({
            query: () => ({
                url: '/db_service/api/v1/order/state/list',
                method: 'GET',
            })
        }),
        getCategories: builder.query<ICategoryRootInterface, void>({
            query: () => ({
                url: '/db_service/api/v1/category/list',
                method: 'GET',
            })
        }),
        setActive: builder.query<IActiveRootInterface, IBodyRootInterface>({
            query: (body) => ({
                url: '/orders_service/orders/request ',
                method: 'POST',
                body
            })
        }),
        getActive: builder.query<IActiveGetRootInterface, void>({
            query: () => ({
                url: '/orders_service/orders',
                method: 'GET',
            })
        }),
        getActiveEmployees: builder.query<IActiveRootInterface, { id: string }>({
            query: (params) => ({
                url: '/orders_service/orders/find',
                method: 'GET',
                params
            })
        }),
    })
})

export const {
    useGetOrdersQuery, useLazySetOrderQuery, useDeleteOrderMutation, useUpdateOrderMutation, useGetOrdersStatusesQuery, useGetCategoriesQuery, useLazySetActiveQuery, useGetActiveQuery, useGetActiveEmployeesQuery
} = ordersApiSlice 