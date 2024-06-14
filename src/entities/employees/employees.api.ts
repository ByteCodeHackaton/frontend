import { apiSlice } from "~/shared/api/apiSlice"
import { Detail, IRanksRoot, IWorkday, RootInterface } from "./employees.types"

export const employeesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getEmployees: builder.query<RootInterface, {limit: number, off: number}>({
            query: (args) => ({
                url: '/db_service/api/v1/employee/list',
                method: 'GET',
                params: {
                    limit: args.limit,
                    off: args.off
                }
            }),
            providesTags: ['Employees']
        }),
        setEmployee: builder.query<any, Detail>({
            query: (body) => ({
                url: '/db_service/api/v1/employee/set',
                method: 'POST',
                body
            })
        }),
        updateEmployee: builder.mutation({
            query: ({body, params}) => ({
                url: '/db_service/api/v1/employee/update',
                method: 'POST',
                body: {
                    date: body.date,
                    time_work: body.time_work,
                    fio: body.fio,
                    uchastok: body.uchastok,
                    smena: body.smena,
                    rank: body.rank,
                    sex: body.sex,
                    phone_work: body.phone_work,
                    phone_personal: body.phone_personal,
                    tab_number: body.tab_number,
                    type_work: body.type_work,
                  },
                params: { id: params.id }
            }),
            invalidatesTags: ['Employees']
        }),
        deleteEmployee: builder.mutation<any, {id: string}>({
            query: (body) => ({
                url: '/db_service/api/v1/employee/delete',
                method: 'GET',
                params: { id: body.id }
            }),
            invalidatesTags: ['Employees']
        }),
        getEmployeeRanks: builder.query<IRanksRoot, any>({
            query: () => ({
                url: '/db_service/api/v1/rank/list',
                method: 'GET',
            })
        }),
        setWorkday: builder.query<any, IWorkday>({
            query: (body) => ({
                url: '/db_service/api/v1/workday/set',
                method: 'POST',
                body
            })
        }),
    })
})

export const {
    useGetEmployeesQuery, useLazySetEmployeeQuery, useGetEmployeeRanksQuery, useDeleteEmployeeMutation, useUpdateEmployeeMutation, useLazySetWorkdayQuery
} = employeesApiSlice 