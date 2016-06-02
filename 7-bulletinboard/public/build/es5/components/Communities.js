"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var api = _interopRequire(require("../utils/api"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var connect = require("react-redux").connect;
var Communities = (function (Component) {
	function Communities(props, context) {
		_classCallCheck(this, Communities);

		_get(Object.getPrototypeOf(Communities.prototype), "constructor", this).call(this, props, context);
		this.updateNewCommunity = this.updateNewCommunity.bind(this);
		this.addCommunity = this.addCommunity.bind(this);
		this.state = {
			newCommunity: {
				name: "",
				city: "",
				address: "",
				state: ""
			}
		};
	}

	_inherits(Communities, Component);

	_prototypeProperties(Communities, null, {
		componentDidMount: {
			value: function componentDidMount() {
				api.handleGet("/api/community", null, function (err, response) {
					if (err) {
						alert("OOPS! " + err);
						return;
					}

					store.dispatch(actions.communitiesReceived(response.results));
				});
			},
			writable: true,
			configurable: true
		},
		addCommunity: {
			value: function addCommunity(event) {
				//		console.log('Add Community: '+JSON.stringify(this.state.newCommunity))
				api.handlePost("/api/community", this.state.newCommunity, function (err, response) {
					if (err) {
						alert("OOPS - " + err);
						return;
					}

					console.log("Community CREATED: " + JSON.stringify(response));
					store.dispatch(actions.communityCreated(response.result));
				});
			},
			writable: true,
			configurable: true
		},
		updateNewCommunity: {
			value: function updateNewCommunity(event) {
				//		console.log('updateNewCommunity: '+event.target.id+' = '+event.target.value)
				var community = Object.assign({}, this.state.newCommunity);
				community[event.target.id] = event.target.value;
				this.setState({
					newCommunity: community
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var list = this.props.communities.map(function (community, i) {
					return React.createElement(
						"li",
						{ key: community.id },
						community.name,
						", ",
						community.city
					);
				});

				return React.createElement(
					"div",
					null,
					React.createElement(
						"ol",
						null,
						list
					),
					React.createElement(
						"h3",
						null,
						"Add Community"
					),
					React.createElement("input", { onChange: this.updateNewCommunity, type: "text", id: "name", name: "name", placeholder: "Name" }),
					React.createElement("br", null),
					React.createElement("input", { onChange: this.updateNewCommunity, type: "text", id: "address", name: "address", placeholder: "Address" }),
					React.createElement("br", null),
					React.createElement("input", { onChange: this.updateNewCommunity, type: "text", id: "city", name: "city", placeholder: "City" }),
					React.createElement("br", null),
					React.createElement("input", { onChange: this.updateNewCommunity, type: "text", id: "state", name: "state", placeholder: "State" }),
					React.createElement("br", null),
					React.createElement(
						"button",
						{ onClick: this.addCommunity },
						"Add"
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Communities;
})(Component);

var stateToProps = function (state) {
	console.log("STATE TO PROPS: " + JSON.stringify(state));
	return {
		communities: state.communityReducer.communitiesArray
	};
};

module.exports = connect(stateToProps)(Communities);