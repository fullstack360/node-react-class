var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({
	firstName: {type:String, default:''},
	lastName: {type:String, default:''},
	team: {type:String, default:''},
	number: {type:Number, default:0}
})

module.exports = mongoose.model('ProfileSchema', ProfileSchema);