var mongoose = require('mongoose')

var TeamSchema = new mongoose.Schema({
	name: {type:String, default:'', lowercase:true, trim:true},
	city: {type:String, default:'', lowercase:true, trim:true},
	conference: {type:String, default:'', lowercase:true, trim:true},
})

module.exports = mongoose.model('TeamSchema', TeamSchema);