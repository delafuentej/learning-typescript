"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("---Interfaces & Types---");
console.log("------------------------");
const updateRunGoal = (run) => {
    console.log(`
        Miles left: ${50 - run.miles}
        Percent of goal: ${(run.miles / 50) * 100}% complete
    `);
};
updateRunGoal({
    miles: 5,
});
/*
Miles left: 45
Percent of goal: 10% complete
 */
console.log("---Interfaces & Classes---");
//to apply the type Robot to OneSeries =>implements
class OneSeries {
    identify(id) {
        console.log(`beep! bepp! I am ${id.toFixed(2)}`);
    }
    //additionally "OneSeries" can habe methods and properties of its own:
    answerQuestion() {
        console.log("42!");
    }
}
console.log("--------------------------------------");
class DesktopDirectory {
    addFile(name) {
        console.log(`Adding files: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const Desktop = new DesktopDirectory();
Desktop.addFile("lesson-notes.text"); //Adding files: lesson-notes.text
Desktop.showPreview("lesson-notes.text"); //Opening preview of file: lesson-notes.text
console.log("---Deep Types---");
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
console.log("---------------------------------------");
class DesktopDirectory2 {
    constructor() {
        this.config = {
            default: {
                encoding: "utf-8",
                permissions: "drw-rw-rw"
            }
        };
    }
    addFile(name) {
        console.log(`Adding files: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const Desktop2 = new DesktopDirectory2();
console.log(Desktop2.config); //{ default: { encoding: 'utf-8', permissions: 'drw-rw-rw' } }
console.log("---Composed Types---");
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
console.log("------------------------------------------");
class DesktopDirectory3 {
    constructor() {
        this.config = {
            default: {
                encoding: "utf-8",
                permissions: "drw-rw-rw"
            }
        };
    }
    addFile(name) {
        console.log(`Adding files: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const Desktop3 = new DesktopDirectory3();
console.log(Desktop3.config); //{ default: { encoding: 'utf-8', permissions: 'drw-rw-rw' } }
console.log("---extending interfaces---");
//color property is required
const mySquare = {
    sideLength: 10,
    color: "blue"
};
console.log("--------------------------------------------");
const me = {
    code: () => {
        console.log("Headphenes on. Coffee brewed. Editor open");
    },
    name: "Jan",
    hobbies: ["Hicking"]
};
me.code(); //Headphenes on. Coffee brewed. Editor open
console.log(me.name); //Jan
console.log("---index signatures---");
//to write an object type that allows us to include a variable name for the property name
/* {
    "40.717654": true;
    "41.181746":true;
    "41.212628":false;

}

interface SolarEclipse {
    [latitude:string]:boolean;
} */
console.log("---optional type members---");
const listFile = (options) => {
    let fileName = options.name;
    if (options.size) {
        fileName = `${fileName}: ${options.size}`;
    }
    return fileName;
};
console.log(listFile({ name: "readme.txt" })); //readme.txt
console.log(listFile({ name: "notes.txt", size: "1MB" })); //notes.txt: 1MB
console.log("---------------------------------------------------------");
const getUserName = (options) => {
    if (options.firstName && options.lastName) {
        return console.log(`${options.firstName} ${options.lastName}`);
    }
    return console.log(options.userName);
};
getUserName({
    firstName: "Juan",
    lastName: "Garces",
    userName: "jgarces"
}); // Juan Garces
getUserName({
    firstName: "Anne",
    userName: "anne.kohl"
}); //anne.kohl
