console.log("Hello from JavaScript"); //in-line comment
/*multi-line
comment */
var a;
console.log(a);
var b = 2;
console.log(b);
a = 7;
console.log(a);
b = a;
console.log(a,b);

//Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

//Do not change code below this line
a = a + 1;
b = b + 5;
c = c + " String!";
console.log(a);
console.log(b);
console.log(c);

//Declarations Case sensitive
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

//Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Adding numbers
var sum = 10 + 10;
console.log(sum);

//Substracting numbers
var difference = 45 - 33;
console.log(difference);

//Multiplying numbers
var product = 8 * 0;
console.log(product);

//Dividing numbers
var quotient = 66 / 33;
console.log(quotient);

//Incrementing numbers
var myVar = 87;
myVar = myVar + 1;
console.log(myVar);
myVar ++;
console.log(myVar);

//Decrementing numbers
var myVar = 87;
myVar = myVar - 1;
console.log(myVar);
myVar --;
console.log(myVar);

//Decimal numbers
var ourDecimal = 5.0007;
console.log(ourDecimal);

//Multiply decimals
var product = 2.0 * 2.5;
console.log(product);

//Divide decimals
var division = 4.4 / 2.2;
console.log(division);

//Finding a remainder
var remainder;
remainder = 11 % 3;
console.log(remainder);


//Compound assigment with augmented addition, substraction, multiplication and division
var a = 3;
a += 12;
console.log(a);
a -= 12;
console.log(a);
a *= 12;
console.log(a);
a /= 12;
console.log(a);

//Declare string variables
var firstName = "Gon";
var lastName = "Gon2";

//Escaping literal quotes in strings
var myStr = "I am a \"double quoted\"string inside \"double quotes\"";
console.log(myStr);

//Quoting strings with single quotes
var myStr = 'https:"//www.youtube.com/watch?v=PkZNo7MF"NFg';
console.log(myStr);

//Quoting strings with back ticks
var myStr = `'https:"//www.youtube.com/watch?v=PkZNo7MF"NFg'`;
console.log(myStr);

//Escape sequences in strings
var myStr = "FirstLine\n\t\\Secondline\nThirdline";
console.log(myStr);

//Concatenating strings with plus operator
var ourStr = "I come first" + "I come second";
console.log(ourStr);

//Concatenating strings with plus equals operator
var ourStr = "I come first";
ourStr += "I come second";
console.log(ourStr);

//Constructing strings with variables
var ourName = "I come first";
var ourStr = "I come second" + ourName + "I come third";
console.log(ourStr);

//Appending variables to strings
var primerVar = "Hello ";
var segunVar = "you";
primerVar += segunVar;
console.log(primerVar);

//Find lenght of string
var firstNameLength = 0;
var firstName = "Gon";
firstNameLength = firstName.length;
console.log(firstNameLength);

//Bracket Notation to find first character in string
var firstLetter = "";
firstLetter = firstName[0];
console.log(firstLetter);

//String immutability, they cannot be altered once created.
var firstName = "Gon";
firstName[0] = "Y"; //This will give us an error
firstName = "Yon"; //This will work

//Bracket notation to find Nth character in string
secondLetter = "";
secondLetter = firstName[1];

//Bracket notation to find last character in string
lastLetter = "";
lastLetter = firstName[firstName.length - 1];

//Bracket notation to find Nth-to-last character in string
lastLetter = "";
lastLetter = firstName[firstName.length - 3];

//Word blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";

    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

//Store multiple values with arrays
var ourArray = ["Gon", 23];
console.log(ourArray);

//Nested arrays or multidimensional array
var ourArray = [["The universe", 10], ["everything", 121]];
console.log(ourArray);

//Acces array data with indexes
var ourArray = [50,60,70];
var ourData = ourArray[0]; //Equals 50
console.log(ourData);

//Modify array data with indexes
var ourArray = [50,60,70];
ourArray[0] = 25;
console.log(ourArray[0]);

//Acces multi-dimensional arrays with indexes
var ourArray = [["The universe", 10], ["everything", 121]];
var ourData = ourArray[0] [0]; //Equals The universe
console.log(ourData);

//Manipulate arrays with push()
var ourArray = [50,60,70];
ourArray.push(["happy", "joy"],);
console.log(ourArray);

//Manipulate arrays with pop()
var ourArray = [50,60,70];
var removePop = ourArray.pop();
console.log(ourArray);
console.log(removePop);

//Manipulate arrays with shift()
var ourArray = [50,60,70];
var removePop = ourArray.shift();
console.log(ourArray);
console.log(removePop);

