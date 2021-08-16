//declaration of variable kelvin
const kelvin= 293;
//this converts the kelvin degree to celsius
const celsius = kelvin - 274;
//this calculate the fahrenheit degree
let fahrenheit = celsius *(9 / 5) + 32;
//this rounds down the Fahrenheit value 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)