import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import { fetchUsers } from './fetchUsers'
import type { UsersState } from '../../types'

const initialState: UsersState = {
	data: [],
	filters: {
		name: '',
		username: '',
		email: '',
		phone: '',
	},
	loading: false,
	error: null,
}

export const getUsers = createAsyncThunk('users/fetch', fetchUsers)

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setFilter(
			state,
			action: PayloadAction<{ key: keyof UsersState['filters']; value: string }>
		) {
			state.filters[action.payload.key] = action.payload.value
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getUsers.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.data = action.payload
				state.loading = false
			})
			.addCase(getUsers.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message ?? 'Error'
			})
	},
})

export const { setFilter } = usersSlice.actions
export const usersReducer = usersSlice.reducer
