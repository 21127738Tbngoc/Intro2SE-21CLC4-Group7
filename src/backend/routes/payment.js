const Payment = require("../models/Payment");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newPayment = new Payment(req.body);

  try {
    const savedPayment = await newPayment.save();
    res.status(200).json(savedPayment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedPayment = await Payment.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPayment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Payment.findByIdAndDelete(req.params.id);
    res.status(200).json("Payment has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Payment
router.get("/find/:id", async (req, res) => {
  try {
    const Payment = await Payment.findById(req.params.id);
    res.status(200).json(Payment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PaymentS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let Payments;

    if (qNew) {
      Payments = await Payment.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      Payments = await Payment.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      Payments = await Payment.find();
    }

    res.status(200).json(Payments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
