import { fetchAuthSession } from 'aws-amplify/auth'
import { useEffect, useState } from 'react'
export function SecondaryPage() {
	const [userGroup, setUserGroup] = useState('')
	const [username, setUsername] = useState('')

	useEffect(() => {
		fetchAuthSession().then(({ tokens }) => {
			const idTokenPayload = tokens?.idToken?.payload
			console.log(idTokenPayload)
			const groups = idTokenPayload?.['cognito:groups'] as string[]
			if (groups) {
				setUserGroup(groups[0])
			}
			const name = idTokenPayload?.['name'] as string
			if (name) {
				setUsername(name)
			}
		})
	}, [])

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-base-200">
			<h1 className="text-4xl font-bold">Welcome {username}</h1>
			<p className="text-2xl font-bold">You are a {userGroup}</p>
		</div>
	)
}

export default SecondaryPage
