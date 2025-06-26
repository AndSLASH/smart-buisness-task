import React from 'react'
import type { UsersState } from '../../types'

type FilterKey = keyof UsersState['filters']

interface FiltersRowProps {
	filters: UsersState['filters']
	onChange: (key: FilterKey, value: string) => void
}

const columns = ['name', 'username', 'email', 'phone'] as const

export const FiltersRow: React.FC<FiltersRowProps> = ({
	filters,
	onChange,
}) => {
	return (
		<tr>
			{columns.map(key => (
				<th key={key} className='has-background-info-dark'>
					<input
						className='input is-medium is-info'
						type='text'
						placeholder={`Search ${key}`}
						value={filters[key]}
						onChange={e => onChange(key, e.target.value)}
					/>
				</th>
			))}
		</tr>
	)
}
