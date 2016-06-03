var express = require('express');
var router = express.Router();

require('node-jsx').install({ extension: ".js" });
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var ServerApp = require('../public/build/es5/ServerApp');

router.get('/', function(req, res, next) {

	// convert react code into HTML:
	var html = ReactDOMServer.renderToString(React.createElement(ServerApp, {page:'home'}));
    res.render('index', {react:html});

});


router.get('/:page', function(req, res, next) {
	var page = req.params.page

	// convert react code into HTML:
	var html = ReactDOMServer.renderToString(React.createElement(ServerApp, {page:page}));
    res.render(page, {react:html});

});


module.exports = router;
