var Community = require('../models/Community');
var mongoose = require('mongoose');


// - - - - - - - - - - - - - - - - - - - - HELPER METHODS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function convertToJson(communities){
	var results = new Array();
    for (var i=0; i<communities.length; i++){
  	  var p = communities[i];
  	  results.push(p.summary());
    }
	
	return results;
}

module.exports = {

	pluralKey: function(){
		return 'communities';
	},

	get: function(params, completion){

		// fetch specific Course by ID:
		if (params.id != null){ 
			Community.findById(params.id, function(err, community){
				if (err){
					completion({message:'Course '+params.id+' not found'}, null);
					return;
				}
				
				if (community == null){
					completion({message:'Course '+params.id+' not found'}, null);
					return;
				}

				completion(null, community.summary());
			});
			return;
		}
		
		
		/* Query by filters passed into parameter string: */
		var limit = params.limit;
		if (limit == null)
			limit = 0;
		
		delete params['limit'];
		
		Community.find(params, null, {limit:limit, sort:{priority: -1}}, function(err, communities) {
			if (err) {
				completion({confirmation:'fail', message:err.message}, null);
				return;
			}
			
			completion(null, convertToJson(communities));
		});
	},

	post: function(communityinfo, completion){
		var parts = communityinfo.name.split(' ');

		var slug = '';
		for (var i=0; i<parts.length; i++){
			var word = parts[i];
			slug += word;
			if (i != parts.length-1)
				slug += '-';
		}

		slug = slug.replace('?', '')
		communityinfo['slug'] = slug;

		Community.create(communityinfo, function(err, community){
			if (err){
				completion({confirmation:'fail', message:err.message}, null);
				return;
			}
			
			completion(null, community.summary());
			return;
		});
	},



	put: function(communityId, communityinfo, completion){
		Community.findByIdAndUpdate(communityId, communityinfo, {new:true}, function(err, community){
			if (err){
				completion({confirmation:'fail', message:err.message}, null);
				return;
			}
			
			completion(null, community.summary());
			return;
		});		
	},

	delete: function(){

	}

}



