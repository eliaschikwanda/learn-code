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
// The first element 'Red' automatically gets the value of zero no need to explicitly state and the following is one.
var backgroundColor = Color.Blue;


