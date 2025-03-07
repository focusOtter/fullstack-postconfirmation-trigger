import { Link } from 'react-router'
import ThemeController from './ThemeController'
import { useAuthenticator } from '@aws-amplify/ui-react'
function Navbar() {
	const { user, signOut } = useAuthenticator((context) => [context.user])
	return (
		<div className="navbar bg-base-100 shadow-sm w-full absolute top-0 z-50">
			<div className="navbar-start">
				<Link to="/" className="btn btn-ghost text-xl">
					Starter
				</Link>
			</div>

			<div className="navbar-end">
				<div className="flex flex-row gap-2">
					{user ? (
						<button className="btn btn-primary" onClick={signOut}>
							Sign Out
						</button>
					) : (
						<a href="/secondary" className="btn btn-primary">
							Login
						</a>
					)}
					<ThemeController />
				</div>
			</div>
		</div>
	)
}

export default Navbar
