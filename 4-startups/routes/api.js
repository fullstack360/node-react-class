var express = require('express');
var router = express.Router();
var StartupController = require('../controllers/StartupController');
var ProfileController = require('../controllers/ProfileController');
var controllers = {
	startup: StartupController,
	profile: ProfileController
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
				confirmation:'fail',
				message: err
			})

			return;
		}

		res.json({
			confirmation:'success',
			results: results
		})

		return
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

	controller.getById(id, function(err, result){
		if (err){
			res.json({
				confirmation:'fail',
				message: 'Not Found'
			})
			return;
		}

		res.json({
			confirmation:'success',
			results: result
		})

		return
	});

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

	controller.post(req.body, function(err, startup){
		if (err){
			res.json({
				confirmation:'fail',
				message: err
			})

			return;
		}

		res.json({
			confirmation:'success',
			results: startup
		})

		return
	})



});




module.exports = router;
