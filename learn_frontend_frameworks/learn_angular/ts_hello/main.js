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
var a;
var b;
var c;
var d;
var e = [1, 2];
var f = [1, true, 'people'];
// The enum in typescript
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
; // The first element 'Red' automatically gets the value of zero no need to explicitly state and the following is one.
var backgroundColor = Color.Blue;
// This function
var logF = function (message) {
    console.log(message);
};
// can be writen as called an arrow function in TypeScript.
var doLog = function (message) { return console.log(message); };
// You can bundle variables together
var drawPoint = function (point) {
    // ....
};
drawPoint({
    x: 1,
    y: 2
});
// You can also use the class method
var ClassPoint = /** @class */ (function () {
    function ClassPoint() {
    }
    ClassPoint.prototype.draw = function () {
        console.log('x ' + this.x + ' y ' + this.y);
    };
    ClassPoint.prototype.getDistance = function (anotherPoint) {
    };
    return ClassPoint;
}());
var pointClass = new ClassPoint(); // When defining an object of a custom type we need to explicitly allocate memory by using new.
pointClass.x = 2;
pointClass.y = 3;
pointClass.draw();
