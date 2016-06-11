"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var api = _interopRequire(require("../../utils/api"));

var Community = (function (Component) {
	function Community(props, context) {
		_classCallCheck(this, Community);

		_get(Object.getPrototypeOf(Community.prototype), "constructor", this).call(this, props, context);
		this.state = {
			community: {
				name: ""
			}

		};
	}

	_inherits(Community, Component);

	_prototypeProperties(Community, null, {
		componentDidMount: {
			value: function componentDidMount() {
				//		console.log('SLUG == '+this.props.slug)

				var _this = this;
				var endpoint = "/api/community?slug=" + this.props.slug;
				api.handleGet(endpoint, null, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}

					var results = response.results;
					var community = results[0];
					_this.setState({
						community: community
					});
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"h2",
						null,
						this.state.community.name
					),
					React.createElement(
						"ol",
						null,
						React.createElement(
							"li",
							null,
							"Post"
						),
						React.createElement(
							"li",
							null,
							"Post"
						),
						React.createElement(
							"li",
							null,
							"Post"
						),
						React.createElement(
							"li",
							null,
							"Post"
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Community;
})(Component);

module.exports = Community;