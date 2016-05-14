var mongoose = require('mongoose');


var ProfileSchema = new mongoose.Schema({
	firstName: {type: String, default:''},
	lastName: {type: String, default:''},
	email: {type: String, default:''},
	password: {type:String, default:''},
	timestamp: {type:Date, default:Date.now},
});


module.exports = mongoose.model('ProfileSchema', ProfileSchema);
