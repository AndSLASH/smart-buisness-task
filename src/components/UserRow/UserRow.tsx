import React from 'react'
import type { User } from '../../types'

interface UserRowProps {
	user: User
}

export const UserRow: React.FC<UserRowProps> = ({ user }) => {
	return (
		<tr key={user.id}>
			<td>{user.name}</td>
			<td>{user.username}</td>
			<td>{user.email}</td>
			<td>{user.phone}</td>
		</tr>
	)
}
