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
        
    },
    searchQuery: async (req, res) => {

    },
    suggestedResult: async (req, res) => {
        console.log("eyyy");
        const queryText = req.params.inputValue.split(" ");
        console.log(queryText);
        //contains
        inventory.where("productName", "array-contains-any", queryText).then(snapShot => {
            snapShot.forEach(doc => {
                console.log(doc.data);
            })
        })

    }
}