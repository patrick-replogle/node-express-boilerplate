const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Users = require("./user-model.js");
const { decodeToken } = require("../middleware/decodeToken.js");
const { registerFields } = require("../middleware/registerFields.js");
const {
  isUsernameUnique,
  isEmailUnique
} = require("../middleware/isUserUnique.js");

// update user
router.put(
  "/:id",
  registerFields,
  decodeToken,
  isUsernameUnique,
  isEmailUnique,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const payload = req.body;

      const user = await Users.findById(id);

      if (user) {
        const hash = bcrypt.hashSync(payload.password, 10);
        payload.password = hash;

        res.json(await Users.update(id, payload));
      } else {
        res
          .status(404)
          .json({ message: "The specified user id does not exist" });
      }
    } catch (err) {
      next(err);
    }
  }
);

// delete user
router.delete("/:id", decodeToken, async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    if (user) {
      res.json(await Users.remove(id));
    } else {
      res.status(404).json({ message: "The specified user id does not exist" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
