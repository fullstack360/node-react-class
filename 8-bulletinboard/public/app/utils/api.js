import superagent from 'superagent'

export default {

	handleGet: function(endpoint, params, completion){
		superagent
		.get(endpoint)
		.query(params)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if (err){ 
				if (completion != null)
					completion(err, null)
				return
			}

			if (completion != null){
				if (res.body.confirmation == 'success'){
		    		completion(null, res.body)
				}
				else {
		    		completion({message:res.body.message}, null)
				}
			}
		});

	},

	// using superagent here because for some reason, cookies don't get installed using fetch (wtf)
	handlePost: function(endpoint, body, completion){
		superagent
		.post(endpoint)
		.send(body)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if (err){ 
				if (completion != null)
					completion(err, null)

				return
			}
			// else { 
			// 	if (completion != null)
		 //    		completion(null, res.body)
			// }

			if (completion != null){
				if (res.body.confirmation == 'success'){
		    		completion(null, res.body)
				}
				else {
		    		completion({message:res.body.message}, null)
				}
			}


		});
	},

	handlePut: function(endpoint, body, completion){
		superagent
		.put(endpoint)
		.send(body)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if (err){ 
				if (completion != null)
					completion(err, null)
				return
			}
			
			if (completion != null){
				if (res.body.confirmation == 'success'){
		    		completion(null, res.body)
				}
				else {
		    		completion({message:res.body.message}, null)
				}
			}
		});
	}


}