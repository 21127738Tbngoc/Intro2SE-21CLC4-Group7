const mongoose=require("mongoose");



const OrderSchema = new  mongoose.Schema(
    {
        userId:{type:String, required:true},
        products:[
            {
                productId:{
                    type: String,
                },
                quantity:{
                    type: Number,
                    default: 1,
                },
            },
        ],
        subtotal:{ type: Number},
        address:{type:String},
        status:{type: String, default: "PREPARING TO SHIP"},
        shippingFee:{type: Number},
        phone:{type: String},
        email:{type: String},
    },
    {timestamps:true}
);



module.exports=mongoose.model("Order", OrderSchema);
