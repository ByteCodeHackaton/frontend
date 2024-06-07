import { apiSlice } from "~/shared/api/apiSlice"
import { Detail, RootInterface } from "./employees.types"

export const employeesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getEmployees: builder.query<RootInterface, void>({
            query: () => '/api/v1/employee/list',
            keepUnusedDataFor: 5,
        }),
        setEmployee: builder.query<any, Detail>({
            query: (body) => ({
                url: '/api/v1/employee/set',
                method: 'POST',
                body
            })
        })
    })
})

export const {
    useGetEmployeesQuery, useLazySetEmployeeQuery
} = employeesApiSlice 