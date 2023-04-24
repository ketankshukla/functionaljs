import { assoc, map } from "ramda";

const products = [
  { name: "product1", price: 10, quantity: 2 },
  { name: "product2", price: 20, quantity: 1 },
  { name: "product3", price: 30, quantity: 3 },
];

const calculateProductValue = (product) =>
  assoc("value", product.price * product.quantity, product);

const productsWithValue = map(calculateProductValue, products); 

console.log(productsWithValue)