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
