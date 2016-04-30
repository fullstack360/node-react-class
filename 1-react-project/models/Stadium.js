var mongoose = require('mongoose')

var StadiumSchema = new mongoose.Schema({
	name: {type:String, default:'', lowercase:true, trim:true},
	team: {type:String, default:'', lowercase:true, trim:true},
	city: {type:String, default:'', lowercase:true, trim:true},
	capacity: {type:Number, default:0}
})

module.exports = mongoose.model('StadiumSchema', StadiumSchema);