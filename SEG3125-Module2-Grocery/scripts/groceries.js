	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic : true,
		price: 1.99,
		image:"resources/brocoli.png"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic : false,
		price: 2.35,
		image:"resources/bread.jpg"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00,
		image:"resources/salmon.jpg"
	},
	{
		name:"lettuce",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.00,
		image:"resources/lettuce.jpg"
	},
	{
		name:"pretein",
		vegetatian: false,
		glutenFree:true,
		organic: false,
		price: 75.00,
		image:"resources/vegaProteinPowder.jpg"
	},
	{
		name: "frozen fruites",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 7.00,
		image:"resources/frozenFruits.jpg"
	},
	{
		name: "chiken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 20.00,
		image:"resources/chiken.jpg"
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price : 20.00,
		image:"resources/beef.jpg"
	},
	{
		name:"mango",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price : 3.00,
		image:"resources/mango.jpg"
	},
	{
		name: "rice",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 20.00,
		image:"resources/rice.jpg"
	},
	{
		name:"Orange juce",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 9.00,
		image:"resources/orangeJuice.jpg"
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {

	let productsToShow = [];
	for (let i = 0; i < prods.length; i += 1) {
	if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
	productsToShow.push(prods[i]);
	} else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
	productsToShow.push(prods[i]);
	} else if (restriction == "None") {
	productsToShow.push(prods[i]);
	} else if ((restriction == "organic") && (prods[i].organic == true)) {
	productsToShow.push(prods[i]);}
	}
	
	// Sorting prices
	productsToShow.sort((a, b) => a.price - b.price);
	
	// Creating an array with formatted strings (name + price)
	let product_names = productsToShow.map(product => `${product.name} ${product.price}$`);
	
	return product_names;
}




// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
