console.log("---INTRO---");
let customersArray = [
    "Custy Stomer",
    "C.Oostomar",
    "C.U.S. Tomer",
    3432434,
    "Custo Mer",
    "Custopher Ustomer",
    3432435,
    "Kasti Yastimeur"
];
customersArray[4] = 4;
const checkCustomerArray = () => {
    for (let i = 0; i < customersArray.length; i++) {
        if (typeof customersArray[i] !== "string") {
            console.log(`Type error: ${customersArray[i]} should be a string!`);
        }
    }
};
checkCustomerArray();
/* Type error: 3432434 should be a string!
Type error: 4 should be a string!
Type error: 3432435 should be a string! */
const stringPush = (val) => {
    if (typeof val === "string") {
        customersArray.push(val);
    }
};
console.log("---ARRAY TYPE ANNOTATIONS---"); //Type 'number' is not assignable to type 'string'.ts(2322)
let names = ["Jan", "Sara", "Karl"];
let names2 = ["Peter", "Anne"];
let booleans = [true, false, true, false];
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
/* let names3:string[] = [true, 1, 2]
 */ /* type error
*/
console.log("---MULTI-DIMENSIONAL ARRAYS---");
let multiDimArr = [["str1,str2,str3"], ["a", "b", "c"]];
let multiDimArr2 = [[[1], [2]], [[1, 2], [1, 2, 3]]];
let multiDimArr3 = [booleans, booleans];
console.log(multiDimArr3);
console.log("---TUPLES---");
let tuple1 = [1, "home", true, "work"];
let tuple2 = [[1, "trip"], [2, "watch"]];
/* let tuple3:[number,number,number]=[1,5,9,13] */ //Type '[number, number, number, number]' is not assignable to type '[number, number, number]'.
let tuple3 = [1, "morning"];
let tuple4 = [2, "afternoon"];
//tuple3=["hi","hola"];//Type 'string' is not assignable to type 'number'.ts(2322)
tuple3 = [3, "night"];
console.log(tuple3); //[ 3, 'night' ]
tuple3 = tuple4;
console.log(tuple3); //[ 2, 'afternoon' ]
let tuple5 = ["The Godfather", "Magnolia"];
let arr = ["Taxidriver", "The Shinning"];
arr = tuple5;
console.log(arr); //[ 'The Godfather', 'Magnolia' ]
let coordinates = [30, 40, "N", 50.4, 78.5, "E"];
coordinates = [17, 50, "N", 150, 38, "W"];
console.log(coordinates); //[ 17, 50, 'N', 150, 38, 'W' ]
coordinates[4] = -69;
console.log(coordinates); //[ 17, 50, 'N', 150, -69, 'W' ]
console.log("---ARRAY TYPE INFERENCE---");
let answers = [true, true, false, true];
answers[4] = false; //[ true, true, false, true, false ]
let answers1 = [true, true, false, true]; //Type 'false' is not assignable to type 'undefined'.ts(2322)
let concatAnswers1 = answers1.concat([false]);
console.log("concatAnswers1", concatAnswers1); //concatAnswers1 [ true, true, false, true, false ]
console.log(answers);
/* console.log(answer1) */
//ReferenceError: answer1 is not defined
let tup = [4, 5, 6];
let concatResult = tup.concat([7, 8, 9]);
console.log(concatResult); //[ 4, 5, 6, 7, 8, 9 ]
let dogTup = ["dog", "brown", "curly"];
let myDog = dogTup.concat(dogTup);
myDog[50] = "it is a cat";
console.log(myDog);
/*
[
  'dog',
  'brown',
  'curly',
  'dog',
  'brown',
  'curly',
  <44 empty items>,
  'it is a cat'
]
*/
console.log("---REST PARAMETERS---");
//Assigning type to rest parameters
let smush = (firstString, ...othersString) => {
    let output = firstString;
    for (let i = 0; i < othersString.length; i++) {
        output = output.concat(othersString[i]);
    }
    console.log(output);
};
smush("la", "le", "li", "lo", "lu"); //lalelilolu
smush("la", "le", "li");
const addPower = (pow, ...numbersToAdd) => {
    let answer = 0;
    for (let i = 0; i < numbersToAdd.length; i++) {
        answer = numbersToAdd[i] ** pow;
    }
    console.log(answer);
};
addPower(2, 2, 3); //9
addPower(3, 3, 3); //27
console.log("---SPREAD SYNTAX---");
const performDanceMove = (moveName, moveReps, hasFlair) => {
    console.log(`I do the movement ${moveName}, ${moveReps} times!`);
    if (hasFlair) {
        console.log("whit flair");
    }
};
let danceMoves = [
    ["clap", 2, true],
    ["wing fly", 4, false],
    ["wing flap", 5, true],
    ["beak", 3, true]
];
const allMoves = danceMoves.forEach((danceMove) => performDanceMove(...danceMove));
console.log(allMoves);
/*
I do the movement clap, 2 times!
whit flair
I do the movement wing fly, 4 times!
I do the movement wing flap, 5 times!
whit flair
I do the movement beak, 3 times!
whit flair


*/
const mySort = (...mixed) => {
    mixed.sort();
    console.log(mixed);
};
mySort("lemon", 1, true, false, undefined, "apple", 1.25); //[ 1, 1.25, 'apple', false, 'lemon', true, undefined ]
console.log("-----Spred syntax for a tuple------");
//A tuple has a fixed number of elements
//A tuple maintains a strict ordering of its elements to ensure the correct types are assigned to its elements
//Even if all the elements of a tuple are of the same type, each type has to be declared separately
const policy = (name, age, minor) => {
    if (minor) {
        console.log(`No wine or alchohol purchase allowed for ${name} who is ${age} years old`);
    }
    return;
};
const adult = ["Dan", 15, false];
console.log(policy(...adult));
console.log("----------------");
let praises = [];
let messages = ["love it", "cool", "awesome", "magnificent", "superb", "great"];
for (let i = 0; i < 5; i++) {
    praises.push([messages[Math.floor(Math.random() * 6)]]);
}
console.log(praises);
/*
[
  [ 'love it' ],
  [ 'love it' ],
  [ 'great' ],
  [ 'cool' ],
  [ 'magnificent' ]
]

*/
console.log("---------------");
const range = (...myData) => {
    myData.sort();
    /*     console.log(myData[myData.length-1])
    
     */
    /*     console.log(myData[0])
     */ return myData[myData.length - 1] - myData[0];
};
console.log(range(3, 7, 5));
console.log(range(4, 2, 3, 5, 4, 8));
console.log("---------------------");
// generic type for an array in TS
let cities = [
    "Madrid",
    "Paris",
    "London",
    "Rome",
    "Berlin"
];
console.log("-------------------------");
let dinner = ["Chicken", "Bristek", "Spaghetti"];
let lunch = ["Sandwich", "Soup", "Bread"];
let todaysMenu = [["Cereal", "Toast"], dinner];
let weeklyMenu = [todaysMenu, [lunch]];
console.log("---CUSTOM TYPES---");
//Custom Types enable type checking that is tailores to your exact purposes: tuples 
//let myVar:comType;
//const testFn =(param:comType):returnedCompType =>{
//function body
// }
console.log("---Custom Types: Enums---");
// To enumerate all the possible values that a variable could have
/*
enum DirectionNumber{

    North,
    South,
    East,
    West
}
let wichWayToArticOcean:Direction;
wichWayToArticOcean:Direction.North;
wichWayToArticOcean:Direction.Southeast;//Property 'Southeast' does not exist on type 'typeof Direction'.ts(2339)

console.log(Direction.North===0);//true
console.log(Direction.South===2);//This condition will always return 'false' since the types 'Direction.South' and '2' have no overlap.ts(2367)
*/
let petOnSale = "chinchilla";
//list of orders to process:ordersArray [pet name string, number ordered]
let ordersArray = [
    ["rat", 2],
    ["chinchilla", 1],
    ["hamster", 2],
    ["tarantula", 5]
];
var Pet;
(function (Pet) {
    Pet[Pet["Hamster"] = 0] = "Hamster";
    Pet[Pet["Rat"] = 1] = "Rat";
    Pet[Pet["Chinchilla"] = 2] = "Chinchilla";
    Pet[Pet["Tarantula"] = 3] = "Tarantula";
})(Pet || (Pet = {}));
const petOnSaleTS = Pet.Chinchilla;
/*
let ordersArrayTS= [Pet, number][]=[
    
    [Pet.Rat,2],
    [Pet.Chinchilla,1],
    [Pet.Hamster, 2],
    [Pet.Tarantula,5]

] */
//ordersArrayTS.push([Pet.Jerboa,3])//Property 'Jerboa' does not exist on type 'typeof Pet'.ts(2339)
console.log("---String Enums VS Numeric Enums---");
//TS allows us to use enums based on strings referred to as string enums
//We must write the enums string explicitly
//Convention: the string value of the enum variable is just the capitalized form of the variable name
var DirectionString;
(function (DirectionString) {
    DirectionString["North"] = "NORTH";
    DirectionString["South"] = "SOUTH";
    DirectionString["East"] = "EAST";
    DirectionString["West"] = "WEST";
})(DirectionString || (DirectionString = {}));
var Pet2;
(function (Pet2) {
    Pet2["Hamster"] = "HAMSTER";
    Pet2["Rat"] = "RAT";
    Pet2["Chinchilla"] = "CHINCHILLA";
    Pet2["Tarantula"] = "TARANTULA";
})(Pet2 || (Pet2 = {}));
const petOnSaleTS2 = Pet2.Chinchilla;
let ordersArrayTS2 = [
    [Pet2.Rat, 2],
    [Pet2.Chinchilla, 1],
    [Pet2.Hamster, 3],
    [Pet2.Chinchilla, 10]
];
ordersArrayTS2.push(["HAMSTER", 6]); //Type '"HAMSTER"' is not assignable to type 'Pet2'.ts(2322)
ordersArrayTS2.push([Pet2.Tarantula, 10]);
console.log(ordersArrayTS2);
/*
[
  [ 'RAT', 2 ],
  [ 'CHINCHILLA', 1 ],
  [ 'HAMSTER', 3 ],
  [ 'CHINCHILLA', 10 ],
  [ 'HAMSTER', 6 ],
  [ 'TARANTULA', 10 ]
]
*/
console.log("---OBJECT TYPES--");
let aPerson;
/* aPerson={
    name:"Alison",
    age:"20"//Type 'string' is not assignable to type 'number'.ts(2322)

}
 */
