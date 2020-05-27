/*
This is the JavaScript file that contains the array of products and calculations for the price of the items
chosen by the user. This code has been inspired by the starter code provided by
https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module2-Grocery/scripts/groceries.js
*/
		 
// Product array containing items that the user can choose from 
var products = [
	{
		name: "Lettuce ($0.50)",
		vegetarian: true,
		organic: false,
		glutenFree: true,
		glutenFreeVeggie: true,
		price: 0.50
	},
	
	{
		name: "Spaghetti ($1.27)",
		vegetarian: true,
		organic: false,
		glutenFree: false,
		glutenFreeVeggie: false,
		price: 1.27
	},
	
	{
		name: "Jell-o ($1.77)",
		vegetarian: false,
		organic: false,
		glutenFree: true,
		glutenFreeVeggie: false,
		price: 1.77
	},
	
	{
		name: "Porridge ($1.77)",
		vegetarian: true,
		organic: false,
		glutenFree: false,
		glutenFreeVeggie: false,
		price: 1.77
	},
	
	{
		name: "Broccoli ($1.99)",
		vegetarian: true,
		organic: false,
		glutenFree: true,
		glutenFreeVeggie: true,
		price: 1.99
	},
	{
		name: "Bread ($2.35)",
		vegetarian: true,
		organic: false,
		glutenFree: false,
		glutenFreeVeggie: false,
		price: 2.35
	},	
	{
		name: "Milk ($4.49)",
		vegetarian: true,
		organic: false,
		glutenFree: true,
		glutenFreeVeggie: true,
		price: 4.49
	},
	
	{
		name: "Orange Juice ($5.97)",
		vegetarian: true,
		organic: false,
		glutenFree: true,
		glutenFreeVeggie: true,
		price: 5.97
	},
	
	{
		name: "Strawberry Cheesecake ($6.50)",
		vegetarian: false,
		organic: false,
		glutenFree: false,
		glutenFreeVeggie: false,
		price: 6.50
	},
	
	{
		name: "Salmon ($10.00)",
		vegetarian: false,
		organic: false,
		glutenFree: true,
		glutenFreeVeggie: false,
		price: 10.00
	},
	
	{
		name: "Organic Lettuce ($1.50)",
		vegetarian: true,
		organic: true,
		glutenFree: true,
		glutenFreeVeggie: true,
		price: 1.50
	},
	
	{
		name: "Organic Spaghetti ($2.27)",
		vegetarian: true,
		organic: true,
		glutenFree: false,
		glutenFreeVeggie: false,
		price: 2.27
	},
	
	{
		name: "Organic Porridge ($2.77)",
		vegetarian: true,
		organic: true,
		glutenFree: false,
		glutenFreeVeggie: false,
		price: 2.77
	},
	
	{
		name: "Organic Broccoli ($2.99)",
		vegetarian: true,
		organic: true,
		glutenFree: true,
		glutenFreeVeggie: true,
		price: 2.99
	},	
	{
		name: "Organic Milk ($5.49)",
		vegetarian: true,
		organic: true,
		glutenFree: true,
		glutenFreeVeggie: true,
		price: 5.49
	},
	
	{
		name: "Organic Orange Juice ($6.97)",
		vegetarian: true,
		organic: true,
		glutenFree: true,
		glutenFreeVeggie: true,
		price: 6.97
	},
	
	{
		name: "Organic Salmon ($11.00)",
		vegetarian: false,
		organic: true,
		glutenFree: true,
		glutenFreeVeggie: false,
		price: 11.00
	}
	
	
];
	

/*
The restrictListProducts function. This function is responsible for filtering the products based on user needs. 
*/
function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree&Vegetarian") && (prods[i].glutenFreeVeggie == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

/*
The getTotalPrice function. This function is responsible for calculating the total price using an iteration 
in a for loop. 
*/
function getTotalPrice(chosenProducts) {
	totalPrice = 0;	
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;

		}
	}
	return totalPrice;
}
