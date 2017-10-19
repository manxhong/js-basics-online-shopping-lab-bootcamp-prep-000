var cart = [];

function getCart() {
  console.log(cart);
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var randomPrice = Math.floor(Math.random() * 100) + 1;
 var newObject = {[item] : randomPrice};

 console.log(`${item} has been added to your cart.`);
 cart.push(newObject);
 return getCart();
}

function viewCart() {
  // write your code here
  var arr = [];
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      for (var variable in cart[i]) {
        if (cart[i].hasOwnProperty(variable)) {
            arr.push(` ${variable} at ${cart[i][variable]}`)
        }
      }
    }
    return `In your cart, you have${arr}`;
  }else{

    return console.log('Your shopping cart is empty.');
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var variable in cart[i]) {
      if (cart[i].hasOwnProperty(variable)) {
          total += cart[i][variable];
      }
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    for (var variable in cart[i]) {
      if (cart[i].hasOwnProperty(variable)) {
        if (variable == item) {
           return cart.splice(i,1);
        }
      }
    }
  }
  return console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }else{
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }

  cart = [];
}


// addToCart('bananas');
addToCart('kale');
// console.log(getCart());
// addToCart('apples');
// placeOrder(81232145);
// console.log(viewCart());
