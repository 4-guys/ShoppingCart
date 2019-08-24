var db = require("../../models");
var passport = require("../config/passport");

module.exports = function (app) {
    app.post("/api/signup", function (req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            phone: req.body.phone
        }).then(function () {
            res.redirect(307, "/api/login");
        })
    });

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        res.json("/members");
    });

    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });
}