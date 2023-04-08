//async error handling
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
    //or fn(req, res, next).catch((err) => next(err));
  };
};
