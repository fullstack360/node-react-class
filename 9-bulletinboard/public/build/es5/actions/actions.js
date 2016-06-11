"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

module.exports = {

	communityCreated: function (community) {
		return {
			type: constants.COMMUNITY_CREATED,
			community: community
		};
	},

	communitiesReceived: function (communities) {
		return {
			type: constants.COMMUNITIES_RECEIVED,
			communities: communities
		};
	},


	currentUserReceived: function (user) {
		return {
			type: constants.CURRENT_USER_RECEIVED,
			user: user
		};
	}


};