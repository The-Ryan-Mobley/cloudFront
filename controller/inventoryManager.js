const firebase = require("../models/firebaseInit");
const inventory = firebase.firestore().collection("products");
module.exports = {
    getSpecials: async (req, res) => {
        
        inventory.where("salePercent", ">=", 9).get().then(snapShot=> {
            const products = []
            snapShot.forEach(doc => {
                products.push(doc.data());
            });
            res.json(products);
        });
        
        

    }
}