//Manipulate arrays with unshift()
var ourArray = [50,60,70];
ourArray.unshift("Happy");
console.log(ourArray);

//Shopping list
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3]]; //array of arrays

//write reusable code with functions
function ourReusableFunction() {
    console.log("Heya, World");
}
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

//Passing values to Functions with arguments
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10,5);

function functionWithArgs(a, b){
    console.log(a + b);
}
functionWithArgs(10,5);

//Global scope and functions
var myGlobal = 10;
function fun1(){
    oopsGlobal = 5; // without the var it becomes global
}

function fun2(){
    var output = "";
    if(typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

//Local scope and functions
function myLocalScope(){
    var myBar = 5;
    console.log(myBar);
}
myLocalScope();
//console.log(myBar); // error

//Global vs local scope in functions
var outerWear = "T-Shirt";
function myOutfit(){
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

//Return a value from a function with return
function minusSeven(num){
    return num - 7;
}
console.log(minusSeven(7));

//Understanding undefiend value returned from a function
var sum = 0;
function addThree() {
    sum = sum + 3; // no return value, then returns undefind
}
console.log(addThree());

//Assignment with a returned value
var changed = 0;
function change(num){
    return (num + 5) / 3;
}
changed = change(10);
console.log(changed);

//Stand in line
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];
console.log("Before " + JSON.stringify(testArr)); //Change array into string
console.log(nextInLine(testArr,6));
console.log("After " + JSON.stringify(testArr));

//Boolean values
function welcomeToBolleans(){
    return false;
}

//Use conditional logic with if statement
function ourTrueOrFalse(isItTrue){
    if(isItTrue){
        return "Yes, true";
    }
    return "No, false";
}

function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
        return "Yes, true";
    }
    return "No, False";
}
console.log(ourTrueOrFalse(false));
console.log(trueOrFalse(true));

//Comparison with the equality operator
function testEqual(val){
    if(val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));

//Comparison with the strict equality operator
function testStrict(val){
    if(val === 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual('12')); //Not Equal

//Practice comparing different values
function compareEquality(a, b){
    if(a == b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10")); //Equal, if we use the strict equality operator ===, we get not Equal

//Comparison with the inequality operator
function testNotEqual(val) {
    if(val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));

//Comparison with the strict inequality operator
function testStrictNotEqual(val) {
    if(val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10));

//Comparisons with the logical And operator
function testGreaterThan(val){
    if(val > 100) {
        return "Over 100";
    }
    if(val > 10) {
        return "Over 10";
    }
    return "10 or under";
}
console.log(testGreaterThan(10));

//Comparison with the Greater than or Equal to operator
function testGreaterOrEqualThan(val){
    if(val >= 20) {
        return "20 or Over";
    }
    if(val >= 10) {
        return "10 or Over";
    }
    return "less than 10";
}
console.log(testGreaterOrEqualThan(10));

//Comparison with the Lesser than operator
function testLesserThan(val){
    if(val < 25) {
        return "Under 25";
    }
    if(val < 55) {
        return "Under 55";
    }
    return "55 or over";
}
console.log(testLesserThan(10));

//Comparison with the Less than or equal to operator
function testLesserOrEqualThan(val){
    if(val <= 12) {
        return "Smaller than or equal to 12";
    }
    if(val <= 24) {
        return "Smaller than or equal to 24";
    }
    return "more than 24";
}
console.log(testLesserOrEqualThan(10));

//Comparison with the logical And operator
function testLogicalAnd(val) {
    if(val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(32));

//Comparison with the logical Or operator
function testLogicalOr(val) {
    if(val < 10 || val > 20) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalOr(21));

//Else statements
function testElse(val) {
    var result = "";
    if(val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }
    return result;
}
console.log(testElse(4));

//Else if statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(10));

//Logical order in if else statements, once it checks the first if stops.
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(10));

//Chaining if else statements
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else { 
        return "Huge";
    }
    return "Change me";
}
console.log(testSize(30));

//Golf code
var names = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
    return "Out";
}
console.log(golfScore(5,4));

//Switch statements
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
    }
    return answer;
}
console.log(caseInSwitch(2));

//Default options in switch statements
function switchOfStaff(val) {
    var answer = "";
    switch(val) {
        case "a":
            answer = "Apple";
            break;
        case "b":
            answer = "Bird";
            break;
        case "c":
            answer = "Cat";
            break;
        default:
            answer = "Stuff";
            break;
    }
    return answer;
}
console.log(switchOfStaff(2));

