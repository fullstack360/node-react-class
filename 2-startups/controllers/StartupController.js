var Startup = require('../models/Startup')

module.exports = {

	get: function(params, completion){
		Startup.find(params, function(err, startups){
			if (err){
				completion(err, null)
				return;
			}

			completion(null, startups)
			return
		})
	},

	getById: function(id, completion){
		Startup.findById(id, function(err, startup){
			if (err){
				completion(err, null)
				return;
			}

			completion(null, startup)
		});
	},

	post: function(params, completion){
		Startup.create(params, function(err, startup){
			if (err){
				completion(err, null)
				return;
			}

			completion(null, startup)
		});
	}

}