//const firebase = require("./firebaseInit");
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cloudfront-a7154.firebaseio.com"
});
const products = require("./seed.json");
products.forEach(product => {
    //batch.set(firebase.firestore().collection("https://cloudfront-a7154.firebaseio.com/products").doc(product.productName), product);
    admin.firestore().collection("products").add(product);
});


console.log("items successfuly seeded!");
//process.exit()