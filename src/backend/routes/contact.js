const Contact = require("../models/Contact");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newContact = new Contact(req.body);

  try {
    const savedContact = await newContact.save();
    res.status(200).json(savedContact);
  } catch (err) {
    res.status(500).json(err);
  }
});


//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json("Contact has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Contact
router.get("/find/:id", async (req, res) => {
  try {
    const Contact = await Contact.findById(req.params.id);
    res.status(200).json(Contact);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL ContactS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let Contacts;

    if (qNew) {
      Contacts = await Contact.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      Contacts = await Contact.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      Contacts = await Contact.find();
    }

    res.status(200).json(Contacts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
