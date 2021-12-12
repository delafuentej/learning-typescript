//to generate a js.file => CLI=> tsc index.ts


//TYPE INFERENCES ==> when declare a variable with a initial value, the variable can never be reassigned a value of a different data type

console.log("--------TYPES-------")
console.log("---TYPE INFERENCES---")

let aged=true;
let realAge=0;

console.log(typeof aged);//boolean
console.log(typeof realAge);//number

if(aged){
    realAge="4" //==>  TYPE INFERENCES==> Type "string" is not assignable to type "number"
}

console.log(typeof realAge)//string
let dogAge=realAge*7;//28

console.log(typeof dogAge);//number

console.log(`${dogAge} years`)//28 years


let order="first";
order=1; // TYPE iNFERENCES ==> Type "number" is not assignable to type "string"


//CLI ==> tsc index.ts
/* index.ts:13:5 - error TS2322: Type '"4"' is not assignable to type 'number'.

13     realAge="4" // TYPE INFERENCES==> Type "string" is not assignable to type "number"
       ~~~~~~~

index.ts:26:1 - error TS2322: Type '1' is not assignable to type 'string'.

26 order=1; // TYPE iNFERENCES ==> Type "number" is not assignable to type "string"
   ~~~~~


Found 2 errors.
 */
console.log("---TYPE SHAPES---")

//TYPE SHAPES ==> An object’s shape describes , among other things, what properties and methods it does or doesn’t contain // The built-in types in JS each have know properties
//and methods that always exist


console.log("HOME".length);//4
/* console.log("HOME".toLowercase());//Type Shapes: Property 'toLowercase' does not exist on type '"HOME"'. Did you mean 'toLowerCase'?ts(2551)
 */
let firstName="jan";
/* console.log(firstName.toUppercase())
 */
/* index.ts:55:23 - error TS2551: Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?

55 console.log(firstName.toUppercase())
                         ~~~~~~~~~~~

  ../../../usr/share/nodejs/typescript/lib/lib.es5.d.ts:492:5
    492     toUpperCase(): string;
            ~~~~~~~~~~~~~~~~~~~~~~
    'toUpperCase' is declared here. */
/* console.log(firstName.lenght);
 */
/* index.ts:65:23 - error TS2551: Property 'lenght' does not exist on type 'string'. Did you mean 'length'?

65 console.log(firstName.lenght);
                         ~~~~~~

  ../../../usr/share/nodejs/typescript/lib/lib.es5.d.ts:501:14
    501     readonly length: number;
                     ~~~~~~
    'length' is declared here. */



    console.log("---TYPE: ANY---")

    //when a variable is declared without being assigned an initial value==>TypeScript will consider a variable to be of type any==> does not produce an error

    let onOrOff;
    console.log(typeof onOrOff);//undefined
    onOrOff=1;
    console.log(typeof onOrOff);//number
    onOrOff=true;
    console.log(typeof onOrOff);//boolean


    console.log("---TYPE ANNOTATIONS---")


   /*  let mustBeANumber:number; */
   /*  mustBeANumber="eight"; */
    //Type 'string' is not assignable to type 'number'.ts(2322)

/*     mustBeANumber=9;
 */
let phoneNumber;
/* let phoneNumber:string;
 */
if(Math.random()>.5){
    phoneNumber="999 999 999"
}else{
    phoneNumber="666 666 666"
}
console.log(typeof phoneNumber)


const exclaim=(name:string, count:number)=>{
    for(let i=0;i<count;i+=1){
        console.log(`${name}`)
    }
    return;
}

exclaim("mario!",3)

console.log("---PARAMETER TYPE ANNOTATIONS---")
const triple=(value:number)=>{
    return value*3
}

const greetTripled=(greeting:string,value:number)=>{
    console.log(`${greeting}`,`${triple(value)}`)
}

greetTripled("hallo",2);//hallo 6


const greet=(name)=>{
    console.log(`Hi, ${name || "Anonimous"}!`)
}

greet();
greet("Jan")


console.log("---OPTIONAL PARAMETERS---")
const proclaim=(status?:string)=>{
    console.log(`I am ${status || "not ready..."}`);
}

proclaim();
proclaim("ready?");
proclaim("ready!");


console.log("---DEFAULT PARAMETERS---")



const greet2=(name="Anonymous")=>{
    console.log(`Hello, ${name}!`)
}

greet2()

const proclaim2=(status="i am not ready...", repeat=1)=>{

    for(let i=0;i<repeat; i++){
        console.log(`I am ${status}`)
    }
}

proclaim2()
proclaim2("ready")
proclaim2("sad",3)

console.log("---INFERRING RETURN TYPES");

const createGreeting=(name:string)=>{
    console.log(`Hi, ${name}`)
}

const myGreeting=createGreeting("Tomas Turbado");

const ouncesToCups=(ounces:number)=>{
    console.log(`${ounces/16} cups`)
}
/* const liquidAmount:number=ouncesToCups(3)
 */
const liquidAmount=ouncesToCups(3)

console.log("---VOID RETURN TYPE---")

const makeFruitSalad=(fruit1:string, fruit2:string):void=>{
    let salad=fruit1+fruit2+fruit2+fruit1+fruit1+fruit2;
    console.log(salad)
}

makeFruitSalad("banana","orange");


const repeatSyllableSong=(syllable:string, repeatNumber:number):void=>{
    let song:string="";
    for(let i=0;i<= repeatNumber;i++){
        song+=syllable;
    }
    console.log(song)
}

repeatSyllableSong("lalali", 5)


const factorFiction=()=>{

    return Math.random() >=.5 ? true:false;
}

const myAnswer :boolean =factorFiction()

console.log(myAnswer);


const sillyNameGenerator=( index1: number, index2: number):void=>{

    let firstName=["Elena","Tomás","Maki"];
    let lastName=["Turbado","Navaja","Nito"];

    console.log(`${firstName[index1]} ${lastName[index2]}`)
}
sillyNameGenerator(0,2)
sillyNameGenerator(1,0)
sillyNameGenerator(2,1)

const customer=(order:number, name:string)=>{
    console.log(`Order = ${order}, Name = ${name}`);
}
customer(2,"Alex");

const proclaims3=(status="The wheels on the bus go",repeat=3)=>{
    console.log(status);
    for(let i=0;i<repeat;i++){
        console.log("...round and round")
    }
}
proclaims3()


