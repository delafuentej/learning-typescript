// Union types => combine types: allow us to define multiple allowed type 
//is especially convenient to type functions parameters => need to handle multiple types of input
//more flexibilty with type specificity

let ID: string | number;

ID="005";
ID=1;

const getMarginLeft=(margin: string | number)=>{
    return {"marginLeft":margin};
}

const printNumsAndStrings=(statement: string | number )=>{
    console.log(`Ì log: ${statement}`)
}
printNumsAndStrings("Hi");//Ì log: Hi
printNumsAndStrings(2);//Ì log: 2

console.log("---Type Guard")

//type guard =>conditional that check if a variable is a certain type
//type narrowing => when TS can figure out what type a variable can be at a given point in our code

const getMarginLeft2=(margin: string | number)=>{
    if(typeof margin === "string"){

        return margin.toLowerCase(); //since TS knows margin a string is, it will allow to use methods on margin
    }
    if(typeof margin=== "number"){
        //...
    }
}

const formatValue=(value: string | number)=>{
    if(typeof value === "string"){
        console.log(value.toLowerCase())
    }
    if(typeof value === "number"){
        console.log(value.toFixed(2))
    }
}

formatValue("Amazing!");//amazing!
formatValue(52);//52.00

console.log("----------------------------")

type User= {
    id:number,
    userName:string
}

const createUser=()=>{
    const randomChance= Math.random() >= 0.5;

    if(randomChance){
        return{
            id:1,
            userName:"Nico"

        }
        }else{
            return "Could not create a user."
    }
}

let userData: User | string =createUser();
console.log(userData);
console.log("---------------------------------")

console.log("---Unions & Arrays---")

const dateNumber= new Date().getTime();//number
const dateString= new Date().toString(); //string

const timeList: (number | string)[]=[dateNumber, dateString];

console.log(timeList)

//timeList.push(true); =>Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)


/* 
[
  1639563165627,
  'Wed Dec 15 2021 11:12:45 GMT+0100 (Central European Standard Time)'
]
*/

const formatListings=(listing:(string | number)[])=>{
    return listing.map((listing)=>{
        if(typeof listing === "string"){
            return listing.toUpperCase();
        }
        if(typeof listing === "number"){
            return `$${listing.toLocaleString()}`;

        }
    });
}

const result= formatListings([

    "Karl-Liebneckt-Str",
    100000,
    "Karl Heine Str",
    150000
])

console.log(result);//[ 'KARL-LIEBNECKT-STR', '$100,000', 'KARL HEINE STR', '$150,000' ]


console.log("---Common Key Value Pairs---")


type Goose ={

    isPettable:boolean;
    hasFeathers:boolean;
    canThwartAPicnic:boolean;
}
type Moose ={
    isPettable:boolean;
    hasHoofs:boolean;
}
const pettingZooAnimal: Goose | Moose ={ isPettable:true}

console.log(pettingZooAnimal.isPettable);//true
//console.log(pettingZooAnimal.hasFeathers);=> Property 'hasFeathers' does not exist on type 'Goose | Moose'.

console.log("-------------------------")
type Like = {
    userName:string;
    displayName:string;
}

type Share ={
    userName:string;
    displayName:string;
}

const getFriendNameFromEvent=(event: Like | Share)=>{
    return event.displayName || event.userName;//Property 'displayName' does not exist on type 'Like | Share'.

}

const newEvent ={
    userName:"pepito_grillo",
    displayName:"Benito Kamelas",
};

const friendName=getFriendNameFromEvent(newEvent)
console.log(friendName);//Benito Kamelas

console.log("---Unions with literal Types---")

// literal type unions are useful when we want to create distinct states within a program

type Color = "green" | "yellow" | "blue";

const changeLight=(color:Color)=>{
    //body
}

type Status = "idle" | "downloading" | "complete";

const downloadStatus=(status: Status)=>{
    if(status ==="idle"){
        console.log("Download")
    }
    if(status ==="downloading"){
        console.log("Downloading...")
    }
    if(status ==="complete"){
        console.log(`Your download is ${status}!`)
    }
    
}

downloadStatus("complete");//Your download is complete!
