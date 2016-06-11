var mongoose = require('mongoose')

var CommunitySchema = new mongoose.Schema({
	name: {type:String, trim:true, default:''},
	slug: {type:String, trim:true, default:''},
	address: {type:String, trim:true, lowercase:true, default:''},
	city: {type:String, trim:true, lowercase:true, default:''},
	state: {type:String, trim:true, lowercase:true, default:''},
	timestamp: {type:Date, default:Date.now},
})

CommunitySchema.methods.summary = function() {
	var summary = {
		name: this.name,
		slug: this.slug,
		address: this.address,
		city: this.city,
		state: this.state,
		timestamp: this.timestamp,
		id: this._id
	}

	return summary
}

module.exports = mongoose.model('CommunitySchema', CommunitySchema)
