import constants from '../constants/constants'

export default {

	communityCreated: function(community){
		return {
			type: constants.COMMUNITY_CREATED,
			community: community
		}
	},

	communitiesReceived: function(communities){
		return {
			type: constants.COMMUNITIES_RECEIVED,
			communities: communities
		}
	},


	currentUserReceived: function(user){
		return {
			type: constants.CURRENT_USER_RECEIVED,
			user: user
		}
	}

	
}







