var mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
	title: {type:String, trim:true, default:''},
	text: {type:String, trim:true, default:''},
	community: {type:String, trim:true, default:''},
	profile: {type:String, trim:true, default:''},
	timestamp: {type:Date, default:Date.now},
})

PostSchema.methods.summary = function() {
	var summary = {
		title: this.title,
		text: this.text,
		community: this.community,
		profile: this.profile,
		timestamp: this.timestamp,
		id: this._id
	}

	return summary
}

module.exports = mongoose.model('PostSchema', PostSchema)
