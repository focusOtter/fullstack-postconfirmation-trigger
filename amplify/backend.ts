import { defineBackend } from '@aws-amplify/backend'
import { auth } from './auth/resource'
import { addUserToGroup } from './functions/addUserToGroup/resource'

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
	auth,
	addUserToGroup,
})
