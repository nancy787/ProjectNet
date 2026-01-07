import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema( {
    first_name  : {
        type : String,
        required : true,
        trim : true,
    },
    last_name : {
        type : String, 
        required : true,
        trim : true
    },
    email  : {
        type : String, 
        require : true,
        lowercase : true,
        required : true
    },
    password : {
        type : String,
        required : true,
    }
} , {timestamps : true})

const User = mongoose.model('User', UserSchema)

export default User