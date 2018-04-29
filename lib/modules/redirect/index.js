module.exports = {
    construct: function (self, options) {
        self.loginAfterLogin = function (req) {

            console.log("login allowed: " + req.user.canLogin);

            if (!req.user.canLogin) {
                req.redirect = '/logout';
            } else {
                // Just let them go go the home page
            }

        };
    }
};