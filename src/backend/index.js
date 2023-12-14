const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./middleware/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const contactRoute=require("./routes/contact")
const articleRoute=require("./routes/article");
const shippingRoute= require("./routes/shipping");
const paymentRoute=require("./routes/payment");

//const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/contact", contactRoute);
app.use("/api/article", articleRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/shipping", shippingRoute);
//app.use("/api/checkout", stripeRoute);




require("dotenv").config()

const cloudinary = require("cloudinary").v2
const fse = require("fs-extra")
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDINARYSECRET,
  secure: true
})

function passwordProtected(req, res, next) {
  res.set("WWW-Authenticate", "Basic realm='Cloudinary Front-end Upload'")
  if (req.headers.authorization == "Basic YWRtaW46YWRtaW4=") {
    next()
  } else {
    res.status(401).send("Try again")
  }
}

//app.use(passwordProtected)

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Welcome</h1>

<form id="upload-form">
  <input id="file-field" type="file" multiple />
  <button>Upload</button>
</form>


    <hr />

    <a href="/view-photos">How would I use the public_id values that I store in my database?</a>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="/client-side.js"></script>
  </body>
</html>`)
})

app.get("/get-signature", (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000)
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp
    },
    cloudinaryConfig.api_secret
  )
  res.json({ timestamp, signature })
})

app.post("/do-something-with-photos", async (req, res) => {
  const photoDataArray = req.body.photos;

  for (const photoData of photoDataArray) {
    // Validate and process each photo
    const expectedSignature = cloudinary.utils.api_sign_request(
      { public_id: photoData.public_id, version: photoData.version },
      cloudinaryConfig.api_secret
    );

    if (expectedSignature === photoData.signature) {
      // Do whatever you need to do with the public_id for the photo
      // Store it in a database or pass it to another service, etc...
      await fse.ensureFile("./data.txt");
      const existingData = await fse.readFile("./data.txt", "utf8");
      await fse.outputFile("./data.txt", existingData + photoData.public_id + "\n");
    }
  }

  res.sendStatus(200);
});

app.get("/admin/view-photos", async (req, res) => {
  await fse.ensureFile("./data.txt")
  const existingData = await fse.readFile("./data.txt", "utf8")
  res.send(`<h1>Hello, here are a few photos...</h1>
  <ul>
  ${existingData
    .split("\n")
    .filter(item => item)
    .map(id => {
      return `<li><img src="https://res.cloudinary.com/${cloudinaryConfig.cloud_name}/image/upload/w_200,h_100,c_fill,q_100/${id}.jpg">
      <form action="delete-photo" method="POST">
        <input type="hidden" name="id" value="${id}" />
        <button>Delete</button>
      </form>
      </li>
      `
    })
    .join("")}
  </ul>
  <p><a href="/">Back to homepage</a></p>
  `)
})

app.post("/admin/delete-photo", async (req, res) => {
  // do whatever you need to do in your database etc...
  await fse.ensureFile("./data.txt")
  const existingData = await fse.readFile("./data.txt", "utf8")
  await fse.outputFile(
    "./data.txt",
    existingData
      .split("\n")
      .filter(id => id != req.body.id)
      .join("\n")
  )

  // actually delete the photo from cloudinary
  cloudinary.uploader.destroy(req.body.id)

  res.redirect("/admin/view-photos")
})



app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");

});