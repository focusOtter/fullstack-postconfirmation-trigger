import { defineFunction } from '@aws-amplify/backend'

export const addUserToGroup = defineFunction({
	name: 'add-user-to-group',
	resourceGroupName: 'auth',
	entry: './main.ts',
})
