import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import Home from './pages/Home.tsx'
import { SecondaryPage } from './pages/Secondary.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import { Authenticator } from '@aws-amplify/ui-react'
import { Protect } from './components/Protect.tsx'
import ConfigureAmplify from './components/ConfigureAmplify.tsx'
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ConfigureAmplify />
		<Authenticator.Provider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/secondary"
						element={
							<Protect>
								<SecondaryPage />
							</Protect>
						}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</Authenticator.Provider>
	</StrictMode>
)
