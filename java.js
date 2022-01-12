var animal = "bruh";
console.log(animal);
//warm up

// (&&) in the slides of and operator
//var selectedNumber = 60;
//if selectedNumber = 30;
//if (selectedNumber >= )

// or in the slides
//var dayOfTheWeekend = "saturday";

//homework
var stringFour = "4";
var numberFour = 4;

//lecture 1 on monday
if (stringFour === numberFour){
    console.log("equal");
}
else {
    console.log("not equal");
}
//correct the answer in the console comes back "not equal"
var selectedNumber = 30;
if (selectedNumber >= 10 && selectedNumber <= 50){
    console.log("The Selected Number is within range");
}
//aswer came "5" witch is correct

var dayOfTheWeek = "Saturday";
if (dayOfTheWeek === "Saturday" || dayOfTheWeek ===
"Sunday") {
    console.log("it's the weekend");
}
//came back as nothing *fix it*

//undenified a null
//if  variable (variable === null) {
    //console.log("aw man no data!");
//}
var stringFour = "four"
var numberFour = 4
if (stringFour === numberFour) {
    console.log("equal");
} else {
    console.log("not equal")
}
// not equal!!!


var planets = [
   "earth",
   "mars",
   ["isac", "brb", "yeah"],
   ["hello", "guys", "iphone"],
   ["isac", "william", "hey"]
];
console.log(planets[0]);
console.log(planets[1] [3]);
console.log(planets[2] [2]);
console.log(planets[3] [1]);
console.log(planets[4] [2]);
//it works
var dog = {
    name : 'morten',
    color : 'red',
    age : '55'
};

console.log(dog.name);
console.log(dog.age);
console.log(dog.color);
//console.log(warn)
//it works!!!!! :)

var mobilePhones = [
    {
        //phone name
        //color
        //storage 
        name : 'iphone 11',
        color : 'black',
        storage : 128       
        
    }, {
        name : 'motorola',
        color : 'white',
        storage : 15
    }, {
        name : 'samsung',
        color : 'rainbow',
        storage : 50
    }, {
        name : 'huawei',
        color : 'pink',
        storage : 64
    }
];
for (var i = 0; i <mobilePhones. length; i++){
    console.log(mobilePhones[i].name);
    console.log(mobilePhones[i].color);
    console.log(mobilePhones[i].storage);
}
console.log(mobilePhones)









//mon
var someArray = ["red", "blue", "green", "yellow"];
someArray.push("isac");
console.log(someArray);
//someArray.pop();
console.log(someArray.length);


//ons 

function logWord() {
    console.log('hello world');
}
logWord();
var name = 'william';
console.log(name);


function getSum(hey1 , hey2) {
    console.log(hey1 + hey2);

}

getSum(1, 1);

function getMultiply(hey1, hey2) {
    console.log(hey1 * hey2);
}

//onsdag lecture 
//function initelaiseIsac () {
    //var isac = {
        //name = "isac"
        //ocupation = "student"
    //};
    //return isac;
//};
//initelaiseIsac();
//console.log()

//function logWord(arg1, arg2, arg3) {
   // console.log(theWord);
//};
//logWord(hello);
//didnt work find out whhy

function printLikeCounter(likeCounter) {
    console.log(likeCounter + "likes");
};
printLikeCounter(89);
printLikeCounter(44);
printLikeCounter(90);

function creatLikeCounter(likeCounter) {
    return likeCounter + "likes";
};
creatLikeCounter(89995959);