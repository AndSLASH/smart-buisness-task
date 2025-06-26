import type React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../../app/store'
import { setFilter } from '../../features/users'
import { filterUsers } from '../../utils/filterUsers'
import type { UsersState } from '../../types'
import { UserRow } from '../UserRow'
import { FiltersRow } from '../FiltersRow'

type FilterKey = keyof UsersState['filters']

export const UsersTable: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const {
		data: users,
		filters,
		loading,
		error,
	} = useSelector((state: RootState) => state.users)

	const handleFilterChange = (key: FilterKey, value: string) => {
		dispatch(setFilter({ key, value }))
	}

	const filteredUsers = filterUsers(users, filters)

	if (loading)
		return (
			<progress className='progress is-small is-primary' max='100'>
				Loading
			</progress>
		)
	if (error) return <div className='notification is-danger'>Error: {error}</div>

	const columns = [
		{ key: 'name', label: 'Name' },
		{ key: 'username', label: 'Username' },
		{ key: 'email', label: 'Email' },
		{ key: 'phone', label: 'Phone' },
	] as const

	return (
		<div className='table-container'>
			<table className='table is-bordered is-striped is-fullwidth'>
				<thead>
					<tr>
						{columns.map(col => (
							<th key={col.key}>{col.label}</th>
						))}
					</tr>
					<FiltersRow filters={filters} onChange={handleFilterChange} />
				</thead>
				<tbody>
					{filteredUsers.map(user => (
						<UserRow key={user.id} user={user} />
					))}
				</tbody>
			</table>
		</div>
	)
}
