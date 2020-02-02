/*
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
*/
module.exports = {
    newUser: (req, res) => {
        console.log(req.body)

    },
    login: (req, res) => {

    }
}