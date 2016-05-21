var constants = require('../constants/constants');
var store = require('../stores/store');

module.exports = {

	startupsReceived: function(startups){
		return {
			type: constants.STARTUPS_RECEIVED,
			startups: startups
		};
	},

	startupCreated: function(startup){
		return {
			type: constants.STARTUP_CREATED,
			startup: startup
		};
	}

};