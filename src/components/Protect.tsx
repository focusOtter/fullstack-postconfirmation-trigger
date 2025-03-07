import { SelectField } from '@aws-amplify/ui-react'
import { Authenticator } from '@aws-amplify/ui-react'

export function Protected({ children }: { children: React.ReactNode }) {
	const formFields = {
		signUp: {
			name: {
				label: 'Full Name',
				order: -1,
				placeholder: 'Enter your full name',
				required: true,
			},
		},
	}

	return (
		<Authenticator
			className="flex flex-col items-center justify-center h-screen bg-base-200"
			formFields={formFields}
			components={{
				SignUp: {
					FormFields() {
						return (
							<>
								<Authenticator.SignUp.FormFields />
								<SelectField
									label="Category"
									name="custom:categoryName"
									descriptiveText="How do you best describe yourself?"
									required
								>
									<option value="founder">Founder</option>
									<option value="developer">Developer</option>
									<option value="designer">Designer</option>
									<option value="marketer">Marketer</option>
								</SelectField>
							</>
						)
					},
				},
			}}
		>
			{children}
		</Authenticator>
	)
}
