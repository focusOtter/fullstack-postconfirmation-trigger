import { Amplify } from 'aws-amplify'
import awsconfig from '../../amplify_outputs.json'

Amplify.configure(awsconfig)

function ConfigureAmplify() {
	return null
}

export default ConfigureAmplify
