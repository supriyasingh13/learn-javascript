// -------datatypes conversion----------
let str="45"
console.log(str);

console.log(typeof str);
let cnvrtN=Number(str)
console.log(cnvrtN+2);

if (0) { 
    console.log('Won’t run');  // 0 is falsy, so the block won't execute
  }
  
  if ('Hello') { 
    console.log('Will run');  // non-empty strings are truthy
  }
  console.log('5' - 1);  // 4 (string '5' is coerced to number)
console.log('5' + 1);  // "51" (number 1 is coerced to string)
let num1,num2,num3
num1=num2=num3=2+3
console.log(num1);
// ---------comparison in datatypes----------
console.log(true == 1);  // true 
console.log(false == 0); // true
console.log(null == undefined);  // true 
console.log(null === undefined); //false
console.log(5 != '5');    // false 
console.log(5 !== '5');   // true
let obj1 = { name: 'Alice' };
let obj2 = { name: 'Alice' };

console.log(obj1 == obj2);   // false 
console.log(obj1 === obj2);  // false 
let arr1 = [1, 2];
let arr2 = [1, 2];

console.log(arr1 == arr2);   // false 

// *****Comparison Type	Operator	Behavior*****
// Strict Equality	===	No type conversion, checks value and type
// Loose Equality	==	Converts types before comparing
// Strict Inequality	!==	No type conversion, checks value and type
// Loose Inequality	!=	Converts types before comparing
// Relational	<, >, <=, >=	Converts types when necessary

// Value Type      	Return Value of typeof
// Number	                "number"
// String	                "string"
// Boolean	              "boolean"
// Undefined	            "undefined"
// Symbol	                 "symbol"
// BigInt                  	"bigint"
// Object	                    "object"
// Array	                  "object"
// Function	               "function"
// Null	                 "object" (historical quirk)