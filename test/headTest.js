const head = require('../head');
const assertEqual = require("../assertEqual");

assertEqual(head([5,6,7]), 5); //Pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //Pass
assertEqual(head([10]), 5); //Fail
assertEqual(head([]), "Hello"); //Fail