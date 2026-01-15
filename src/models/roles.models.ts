import mongoose, {Schema} from "mongoose";


const roleSchema = new Schema(  {
    id : {
        type : Number,
    },
    name : {
        type : String,
        trim : true,
        required : true,
        lowercase : true
    }
}, { timestamps : true})

const Role = mongoose.model('role', roleSchema);
export default Role