const firebase = require("./firebaseInit");
const products = require("./seed.json");
console.log(products);
//firebase.database.ref("/products").set()
firebase.database().ref("/products").remove();
products.forEach(product => {
    firebase.database().ref("/products").push(product);
});
console.log("items successfuly seeded!");
process.exit()