/* aPerson={
    name:"Anne",
    yearsOld:20 //Type '{ name: string; yearsOld: number; }' is not assignable to type '{ name: string; age: number; }'.

} */
aPerson = {
    name: "Jon",
    age: 25
};
let aCompany;
console.log("---------------------------------");
const sayHappyBirthdayWithObject = (personObject) => {
    let output = '';
    output += 'Happy Birthday '
        + personObject.name + '! ';
    output += 'You are now '
        + personObject.age + ' years old! ';
    output += 'Your birthday wish was to receive '
        + personObject.giftWish
        + '. And guess what? You will ';
    if (!personObject.success) {
        output += 'not ';
    }
    output += 'receive it! \n';
    console.log(output);
};
let birthdayBabies = [
    { name: 'Liam', age: 30, giftWish: 'karate skills', success: false },
    { name: 'Olivia', age: 40, giftWish: 'a bright future', success: true },
    { name: 'Ava', age: 35, giftWish: '$0.25', success: true }
];
birthdayBabies.forEach(sayHappyBirthdayWithObject);
/*
Happy Birthday Liam! You are now 30 years old! Your birthday wish was to receive karate skills. And guess what? You will not receive it!

Happy Birthday Olivia! You are now 40 years old! Your birthday wish was to receive a bright future. And guess what? You will receive it!

Happy Birthday Ava! You are now 35 years old! Your birthday wish was to receive $0.25. And guess what? You will receive it!

*/
console.log("-----------------------------");
console.log("---Type Aliases---");
let aCompany2;
let caCoordinates = [40, 50, "N", -60.9, 49, "W"];
console.log("---FUNCTION TYPES---");
let myFunc;
myFunc = (firstName, lastName) => {
    return firstName.length + lastName.length;
};
const median = (items) => {
    items.sort();
    return items[Math.floor(items.length / 2)];
};
console.log(median([5, 9, 1, 3]));
console.log(myFunc("Jesus", "de la Fuente")); //17
// Math Operations
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
function wrongAdd(a, b) { return (a + b) + ''; }
// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback) {
    console.log("Let's learn how to", operationCallback.name, '!');
    let value25 = operationCallback(2, 5);
    console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
    console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25, 7), '.');
    console.log('Now fill out this worksheet.');
}
// Call your functions below:
mathTutor(add);
mathTutor(wrongAdd);
console.log("---Generic Types---");
let stringFamily = {
    parents: ["Jan", "Susane"],
    mate: "string",
    children: ["Potato", "Patata", "Potatín"]
};
console.log("---------------------");
//Do not change the code above this line.
//Provide type annotations for the variables below:
let theFamily = {
    parents: [3, 4], mate: 9, children: [5, 30, 121]
};
let someFamily = {
    parents: [true, true], mate: false,
    children: [false, false, true, true]
};
let aFamily = {
    parents: [
        { name: 'Mom', job: 'software engineer' },
        { name: 'Dad', job: 'coding engineer' }
    ],
    mate: { name: 'Matesky', job: 'engineering coder' },
    children: [{ name: 'Babesky', job: 'none' }]
};
let anotherFamily = {
    parents: [
        { name: 'Momo', tailWagSpeed: 3 },
        { name: 'Dado', tailWagSpeed: 100 }
    ],
    mate: { name: 'Cheems', tailWagSpeed: 7 },
    children: [
        { name: 'Puppin', tailWagSpeed: 0.001 },
        { name: 'Puppenaut', tailWagSpeed: 0.0001 },
        { name: 'Puppenator', tailWagSpeed: 0.01 }
    ]
};
console.log("---Generic Functions---");
const getFilledArray = (value, n) => {
    return Array(n).fill(value);
};
console.log(getFilledArray(5, 3)); //[ 5, 5, 5 ]
console.log(getFilledArray("potatoes", 4)); //[ 'potatoes', 'potatoes', 'potatoes', 'potatoes' ]
const getFilledArray2 = (value, n) => {
    return Array(n).fill(value);
};
console.log(getFilledArray2(true, 8));
/*
[
  true, true, true,
  true, true, true,
  true, true
]
*/
function getFilledArray3(value, n) {
    return Array(n).fill(value);
}
let stringArray;
let numberArray;
let personArray;
let coordinateArray;
// Write your code below:
stringArray = getFilledArray3("morning", 3);
console.log(stringArray); //[ 'morning', 'morning', 'morning' ]
numberArray = getFilledArray3(5, 2);
console.log(numberArray);
/* [ 5, 5 ] */
personArray = getFilledArray3({
    name: "Mr.Potato",
    age: 89
}, 3);
console.log(personArray);
/* [
{ name: 'Mr.Potato', age: 89 },
{ name: 'Mr.Potato', age: 89 },
{ name: 'Mr.Potato', age: 89 }
] */
coordinateArray = getFilledArray3([-5.6, 8], 2);
console.log(coordinateArray);
/*
[ [ -5.6, 8 ], [ -5.6, 8 ] ] */
