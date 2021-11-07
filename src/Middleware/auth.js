module.exports = function (req, res, next) {
  console.log("from auth  middleware", req);
  if (req.isAuthenticated()) return next();
  res.status(401).json("not authenticated!");
};
