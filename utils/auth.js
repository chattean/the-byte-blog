const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      console.log(req.originalUrl, req.session)
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;