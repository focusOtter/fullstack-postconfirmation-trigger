import type { PostConfirmationTriggerHandler } from 'aws-lambda'
import {
	CognitoIdentityProviderClient,
	AdminAddUserToGroupCommand,
} from '@aws-sdk/client-cognito-identity-provider'

const client = new CognitoIdentityProviderClient()

export const handler: PostConfirmationTriggerHandler = async (event) => {
	const groupName = event.request.userAttributes['custom:categoryName']
	const command = new AdminAddUserToGroupCommand({
		GroupName: groupName,
		Username: event.userName,
		UserPoolId: event.userPoolId,
	})

	await client.send(command)
	return event
}
