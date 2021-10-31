import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add ypur name'],
        trim: true,
        maxlength: [20, 'Your name is up to 20 chars long.']
    },
    account: {
        type: String,
        required: [true, 'please add your account'],
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'please add your password'],
        trim: true,
    },
    avatar: {
        type: String,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fephoto360.com%2Fhieu-ung-chu%2Ftao-avatar-gold-pro-303.html&psig=AOvVaw0iJNYuq92uhXLOOUj4pRM9&ust=1635660992089000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJim35W-8fMCFQAAAAAdAAAAABAD',
    }, 
    role: {
        type: String,
        default: 'user'
    },
    type: {
        type: String,
        default: 'normal'
    }
},{
    timestamps: true
})

export default mongoose.model('User', userSchema);