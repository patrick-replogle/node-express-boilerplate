function isAdmin(req, res, next) {
  if (req.user && req.user.admin) {
    next();
  } else {
    res.status(403).json({
      message: "Must be an admin to access this content"
    });
  }
}

module.exports = {
  isAdmin
};
