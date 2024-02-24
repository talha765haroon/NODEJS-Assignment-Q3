"use strict";
/* question # 3 :
Name cases: store a person's name in a variable, and then print that person name in lowercase, uppercase, and titlecase.*/
// import { toASCII } from "punycode";
let firstName = "Talha Haroon";
console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLocaleUpperCase());
console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1));
