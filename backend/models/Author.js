const mongoose = require ('mongoose')

const AuthorSchema = mongoose.Schema ({

    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique: true
    },
    password: {
        type:String,
        required:true
    },
    phone: { 
        type:String,
        required:true
    },
    location: {
        type: String,
    },
    educationLevel: {
        type:String,
    },
    bio: {
        type:String,
    },
    userImage: {
		type: [Object],
        default:[]
	},
    date: {
        type: Date,
       default: Date.now
    },
})

module.exports = mongoose.model('author', AuthorSchema);
