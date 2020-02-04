/*
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
*/
const firebase = require("../models/firebaseInit");
module.exports = {
    newUser: (req, res) => {
        console.log(req.body.userData.email);
        const user = {
            displayName: req.body.userData.userName,
            email: req.body.userData.email,
            password: req.body.userData.password
        }
        firebase.auth().createUser(user)
        .then((re)=>{
            console.log(re);
            console.log("eyyy");
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });

    },
    login: (req, res) => {

    }
}