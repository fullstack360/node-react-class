import constants from '../constants/constants'

var initialState = {
	currentUser: {
		id: null,
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	}
}

export default function(state = initialState, action){

	switch (action.type) {
		case constants.CURRENT_USER_RECEIVED:
			console.log('CURRENT_USER_RECEIVED: '+JSON.stringify(action.user))
			var newState = Object.assign({}, state)
			newState['currentUser'] = action.user
			return newState


		default:
			return state

	}

}