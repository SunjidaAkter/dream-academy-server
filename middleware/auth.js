const auth = async (req, res, next, ...roles) => {
  const userRole = req.user.role;
  if (!roles.includes(userRole)) {
    return res.status(403).json({
      success: false,
      error: "You are not authorized to access this",
    });
  }

  next();
};

module.exports = auth;
