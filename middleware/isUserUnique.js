const Users = require("../users/user-model.js");

function isUsernameUnique(req, res, next) {
  Users.findByUsername(req.body.username).then(user => {
    if (user) {
      res.status(422).json({ message: "username already taken" });
    } else {
      next();
    }
  });
}

function isEmailUnique(req, res, next) {
  Users.findByUsername(req.body.email).then(user => {
    if (user) {
      res.status(422).json({ message: "email already taken" });
    } else {
      next();
    }
  });
}

module.exports = {
  isUsernameUnique,
  isEmailUnique
};
