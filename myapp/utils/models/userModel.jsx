import {Schema,model,models} from 'mongoose';

const userSchema = new Schema({
    email : {
        type : String,
        required : [true,'email already exists'],
        unique : [true,'email is required']
    },
    username : {
        type : String,
        required : [true,"username is required"],
    },
    image : {
        type : String
    }
})

const User = models.User || model("User",userSchema);
export default User;