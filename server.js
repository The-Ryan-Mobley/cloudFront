const firebase = require('firebase');
//const app = firebase.initializeApp({ ... });
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 1337;
const app = express();

app.use(express.static(path.join(__dirname, 'client/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });