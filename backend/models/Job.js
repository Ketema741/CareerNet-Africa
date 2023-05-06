const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	category: {
		type: String,
		required: true
	},
	jobImages: {
		type: [Object],
	},
	title: {
		type: String,
		required: true
	},
	excerpt: {
		type: String,
		required: true
	},
	summary: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	steps: {
		type: [String],
	},
	timeline: {
		type: [String],
	},

	takeaways: {
		type: [String],
		required: true
	},
	comments: {
		type: [String],
	},

	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('job', JobSchema); 