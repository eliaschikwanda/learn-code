function log(message) {
    console.log(message);
}
var message = "What's app people?";

function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("We're done" + i); // because we have used var to declare i, it's available outside the for loop
                                    // but for languages like C++ and Java the i won't be available. So something defined
                                    // by var it's scope is available to the nearest function. Using let will not allow the
                                    // variable to be available in the after the for loop.
}

// Datatypes in TypeScript
let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[] = [1,2];
let f: any[] = [1, true, 'people'];

// The enum in typescript
enum Color {Red = 0, Green = 1, Blue = 3}; // The first element 'Red' automatically gets the value of zero no need to explicitly state and the following is one.
let backgroundColor = Color.Blue;
// This function
let logF = function(message) {
    console.log(message);
}
// can be writen as called an arrow function in TypeScript.
let doLog = (message) => console.log(message);

// You can define an interface ti bundle variables together
interface Point {
    x: number,
    y: number
}

// You can bundle variables together
let drawPoint = (point: Point) => { // The curly braces means that it's an object.
    // ....
}
drawPoint({
    x: 1,
    y: 2
})

// You can also use the class method
class ClassPoint {
    x : number;
    y: number;

    draw() {
        //....
    }

    getDistance(anotherPoint: ClassPoint) {

    }
}

let pointClass: ClassPoint;
