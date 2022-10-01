//Mega JS code thread for our_books html. page

//Here we make sure all the things can be seen on the document

import data from './data.js'
const itemsContainer = document.getElementById('items')
const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')


// Here we make the divs, paragraphs in the html document with JS

// the length of our data determines how many times this loop goes around
for (let i = 0; i < data.length; i += 1) {
    // create a new div element and give it a class name
    const newDiv = document.createElement('div');
    newDiv.className = 'item'
    // create an image element
    const img = document.createElement('img');
    // this will change each time while you go through the loop.
    img.src = data[i].image
    img.width = 300
    img.height = 300
    // Add the image to the div
    newDiv.appendChild(img)
    // put new div inside items container
    itemsContainer.appendChild(newDiv)
    //add a new div for author
    const author = document.createElement('P')
    author.innerText = data[i].author
    newDiv.appendChild(author)
    // create a paragraph element for a description
    const desc = document.createElement('P')
    // give the paragraph text from the data
    desc.innerText = data[i].desc
    // append the paragraph to the div
    newDiv.appendChild(desc)    
    // do the same thing for price
    const price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)
    // Make a button 
    const button = document.createElement('button')
    // add an  id name to the button
    button.id = data[i].name
    // creates a custom attribute called data-price. That will hold price for each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
}
//Add the function to the button

const all_items_button = Array.from(document.querySelectorAll("button"))
all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
  }))
//-------------------------------------------------------------------------------------

//Cart - add item, show items,get quantity, get total and remove item functions

const cart =[]

//-------------------------------------------------------------------------------------
//Handle Change events on update input
itemList.onchange = function(e) {
    if(e.target && e.target.classList.contains('update')){
        const name = e.target.dataset.name
        const qty = parseInt(e.target.value)
        updateCart(name, qty)
    }
}
//--------------------------------------------------------------------------------------
//Handle clicks on list
itemList.onclick = function(e){
    //console.log("Clicked List!!!")
    //console.log(e.target)
    if(e.target && e.target.classList.contains('remove')){
        const name = e.target.dataset.name // data-name="????" e-event target
        removeItem(name)
    } else if(e.target && e.target.classList.contains('add-one')){
        const name = e.target.dataset.name
        addItem(name)
    } else if(e.target && e.target.classList.contains('remove-one')){
        const name = e.target.dataset.name
        removeItem(name, 1)
    }

}
//--------------------------------------------------------------------------------------
//handle add form submit so when nothing is added and is not in the cart, the form does 
// not show
addForm.onsubmit = function(e) {
e.preventDefault()
const name = itemName.value
const price = itemPrice.value
addItem(name, price)
}


//--------------------------------------------------------------------------------------
//Add Item
function addItem(name, price){
 for(let i = 0; i< cart.length; i +=1){
    if(cart[i].name === name) {
        cart[i].qty += 1
        showItems()
        return 
    }
   }
   const item = { name, price, qty:1}
   cart.push(item)
}

//----------------------------------------------------------------------------------------
// Show Items
function showItems() {
    const qty = getQty()
    //console.log(`You have ${qty} items in your cart`)
    cartQty.innerHTML = `You have ${qty} items in your cart`

    let itemStr = ''
    for (let i =0; i<cart.length; i +=1) {
       //console.log(` ${ cart[i].name } EUR ${cart[i].price} x ${cart[i].qty}`)  
        const {name, price, qty } = cart[i]

        itemStr += `<li>
         ${name} EUR ${price} x ${qty} = ${qty * price}
         <button class="remove" data-name="${name}">Remove</button> 
         <button class="add-one" data-name="${name}">+</button> 
         <button class="remove-one" data-name="${name}">-</button> 
         <input class="update" type="number" data-name="${name}"></input>
         </li>`//data-id(name) is a developer attribute
    }
    itemList.innerHTML = itemStr

//console.log(`Total in cart: EUR ${getTotal()}`)
cartTotal.innerHTML = `Total in cart: EUR ${getTotal()}`
}

//------------------------------------------------------------------------------------------
//Get Quantity
function getQty(){
    let qty = 0
    for(let i =0; i<cart.length; i += 1) {
        qty += cart [i].qty
    }
    return qty
}

//---------------------------------------------------------------------------------------------
//Get total
function getTotal(){
    let total = 0;
    for ( let i = 0; i < cart.length; i +=1){
        total += cart [i].price * cart [i].qty
    }
    return total.toFixed(2)
}

//------------------------------------------------------------------------------------------------
//Remove Item
function removeItem(name, qty = 0) {
    for (let i = 0; i < cart.length; i +=1){
        if (cart [i].name === name){
            if (qty > 0){
              cart[i].qty -= qty
            }
            if(cart[i].qty < 1 || qty === 0) {
              cart.splice(i, 1)
            }  
            showItems()        
        
        }
    }
}

//---------------------------------------------------------------------------------------------------
function updateCart(name,qty){
    for(let i = 0; i < cart.length; i +=1) {
        if (cart[i].name ===name) {
            if(qty < 1){
               removeItem(name) 
               return
            }
            cart[i].qty = qty
            showItems()
            return
        }

    }
}

//---------------------------------------------------------------------------------------------------
//
showItems()





























/*const cart =[]

//--------------------------------------------------------------------------------------
//Add Item
function addItem(name, price){
 for(let i = 0; i< cart.length; i +=1){
    if(cart[i].name === name) {
        cart[i].qty += 1
        return  
    }
   }
   const item = { name, price, qty:1}
   cart.push(item)
}

//----------------------------------------------------------------------------------------
// Show Items
function showItems() {
    const qty = getQty()
    console.log(`You have ${qty} items in your cart`)

    let itemStr = ''
    for (let i =0; i<cart.length; i +=1) {
        console.log(` ${ cart[i].name } EUR ${cart[i].price} x ${cart[i].qty}`)
        itemStr += `<li> ${cart[i].name} EUR ${cart[i].price} x ${cart[i].qty} </li>`
    }
    itemList.innerHTML = itemStr

console.log(`Total in cart: EUR ${getTotal()}`)
}

//------------------------------------------------------------------------------------------
//Get Quantity
function getQty(){
    let qty = 0
    for(let i =0; i<cart.length; i += 1) {
        qty += cart [i].qty
    }
    return qty
}

//---------------------------------------------------------------------------------------------
//Get total
function getTotal(){
    let total = 0;
    for ( let i = 0; i < cart.length; i +=1){
        total += cart [i].price * cart [i].qty
    }
    return total.toFixed(2)
}

//------------------------------------------------------------------------------------------------
//Remove Item
function removeItem(name, qty = 0) {
    for (let i = 0; i < cart.length; i +=1){
        if (cart [i].name === name){
            if (qty > 0){
              cart[i].qty -= qty
            }
            if(cart[i].qty < 1 || qty === 0) {
              cart.splice(i, 1)
            }          
            return
        }
    }
}

//---------------------------------------------------------------------------------------------------
//

addItem('Apple', 0.99)
addItem('Orange', 1.29)
addItem('Apple', 0.99)
removeItem('Apple', 1)
showItems()*/