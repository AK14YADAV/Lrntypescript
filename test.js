"use strict";
exports.__esModule = true;
function test(n1, n2) {
    if (n1) {
        console.log(n1);
    }
    else {
        console.log(n1 + n2);
    }
}
test(10, 20);
function fullname(p) {
    console.log("" + p.fn + p.ln + p.add + p.age);
}
var emp = {
    fn: "ajay",
    ln: "kumar",
    add: "noida",
    age: 23
};
fullname(emp);
