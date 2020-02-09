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
            res.json(re);
        })
        .catch(function(error) {
            // Handle Errors here.
            res.sendStatus("504");
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            // ...
          });

    },
    login: (req, res) => {
        console.log("called it");
        const user = {
            displayName: req.body.userData.userName,
            email: req.body.userData.email,
            password: req.body.userData.password
        }
        console.log(user);
        firebase.auth().getUserByEmail(user.email).then((result)=> {
            console.log(result);
        })
        // //getUserByEmail
        // firebase.auth().authWithPassword(user.email, user.password).then((result)=>{
        //     console.log("yoooooo");
        //     res.json(result)

        // }).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     console.log(errorMessage);
        //     res.sendStatus("504");
        //     // ...
        //   });
    },
    signOut: (req, res) => {

    }
}