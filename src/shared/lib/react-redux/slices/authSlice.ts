import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../config'

const access_token = localStorage.getItem('access_token');
const refresh_token = localStorage.getItem('refresh_token');
const role = localStorage.getItem('role');
const fio = localStorage.getItem('fio');

// Define a type for the slice state
interface AuthState {
  user: null | string,
  token: null | string,
  refreshToken: null | string,
  role: null | string,
  fio: null | string
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  token: access_token || null,
  refreshToken: refresh_token || null,
  role: role || null,
  fio: fio || null
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user_id, access_key, role, refresh_key, fio } = action.payload
      state.user = user_id
      state.token = access_key
      state.role = role
      state.refreshToken = refresh_key
      state.fio = fio
      localStorage.setItem('access_token', String(access_key))
      localStorage.setItem('refresh_token', String(refresh_key))
      localStorage.setItem('role', String(role))
      localStorage.setItem('fio', String(fio))
    },
    refreshCredentials: (state, action) => {
      const { access, refresh } = action.payload
      state.token = access
      state.refreshToken = refresh

      localStorage.setItem('access_token', String(access))
      localStorage.setItem('refresh_token', String(refresh))
    },
    logOut: (state) => {
        state.user = null
        state.token = null
        state.role = null
      state.refreshToken = null
      state.fio = null
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('role')
        localStorage.removeItem('fio')
    },
  },
})

export const { setCredentials, logOut, refreshCredentials } = authSlice.actions

export default authSlice.reducer

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.token
export const selectCurrentRole = (state: RootState) => state.auth.role
export const selectCurrentFio = (state: RootState) => state.auth.fio

