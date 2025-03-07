import { Link } from 'react-router'

function Home() {
	return (
		<>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Post Confirmation Trigger</h1>
						<p className="py-6">
							Amazon Cognito allows you to trigger a function after a user
							confirms their email. This is a simple example of how to use it
							with custom cognito attributes.
						</p>

						<Link to="/secondary" className="btn btn-primary">
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
