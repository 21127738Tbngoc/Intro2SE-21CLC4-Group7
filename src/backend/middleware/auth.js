const router = require("express").Router();
const User = require("../models/User")
const CryptoJS=require("crypto-js")
const jwt=require("jsonwebtoken")
const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
const dotenv = require('dotenv');

dotenv.config();

//Use passport-local configuration Create passport local Strategy
passport.use(User.createStrategy());

//Serialize and deserialize are only necessary when using session
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

//REGISTER
router.post("/register", async (req, res)=>{
    const newUser=new User({
        username: req.body.username,
        email:req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });


    try{
        const savedUser= await newUser.save();
        res.status(201).json(savedUser);


    }catch{
        res.status(500).json("err");
    }
})

//LOGIN
router.post("/login", async(req, res)=>{
    try{
        const user = await User.findOne({username: req.body.username});
        console.log("User: ",user)
        !user && res.status(401).json("wrong credentials")
        const hashedPassword=CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const realpassword=hashedPassword.toString(CryptoJS.enc.Utf8);
        realpassword !== req.body.password && res.status(401).json("wrong credentials") 

        const accessToken=jwt.sign({
            id:user._id, 
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        {expiresIn:"3d"}
        )


        const{password, ...others}=user._doc;
        console.log(user._doc)
        res.status(200).json({...others, accessToken})
    }
    catch(err){
        res.status(500).json(err);
    }
})




module.exports = router;
