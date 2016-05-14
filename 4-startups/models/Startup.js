var mongoose = require('mongoose');


var StartupSchema = new mongoose.Schema({
	name: {type: String, default:''},
	founder: {type: String, default:''},
	employees: {type: Array, default: []},
	url: {type:String, default:''},
	funding: {type: Number, default: 0},
	timestamp: {type:Date, default:Date.now},
});


module.exports = mongoose.model('StartupSchema', StartupSchema);
