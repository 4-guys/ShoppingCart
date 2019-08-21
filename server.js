const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// ===================================================
// For login to before Serve up static assets
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./client/config/passport");
// Setting up port and requiring models for syncing
var PORT2 = process.env.PORT || 8080;
var db = require("./client/models");
// Creating express app and configuring middleware needed for authentication
// var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./client/routes/html-routes.js")(app);
require("./client/routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT2, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT2, PORT2);
  });
});
// ===================================================

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
