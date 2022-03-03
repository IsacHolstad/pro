//what we are doing today
// 1. discuss group working project.
// 2. Regular expressions explaining them and a hint on JQuery.
// 3. implement Google analytics

//regular exspresions
var string1 = 'This is the longest string ever.';
var string2 = 'This is the shortest string ever.';
var string3 = 'Is this the thing called Mount Everest?';
var string4 = 'This is the Sherman on the Mount.';

//"i" stands for case incasesensetiv (it dosent care about lower or upper case letters)
//var regex = /this/;
//var regex = /this/i;
//var regex = /ˆthis/i;
//var regex = /this$/i; //check if the regular exspresion at the end of the string
//var regex = /ever.$/i;
var regex = /Mount.$/i;

//tezt() method executes a match for a search for a spesific exspresion
//a spesific exsprecsion true or false. a boolean values

console.log("string 1", regex.test(string1))
console.log("string 2", regex.test(string2))
console.log("string 3", regex.test(string3))
console.log("string 4", regex.test(string4))


//results in console
//string 1 false
//string 2 false
//string 3 true
//string 4 false

//results 2 in console after using "i"
//string 1 true
//string 2 true
//string 3 true
//string 4 true