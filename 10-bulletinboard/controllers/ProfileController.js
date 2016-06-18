var Profile = require('../models/Profile');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


// - - - - - - - - - - - - - - - - - - - - HELPER METHODS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function convertToJson(profiles){
	var results = new Array();
    for (var i=0; i<profiles.length; i++){
  	  var p = profiles[i];
  	  results.push(p.summary());
    }
	
	return results;
}

module.exports = {

	pluralKey: function(){
		return 'profiles';
	},

	get: function(params, completion){

		// fetch specific Course by ID:
		if (params.id != null){ 
			Profile.findById(params.id, function(err, profile){
				if (err){
					completion({message:'Profile '+params.id+' not found'}, null);
					return;
				}
				
				if (profile == null){
					completion({message:'Profile '+params.id+' not found'}, null);
					return;
				}

				completion(null, profile.summary());
			});
			return;
		}
		
		
		/* Query by filters passed into parameter string: */
		var limit = params.limit;
		if (limit == null)
			limit = 0;
		
		delete params['limit'];
		
		Profile.find(params, null, {limit:limit, sort:{priority: -1}}, function(err, profiles) {
			if (err) {
				completion({confirmation:'fail', message:err.message}, null);
				return;
			}
			
			completion(null, convertToJson(profiles));
		});
	},

	post: function(profileInfo, completion){
		var password = profileInfo['password']
		profileInfo['password'] = bcrypt.hashSync(password, 10)

		Profile.create(profileInfo, function(err, profile){
			if (err){
				completion({confirmation:'fail', message:err.message}, null);
				return;
			}
			
			completion(null, profile.summary());
			return;
		});
	},



	put: function(id, profileInfo, completion){
		Profile.findByIdAndUpdate(id, profileInfo, {new:true}, function(err, profile){
			if (err){
				completion({confirmation:'fail', message:err.message}, null);
				return;
			}
			
			completion(null, profile.summary());
			return;
		});		
	},

	delete: function(){

	}

}



