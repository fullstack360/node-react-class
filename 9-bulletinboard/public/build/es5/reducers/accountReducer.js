"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	currentUser: {
		id: null,
		firstName: "",
		lastName: "",
		email: "",
		password: ""
	}
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];


	switch (action.type) {
		case constants.CURRENT_USER_RECEIVED:
			console.log("CURRENT_USER_RECEIVED: " + JSON.stringify(action.user));
			var newState = Object.assign({}, state);
			newState.currentUser = action.user;
			return newState;


		default:
			return state;

	}
};