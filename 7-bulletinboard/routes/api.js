var express = require('express');
var router = express.Router();
var communityController = require('../controllers/CommunityController')
var profileController = require('../controllers/ProfileController')
var controllers = {
	community: communityController,
	profile: profileController
}


router.get('/:resource', function(req, res, next) {

	var resource = req.params.resource
	var controller = controllers[resource]
	if (controller == null){
		res.json({
	    	confirmation: 'fail',
	    	message: 'Invalid Resource'
		})
		return
	}

	controller.get(req.query, function(err, results){
		if (err){
			res.json({
		    	confirmation: 'fail',
		    	message: 'Invalid Resource'
			})
			return
		}

		res.json({
	    	confirmation: 'success',
	    	results: results
		})
	})
});

router.get('/:resource/:id', function(req, res, next) {

	var resource = req.params.resource
	var id = req.params.id

	var controller = controllers[resource]
	if (controller == null){
		res.json({
	    	confirmation: 'fail',
	    	message: 'Invalid Resource'
		})
		return
	}

	controller.get({id:id}, function(err, result){
		if (err){
			res.json({
		    	confirmation: 'fail',
		    	message: err.message
			})
			return
		}

		res.json({
	    	confirmation: 'success',
	    	result: result
		})
	})
});


router.post('/:resource', function(req, res, next) {

	var resource = req.params.resource
	var controller = controllers[resource]
	if (controller == null){
		res.json({
	    	confirmation: 'fail',
	    	message: 'Invalid Resource'
		})
		return
	}

	controller.post(req.body, function(err, result){
		if (err){
			res.json({
		    	confirmation: 'fail',
		    	message: 'Invalid Resource'
			})
			return
		}

		res.json({
	    	confirmation: 'success',
	    	result: result
		})
	})
});


module.exports = router;
