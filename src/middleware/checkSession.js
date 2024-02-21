// middleware/checkSession.js

const checkSession = (req, res, next) => {
    if (req.session.user && req.session.user.admin === true) {
        next();
    } else if (req.session.user) {
        res.redirect('/profile');
    } else {
        res.redirect('/login');
    }
};

export default checkSession;
