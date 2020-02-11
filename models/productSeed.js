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
//firebase.database.ref("/products").set()
//firebase.database().collection("products").remove();
 // {
    //     "id":0,
    //     "productName": "'The Topps' Premium Top Hat",
    //     "productImageUrl": "https://drive.google.com/file/d/1QCROKiwd6gXZr7d_1WtISC5EpQ1d1bKu/view?usp=sharing",
    //     "vendorName": "Dapper Co",
    //     "productPrice": 29.99,
    //     "salePercent": 10,
    //     "inventoryQuantity": 25
    // },
//const batch = firebase.firestore().batch();
    
    // products.forEach(product => {
    //     //batch.set(firebase.firestore().collection("https://cloudfront-a7154.firebaseio.com/products").doc(product.productName), product);
    //     firebase.firestore().collection("/products").add(product).then((response)=>{
    //         console.log(response);
    //     });
    // });
// batch.commit().then(() => {
//     console.log("did we do it?")
// });

console.log("items successfuly seeded!");
//process.exit()