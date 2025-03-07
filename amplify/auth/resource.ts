import { defineAuth } from '@aws-amplify/backend'
import { addUserToGroup } from '../functions/addUserToGroup/resource'

export const auth = defineAuth({
	loginWith: {
		email: {
			verificationEmailSubject: "Welcome! Let's put you in a group",
			verificationEmailBody(createCode: () => string) {
				return `
					Pretty fun tutorial, right?

					Click the link below to verify your email:
					${createCode()}
					`
			},
		},
	},
	groups: ['founder', 'developer', 'designer', 'marketer'],
	userAttributes: {
		fullname: {
			required: true,
		},
		'custom:categoryName': {
			dataType: 'String',
			mutable: true,
		},
	},
	triggers: {
		postConfirmation: addUserToGroup,
	},
	access: (allow) => [allow.resource(addUserToGroup).to(['addUserToGroup'])],
})
