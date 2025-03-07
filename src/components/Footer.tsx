function Footer() {
	return (
		<footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 fixed bottom-0 w-full">
			<aside>
				<p>
					Copyright © {new Date().getFullYear()} - Made with ❤️ by{' '}
					<a
						className="link link-hover"
						href="https://focusotter.com"
						target="_blank"
						rel="noreferrer"
					>
						Focus Otter 🦦
					</a>
				</p>
			</aside>
		</footer>
	)
}

export default Footer