//Multiple identical options in switch statements
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1: 
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4: 
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7: 
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(1));

//Replacing if else chains with switch
function chainToSwitch(val) {
    var answer = "";
    switch(val) {
        case "bob":
            answer = "marley"
            break;
        case 42:
            answer = "the answer";
            break;
        case 1:
            answer = "there is no N`1";
            break;
        case 99:
            answer = "missed me by this much";
            break;
        case 7:
            answer = "ate 9";
            break;
    }
    return answer;
}
console.log(chainToSwitch(2));

//Returning boolean values from functions
function isLess(a,b) {
    return a < b; //We replace an if sentence with a returning boolean value.
}
console.log(isLess(10,15));

//Returning early pattern from functions
function abTest(a,b) {
    if(a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-1,2));

//Counting cards
var count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;    
            break;    
    }
    var holdbet = "Hold";
    if(count >= 0) {
        holdbet = "Bet";
    }
    return count + " " + holdbet;
}
cc(2); cc("K"); cc(10); cc("K"); cc("A");
console.log(cc(4));

//Build JavaScript Objects
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everithing!"]
};
var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};

//Accessing object properties with Dot notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//Accessing object properties with bracket notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
    "my side": "veggies"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
var sideValue = testObj["my side"]; //Because of the space

//Accesing object properties with variables
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);

//Updating object properties
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everithing!"]
};
var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};
ourDog.name = "Happy Camper";
myDog.tails = 5;
console.log(myDog.tails);

//Add new properties to an object
var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};
myDog.bark = "bow-wow";
myDog["barkk"] = "woof";

//Delete properties from an object
var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};
delete myDog.name;
console.log(myDog);

//Using objects for lookups
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "delta": "Denver"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("alpha"));

//Testing objects for properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp) {
    if(myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not found";
    }
}
console.log(checkObj("gift"));

//Manipulating complex objects
var myMusic = [
    {
        "artist": "Billy joel",
        "title": "Piano man",
        "release_year": 1973,
        "formats": ["CD", "8T", "LP"],
        "gold": true
    },
    {
        "artist": "Baeu Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": ["Youtube"]
    }
];

//Accessing nested objects 
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//Accessing nestedd arrays
var myPlants = [
    {
        type: "flowers",
        list: ["rose", "tulip", "dandelion"]
    },
    {
        type: "trees",
        list: ["fir", "pine", "birch"]
    }
];
var secondTree = myPlants[1].list[1];
console.log(secondTree);

//Record collection
var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": ["Let it rock", "You give love a bad name"]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": ["1999", "Little red corvette"]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold",
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection)); //makes a copy of the object 

function updateRecords(id, prop, value) {
    if(value === "") {
        delete collection[id][prop];
    } else if(prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(2468, "tracks", "test"));

//Iterate with while loops
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i ++;
}
console.log(myArray);

//Iterate with for loops
var ourArray = [];
for(var i = 0; i < 5; i ++) {
    ourArray.push(i);
}
console.log(ourArray);

var myArray = [];
for(var i = 1; i < 6; i ++) {
    myArray.push(i);
}
console.log(myArray);

//Iterate for numbers with a for loop
var ourArray = [];
for(var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);

var myArray = [];
for(var i = 1; i < 10; i += 2) {
    myArray.push(i);
}
console.log(myArray);

//Count backwards with a for loop
var ourArray = [];
for(var i = 10; i > 0; i -= 2){
    ourArray.push(i);
}
console.log(ourArray);

var myArray = [];
for(var i = 9; i > 0; i -= 2){
    myArray.push(i);
}
console.log(myArray);

//Iterate through an Array with a for loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;
for(var i = 0; i < ourArr.length; i++){
    ourTotal += ourArr[i];
}
console.log(ourTotal);

var myArr = [2, 3, 4, 5, 6];
var total = 0;
for(var i = 0; i < myArr.length; i ++) {
    total += myArr[i];
}
console.log(total);

