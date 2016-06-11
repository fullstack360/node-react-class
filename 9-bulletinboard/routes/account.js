var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var profileController = require('../controllers/ProfileController')


router.get('/:action', function(req, res, next) {

	var action = req.params.action
	if (action == 'logout'){
		req.session.reset()
		res.json({
			confirmation:'success',
			message: 'Bye!'
		})
		
		return
	}

	if (action == 'currentuser'){

		if (req.session == null){
			res.json({confirmation:'fail', message: 'User not logged in'})
			return
		}

		if (req.session.user == null){
			res.json({confirmation:'fail', message: 'User not logged in'})
			return
		}

		profileController.get({id: req.session.user}, function(err, result){
			if (err){
				res.json({confirmation:'fail', message: 'User not found'})
				return
			}

			res.json({
				confirmation:'success',
				user: result
			})
			return
		})

	}

});


router.post('/:action', function(req, res, next) {

	var action = req.params.action
	if (action == 'login'){
		var credentials = req.body // email, password

		profileController.get({email: credentials.email}, function(err, results){
			if (err){
				res.json({
					confirmation:'fail',
					message: err
				})

				return
			}

			if (results.length == 0){
				res.json({
					confirmation:'fail',
					message: 'User Not Found. Please check Spelling.'
				})

				return
			}

			var profile = results[0]

			// check password
			var passwordCorrect = bcrypt.compareSync(credentials.password, profile.password);			
			if (passwordCorrect == false){
				res.json({
					confirmation:'fail',
					message: 'Incorrect Password'
				})

				return
			}


			req.session.user = profile.id // install cookie to track current user
			res.json({
				confirmation:'success',
				user: profile
			})

			return
		})
	}


});



module.exports = router;
