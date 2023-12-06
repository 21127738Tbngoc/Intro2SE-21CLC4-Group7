const Shipping = require("../models/Shipping");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newShipping = new Shipping(req.body);

  try {
    const savedShipping = await newShipping.save();
    res.status(200).json(savedShipping);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedShipping = await Shipping.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedShipping);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Shipping.findByIdAndDelete(req.params.id);
    res.status(200).json("Shipping has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Shipping
router.get("/find/:id", async (req, res) => {
  try {
    const Shipping = await Shipping.findById(req.params.id);
    res.status(200).json(Shipping);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL ShippingS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let Shippings;

    if (qNew) {
      Shippings = await Shipping.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      Shippings = await Shipping.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      Shippings = await Shipping.find();
    }

    res.status(200).json(Shippings);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
