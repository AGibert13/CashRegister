var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items
cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);

//Show the total bill
console.log('Your bill is '+cashRegister.total);

// How I set up the cart-(Adrien)
var item = [];
var quantity = [];
var price = [];
function receipt(){
	var itemTotal = [];
	var groceryList =[];
	var cart = [];
	for (i = 0; i < item.length; i++){
		itemTotal.push(quantity[i] * price[i]);
		groceryList.push([quantity[i].toString(), item[i], ("= " + itemTotal[i].toString())]);
		 cart.push(groceryList[i].join(" "));
		console.log(cart[i]);
	}
	alert(cart.join("\n"));
}
}
receipt();
