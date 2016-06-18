"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var api = _interopRequire(require("../utils/api"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var Nav = (function (Component) {
	function Nav(props, context) {
		_classCallCheck(this, Nav);

		_get(Object.getPrototypeOf(Nav.prototype), "constructor", this).call(this, props, context);
	}

	_inherits(Nav, Component);

	_prototypeProperties(Nav, null, {
		componentDidMount: {
			value: function componentDidMount() {
				api.handleGet("/account/currentuser", null, function (err, response) {
					if (err) {
						return;
					}

					store.dispatch(actions.currentUserReceived(response.user));
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var navClass = this.props.transparent == "yes" ? "transparent-header dark" : "dark";

				return React.createElement(
					"header",
					{ id: "header", className: navClass },
					React.createElement(
						"div",
						{ id: "header-wrap" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(
								"div",
								{ id: "primary-menu-trigger" },
								React.createElement("i", { className: "icon-reorder" })
							),
							React.createElement(
								"div",
								{ id: "logo" },
								React.createElement(
									"a",
									{ href: "/", className: "standard-logo", "data-dark-logo": "/images/logo-dark.png" },
									React.createElement("img", { src: "/images/logo.png", alt: "Canvas Logo" })
								),
								React.createElement(
									"a",
									{ href: "/", className: "retina-logo", "data-dark-logo": "/images/logo-dark@2x.png" },
									React.createElement("img", { src: "/images/logo@2x.png", alt: "Canvas Logo" })
								)
							),
							React.createElement(
								"nav",
								{ id: "primary-menu" },
								React.createElement(
									"ul",
									null,
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "/" },
											React.createElement(
												"div",
												null,
												"Home"
											)
										)
									),
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "/register" },
											React.createElement(
												"div",
												null,
												"Register"
											)
										)
									),
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "/" },
											React.createElement(
												"div",
												null,
												this.props.currentUser.firstName
											)
										)
									)
								)
							)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Nav;
})(Component);

var stateToProps = function (state) {
	return {
		currentUser: state.accountReducer.currentUser
	};
};

module.exports = connect(stateToProps)(Nav);