const mongoose = require('mongoose');

let TokenSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	token: {
		type: String,
		length: 150
	},
	expires: {
		type: Date,
		default: new Date(+new Date() + 604800000)
	},
	name: String,
	os: String,
	browser: String,
	fingerprint: String,
	device: String,
}, { timestamps: true });

module.exports = mongoose.model('AuthorizationToken', TokenSchema);