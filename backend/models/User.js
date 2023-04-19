const mongoose = require ('mongoose')

const UserSchema = mongoose.Schema ({
    university: {
        type:String,
        default:"Addis Ababa University"
    },
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

module.exports = mongoose.model('user', UserSchema);
