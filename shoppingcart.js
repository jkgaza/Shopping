"use strict";
/**@todo Create a simple shopping cart application with JavaScript
 * 
 * 
 * @todo Make shoppingcart.js  which will contain all of the code.
    ● Initialize an empty array in a variable called shoppingCart.
    ● Initialize an array of objects (5 at minimum) in a variable called itemList.
        ○ This array will not be altered. It is here for a future exercise.
        ○ Each object in the list must have the following properties:
            i.name
            ii.price
    ● Declare four functions:
        ○ addItem(itemName, itemPrice)
            i.Adds a new object to the shoppingCart array. 
        ○ removeItem(itemName)
            i.Removes an object from the shoppingCart array. This method uses Array.findIndex().
        ○ editItem()
            i.Edits an object in the shoppingCart array. This method uses Array.findIndex(). 
        ○ printTotal()
            i.Prints the total of all items from the shoppingCart array. 
                This includes the a 6% tax. Do not use a for loop. Use a for..of loop .
*/

let shoppingCart = [];

let itemList = [
    {name: "milk", price: 3},
    {name: "eggs", price: 2},
    {name: "bread", price: 4},
    {name: "toothpaste", price: 6},
    {name: "carrots", price: 5},
    {name: "toilet paper", price: 7}];
   

function addItem(itemName, itemPrice){
    let newItem = {name: itemName, price: itemPrice};
    
    shoppingCart.push(newItem);
}  

function removeItem(itemName){
   let newShoppingCart = shoppingCart.filter( item => {item.name !== itemName});

   shoppingCart = newShoppingCart;
    
}

function editItem(itemName, newPrice){
    let index = shoppingCart.findIndex(item => item.name === itemName);

    if (index != -1) {
        shoppingCart[index].price = newPrice;  
    }   
}

function printTotal(){
    let sum = 0;

    for (const item of shoppingCart) {
        sum += item.price;
      }

    console.log(sum);
}

addItem("chips", 1.25);
console.log(shoppingCart);
editItem("chips", 2);
console.log(shoppingCart);
printTotal();
removeItem("chips");
console.log(shoppingCart);

