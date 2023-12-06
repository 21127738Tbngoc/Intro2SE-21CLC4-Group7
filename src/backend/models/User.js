const mongoose=require("mongoose");



const UserSchema = new  mongoose.Schema(
    {
        avatar: {type: String},
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



module.exports=mongoose.model("User", UserSchema);
