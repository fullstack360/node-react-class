"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var CommunityPreview = (function (Component) {
    function CommunityPreview() {
        _classCallCheck(this, CommunityPreview);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(CommunityPreview, Component);

    _prototypeProperties(CommunityPreview, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "entry clearfix" },
                    React.createElement(
                        "div",
                        { className: "entry-image hidden-sm" },
                        React.createElement(
                            "a",
                            { href: "/community/" + this.props.community.slug },
                            React.createElement("img", { src: "/images/events/thumbs/1.jpg", alt: "tenetur" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "entry-c" },
                        React.createElement(
                            "div",
                            { className: "entry-title" },
                            React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/community/" + this.props.community.slug },
                                    this.props.community.name
                                )
                            )
                        ),
                        React.createElement(
                            "ul",
                            { className: "entry-meta clearfix" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("i", { className: "icon-time" }),
                                    " ",
                                    this.props.community.address
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("i", { className: "icon-map-marker2" }),
                                    " ",
                                    this.props.community.city
                                )
                            )
                        ),
                        React.createElement("hr", { style: { borderTop: "1px solid #ddd" } }),
                        React.createElement(
                            "div",
                            { className: "entry-content" },
                            React.createElement(
                                "a",
                                { href: "/community/" + this.props.community.slug, className: "btn btn-danger" },
                                "Visit"
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return CommunityPreview;
})(Component);

module.exports = CommunityPreview;