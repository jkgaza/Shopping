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
    ("milk", 3), 
    ("bread", 4), 
    ("eggs", 2), 
    ("yogurt", 5), 
    ("pizzaRolls", 6)]; //DON'T UTILIZE 

function addItem(itemName, itemPrice){
let itemsToAdd = [
    ("coffee", 4), 
    ("rice", 3), 
    ("mouthwash", 6),
    ("toothpaste", 5),
    ("toiletpaper", 7)];    
 let shoppingCart = [...shoppingCart, ...itemsToAdd];
 let itemName = "";
 let itemPrice = "";
 console.log(addItem);


}

function removeItem(itemName){
    // itemList.operator();
    console.log(shoppingCart.slice(2, 3));
}

function editItem(){

}

function printTotal(){

}

