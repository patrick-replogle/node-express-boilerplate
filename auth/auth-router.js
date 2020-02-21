const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/user-model.js");

const { jwtSecret } = require("../config/secrets.js");
const {
  isUsernameUnique,
  isEmailUnique
} = require("../middleware/isUserUnique.js");

// register a new user
router.post(
  "/register",
  isUsernameUnique,
  isEmailUnique,
  async (req, res, next) => {
    try {
      let user = req.body;
      const hash = bcrypt.hashSync(user.password, 10);
      user.password = hash;

      const newUser = await Users.add(user);
      const token = signToken(newUser);

      res.status(201).json({ user: newUser, token: token });
    } catch (err) {
      next(err);
    }
  }
);

// user login route
router.post("/login", async (req, res, next) => {
  try {
    let { username, password } = req.body;
    const user = await Users.findBy({ username }).first();

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = signToken(user);

      res.status(200).json({
        message: `Welcome ${user.username}!`,
        token: token
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    next(err);
  }
});

// create token function
function signToken(user) {
  const payload = {
    user
  };

  const options = {
    expiresIn: "7d"
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
