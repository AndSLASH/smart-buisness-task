import React, { useEffect } from 'react'
import 'bulma/css/bulma.min.css'
import './App.css'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from './app/store'
import { getUsers } from './features/users/usersSlice'
import { UsersTable } from './components/UsersTable'

export const App: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(getUsers())
	}, [dispatch])

	return (
		<section className='section'>
			<div className='container'>
				<h1 className='title is-3 has-text-centered'>User Management Table</h1>

				<div className='box'>
					<UsersTable />
				</div>
			</div>
		</section>
	)
}
