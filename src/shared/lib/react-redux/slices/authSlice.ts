import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../config'

// Define a type for the slice state
interface AuthState {
  user: null | string,
  token: null | string,
  refreshToken: null | string,
  role: null | string
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  role: null
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user_id, access_key, role, refresh_key } = action.payload
      state.user = user_id
      state.token = access_key
      state.role = role
      state.refreshToken = refresh_key
    },
    logOut: (state) => {
        state.user = null
        state.token = null
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.token
export const selectCurrentRole = (state: RootState) => state.auth.role

