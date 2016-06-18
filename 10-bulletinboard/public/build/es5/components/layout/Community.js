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
var api = _interopRequire(require("../../utils/api"));

var Nav = _interopRequire(require("../../components/Nav"));

var actions = _interopRequire(require("../../actions/actions"));

var store = _interopRequire(require("../../stores/store"));

var Community = (function (Component) {
	function Community(props, context) {
		_classCallCheck(this, Community);

		_get(Object.getPrototypeOf(Community.prototype), "constructor", this).call(this, props, context);
		this.updatePost = this.updatePost.bind(this);
		this.submitPost = this.submitPost.bind(this);
		this.fetchPosts = this.fetchPosts.bind(this);
		this.state = {
			post: {
				title: "",
				text: "",
				profile: "",
				community: ""
			}
		};
	}

	_inherits(Community, Component);

	_prototypeProperties(Community, null, {
		componentDidMount: {
			value: function componentDidMount() {
				var _this = this;
				var endpoint = "/api/community?slug=" + this.props.slug;
				api.handleGet(endpoint, null, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}

					var results = response.results;
					store.dispatch(actions.communitiesReceived(results));
					_this.fetchPosts();
				});
			},
			writable: true,
			configurable: true
		},
		fetchPosts: {
			value: function fetchPosts() {
				if (this.props.community.id == null) {
					return;
				}var endpoint = "/api/post?community=" + this.props.community.id;
				api.handleGet(endpoint, null, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}

					// console.log('FETCH POSTS: '+JSON.stringify(response.results))
					store.dispatch(actions.postsReceived(response.results));
				});
			},
			writable: true,
			configurable: true
		},
		updatePost: {
			value: function updatePost(event) {
				var updatedPost = Object.assign({}, this.state.post); // YES
				updatedPost[event.target.id] = event.target.value;
				this.setState({
					post: updatedPost
				});
			},
			writable: true,
			configurable: true
		},
		submitPost: {
			value: function submitPost(event) {
				if (this.props.currentUser.id == null) {
					// not logged in
					alert("Please log in to submit a post.");
					return;
				}

				var newPost = Object.assign({}, this.state.post);
				newPost.community = this.props.community.id;
				newPost.profile = this.props.currentUser.id;

				var _this = this;
				api.handlePost("/api/post", newPost, function (err, response) {
					if (err) {
						alert("ERROR: " + err);
						return;
					}

					_this.setState({
						post: {
							title: "",
							text: "",
							profile: "",
							community: ""
						}
					});

					store.dispatch(actions.postCreated(response.result));
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var postList = this.props.posts.map(function (post, i) {
					return React.createElement(
						"a",
						{ key: post.id, href: "#", className: "list-group-item" },
						React.createElement(
							"h4",
							{ className: "list-group-item-heading" },
							post.title
						),
						React.createElement(
							"p",
							{ className: "list-group-item-text" },
							post.text
						)
					);
				});

				return React.createElement(
					"div",
					null,
					React.createElement(Nav, { transparent: "no" }),
					React.createElement(
						"section",
						{ id: "content", style: { background: "#f9f9f9" } },
						React.createElement(
							"div",
							{ className: "content-wrap" },
							React.createElement(
								"div",
								{ className: "container clearfix" },
								React.createElement(
									"div",
									{ className: "postcontent nobottommargin clearfix" },
									React.createElement(
										"h4",
										null,
										this.props.community.name
									),
									React.createElement("input", { onChange: this.updatePost, id: "title", placeholder: "Post Title", className: "form-control", type: "text" }),
									React.createElement("br", null),
									React.createElement("textarea", { onChange: this.updatePost, id: "text", placeholder: "Post Text", className: "form-control" }),
									React.createElement("br", null),
									React.createElement(
										"button",
										{ onClick: this.submitPost, className: "btn btn-success" },
										"Add Post"
									),
									React.createElement("hr", { style: { borderTop: "1px solid #ddd" } }),
									React.createElement(
										"div",
										{ className: "list-group" },
										postList
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

	return Community;
})(Component);

var stateToProps = function (state) {
	var communitiesArray = state.communityReducer.communitiesArray;

	return {
		community: communitiesArray.length == 0 ? { name: "" } : communitiesArray[0],
		posts: state.postReducer.postsArray,
		currentUser: state.accountReducer.currentUser
	};
};

module.exports = connect(stateToProps)(Community);