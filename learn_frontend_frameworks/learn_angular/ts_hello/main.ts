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
    private x : any;
    private y: any;

    // In TS you can only have one constructor in a class
    // so the best way to only create instances without passing
    // a value is to make the arguments optional by inserting a ?
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    // The code above with class definition can be constructed with condensed in the line below
    // constructor(private x?: number, private y?: number)
    // with the above code the TS compiler creates x and y fields and assigns the x and y values
    // with items passed into the constructor.

    draw() {
        console.log('x: ' + this.x + ' y: ' + this.y)
    }

    getDistance(anotherPoint: ClassPoint) {

    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }
}

let pointClass = new ClassPoint(1, 2); // When defining an object of a custom type we need to explicitly allocate memory by using new.
pointClass.draw();

// Sometimes you don't need to edit the values of an object you have initialized it with
// You can use an access modifier to restrict editing the document. Which is the use a keyword
// to control accesss a member of a class from outside. In TS there are 3 access modifiers which
// are public, private and protected.
