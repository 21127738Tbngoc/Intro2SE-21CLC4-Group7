const mongoose=require("mongoose");
const PassportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema(
    {
        avatar: {type: Array},
        name: {type: String},
        username:{type:String, required:true, unique:true},
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        address: {type: String},
        phone: {type: String},
        orders:[
            {
                productId:{
                    type: String,
                },
                variant: {
                    color: {type: String},
                    size: {type: String},
                    pattern: {String},
                },
                quantity:{
                    type: Number,
                    default: 1,
                },
            },
        ],
        isAdmin:{
            type:Boolean,
            default: false,
        },

    },
    {timestamps:true}
);

UserSchema.plugin(PassportLocalMongoose);

module.exports=mongoose.model("User", UserSchema);