//Nesting for loops
function multiplyAll(arr) {
    var product = 1;
    for(var i = 0; i < arr.length; i ++) {
        for(var j = 0; j < arr[i].length; j ++) {
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

//Iterate with do... while loops
var myArray = [];
var i = 10;
do {myArray.push(i);
    i ++;
} while (i < 5)
console.log(i, myArray);

//Profile lookup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "012345678",
        "likes": ["Pizza", "Coding", "Brownie points"]

    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0999812716",
        "likes": ["Howarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "123475939",
        "likes": ["Intriguin cases", "Violin"]
    },
    {
        "firstName": "Cristian",
        "lastName": "Boss",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming","Foxes"]
    }
];
function lookUpProfile(name, prop) {
    for(var i = 0; i < contacts.length; i ++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact"
}
var data = lookUpProfile("Akira", "likes");
console.log(data);

//Generate random fractions
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());

//Generate random whole numbers
var randomNumerBetween0and19 = Math.floor(Math.random() * 20);
function randomeWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomeWholeNum());

//Generate random whole numbers within a range
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1,9);

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    return 0;
}
var myRandom = randomRange(5,15);
console.log(myRandom);

//Use the parseInt function
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56"));

//Use the parseInt function with a Radix
function convertToInteger(str) {
    return parseInt(str, 2); //default base 10
}
console.log(convertToInteger("10011"));

//Use the conditional (ternary) operator
function checkEqual(a, b) {
    return a === b ? true : false;
    /*if(a === b) {
        return true;
    } else {
        return false;
    }*/
}
console.log(checkEqual(1,2));

//Use multiple conditional (ternary) operators
function checkSing(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "zero";
}
console.log(checkSing(10));

//Differences between the var and let keywords
let catName = "Quincy";
let quote;
catName = "Beau";
function catTalk() {
    "use strict";
    catName = "Oliver";
    quote = catName + "says meow";
}
console.log(catTalk());

//Compare scops of the var and let keywords
function checkScope() {
    "use strict";
    let i = "function scope";
    if(true) {
        let i = "block scope"; //only inside the if i = "block scope", let is not global
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
checkScope();

//Declare a read only variable with the const keyword
function printManyTimes(str) {
    "use strict";
    const sentence = str + " is cool!";
    /*sentence = str + " is amazing!";*/ //const cannot be re assing
    for(let i; i < str.length; i += 2) {
        console.log(sentence);
    }
}
printManyTimes("freeCodeComp");

//Mutate an array declared with const
const s = [5, 7, 2];
function editInPlace() {
    "use strict;"
    /*s = [2, 5, 7];*/ //can't re assing a const
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    return s;
}
console.log(editInPlace());

//Prevent object mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

//Use arrow functions to write concise anonymous functions
const magic = /*function() { return new Date(); };*/ () => new Date();  
//its the same, anonymous function, shorter version

//Write arrow functions with parameters
/*var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};*/
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2], [3,4,5]));

//Write higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//Write higher order arrow functions
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

//Use the rest operator with function parameters
const summ = (function() {
    return function summ(...args) {
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(summ(1,2,3));

//Use the spread operator to evaluate arrays in place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);

//Use destructuring assigment to assign variables from objects
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
const {x : A, y : B, z : C} = voxel; //quicker way to assign like above

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const {tomorrow : tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

//Destructuring assignment with nested objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83},
    tomorrow: { min: 73.3, max: 84.6}
};
function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow : {max : maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

//Use destructing assignment to assign variables from arrays
const [t, o, , g] = [1, 2, 3, 4, 5, 6];
console.log(t, o, g);
let q = 8, w = 6;
(() => {
    "use strict";
    [q, w] = [w, q];
})();  
console.log(q);
console.log(w);

//Use destructuring assignment with the rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [, , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//Use destructuring assignment to pass an object as a function's parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    return function half({max, min}) {
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));

//Create string using template literals
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for(let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

//Write concise object literal declarations using simple fields
const createPersons = (name, age, gender) => ({name, age, gender});
console.log(createPersons("Zodiac Hasbro", 56, "male"));

//Write concise declarative functions 
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//Use class syntax to define a constructor function
class SpaceShuttle {
    constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('jupiter');
console.log(zeus.targetPlanet);

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//Use getters and setters to control access to an object
class Book {
    constructor(author) {
        this._author = author;
    }
    get writer() {
        return this._author;
    }
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedtemp) {
            this._temp = updatedtemp;
        }
}
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);


//Understand the differences between import and require
/*import { capitalizeString } from "./index.html";
const cap = capitalizeString("hello!");
console.log(cap);
*/


//Use export to reuse a code block
/*const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString};
export const foo = "bar";
export const bar = "foo";
*/


//Use * to import everything from a file
/*import * as capitalizeStrings from "capitalized_strings";*/


//Create an export fallback with export default
/*export default function subtract(x, y) {return x - y;}*/


//Import a default export
/*import subtract from "math_functions";
subtract(7, 4);*/