import { AxiosProxyConfig } from "axios";

console.log("---Interfaces & Types---");
//interface <==> type => to define types
// interface does not required an equals sign(=)
// type  & interface => are identical :both will enforce the typed object at compile time when typing a variable
//                   => biggest difference : interface: only to type objects
//                                           type:to type objects, primitives,..(more versatile and functional)
/* 
type Mail ={
    postagePrice: number;
    address: string;

}
*/

//typed Object named Mail:
interface Mail {
    postagePrice: number;
    address: string;
}

console.log("------------------------")

interface Run {
    miles: number;
}


const updateRunGoal=(run: Run)=>{

    console.log(`
        Miles left: ${50- run.miles}
        Percent of goal: ${(run.miles /50)*100}% complete
    `)
}
updateRunGoal({
    miles:5,
})

/* 
Miles left: 45
Percent of goal: 10% complete
 */

console.log("---Interfaces & Classes---")

// "interface" is especially good for adding types to a class
//"implements" keyword => to apply a type to an object/class
// both allows us to create types that match a variety of class patterns

interface Robot {
    identify: (id:number)=> void;
}

//to apply the type Robot to OneSeries =>implements
class OneSeries implements Robot {
    identify(id:number){
        console.log(`beep! bepp! I am ${id.toFixed(2)}`)
    }
    //additionally "OneSeries" can habe methods and properties of its own:
    answerQuestion(){
        console.log("42!")
    }
}

console.log("--------------------------------------")

interface Directory {
    addFile: (name:string)=> void;
}

class DesktopDirectory implements Directory{
    addFile(name:string){
        console.log(`Adding files: ${name}`)
    }
    showPreview(name:string){
        console.log(`Opening preview of file: ${name}`)
    }    
}

const Desktop= new DesktopDirectory();

Desktop.addFile("lesson-notes.text");//Adding files: lesson-notes.text
Desktop.showPreview("lesson-notes.text");//Opening preview of file: lesson-notes.text



console.log("---Deep Types---")

//nested methods and properties => more complicity of our program
// TS allows us to infinitely nest objects so that we can describe data correctly

/* interface Robot2{
    about: {
        general: {
            id: number;
            name: string;
        };
    };
    getRobotId: ()=> string;
}

class OneSeries2 implements Robot2{

    about;

    constructor(props:{
        general: {
            id:number;
            name:string;
        }
    }){
        this.about=props;
    }

    getRobotId=()=>{
        return `ID: ${this.about.general.id}`
    }
    getRobotName=()=>{
        return `NAME: ${this.about.general.name}`
    }
}

 */

console.log("---------------------------------------")

interface Directory2 {
    
    addFile: (name:string)=> void;
    config: {
        default: {
            encoding: string;
            permissions: string;
        }
    }
    
}

class DesktopDirectory2 implements Directory2{
    config ={
        default: {
            encoding: "utf-8",
            permissions:"drw-rw-rw"
        }
    }
    addFile(name:string){
        console.log(`Adding files: ${name}`)
    }
    showPreview(name:string){
        console.log(`Opening preview of file: ${name}`)
    }    
}

const Desktop2= new DesktopDirectory2();

console.log(Desktop2.config);//{ default: { encoding: 'utf-8', permissions: 'drw-rw-rw' } }


console.log("---Composed Types---")

/* 
interface About {

    general: {
        id: number;
        name: string;
        version: {
            versionNumber: number;
        }

    }
}// as our code expands and we need more features==> we can define multiple types and reference them inside other types

interface About{
    general: General;
}
interface General {
    id: number;
    name: string;
    version: Version;
}
interface Version {
    versionNumber:number;
}



*/


console.log("------------------------------------------")


interface Directory3 {
    addFile: (name:string)=> void;
    config: Config;
}

interface Config {
    default: DefaultConfig;
}
interface DefaultConfig {
    encoding: string;
    permissions: string;


}
    
   

class DesktopDirectory3 implements Directory3{
    config ={
        default: {
            encoding: "utf-8",
            permissions:"drw-rw-rw"
        }
    }
    addFile(name:string){
        console.log(`Adding files: ${name}`)
    }
    showPreview(name:string){
        console.log(`Opening preview of file: ${name}`)
    }    
}

const Desktop3= new DesktopDirectory3();

console.log(Desktop3.config);//{ default: { encoding: 'utf-8', permissions: 'drw-rw-rw' } }

console.log("---extending interfaces---")


interface Shape {
    color: string
}

interface Square extends Shape {
    sideLength:number
}

//color property is required
const mySquare: Square = {
    sideLength:10,
    color:"blue"
}

console.log("--------------------------------------------")

interface Human {
    name: string;
    hobbies: string[];
}
interface Developer extends Human{
    code: ()=> void;
}


const me: Developer ={
    code: ()=>{
        console.log("Headphenes on. Coffee brewed. Editor open")
    },
    name: "Jan",
    hobbies:["Hicking"]
}
me.code();//Headphenes on. Coffee brewed. Editor open
console.log(me.name);//Jan

console.log("---index signatures---")

//to write an object type that allows us to include a variable name for the property name

/* {
    "40.717654": true;
    "41.181746":true;
    "41.212628":false;

}

interface SolarEclipse {
    [latitude:string]:boolean;
} */

console.log("---optional type members---")

//every interface assumes that every type member is required =>TS allows us to make that some type members optional

interface OptionsType {
    name:string;
    size:string;
}

const listFile=(options: OptionsType)=>{
    let fileName=options.name;
    
    if(options.size){
        fileName = `${fileName}: ${options.size}`
    }
    return fileName;
}


console.log(listFile({name: "readme.txt"}));//readme.txt
console.log(listFile({name:"notes.txt",size:"1MB"}));//notes.txt: 1MB

console.log("---------------------------------------------------------")


interface UserNameOptions {
    firstName?:string;
    lastName?:string;
    userName:string;
}
const getUserName=(options:UserNameOptions)=>{

    if(options.firstName && options.lastName){
        return console.log(`${options.firstName} ${options.lastName}`)
    }
    return console.log(options.userName)

}
getUserName({
    firstName:"Juan",
    lastName:"Garces",
    userName:"jgarces"
});// Juan Garces
getUserName({
    firstName:"Anne",
    userName:"anne.kohl"
});//anne.kohl


