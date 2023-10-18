"use strict";

let basket = {
    products: ["milk", "bread", "bisquits", "eggs", "coke", "sausages"],
}

basket.products.push("meat")

while (basket.products.length) {
    let removedItem = basket.products.pop()
    console.log("Product", removedItem, "removed from the basket.");
}

console.log("Basket is empty!");