/*
var message: string = "Hello World"
console.log(message)

*/
//This is an example of Typescript Orientation
/*
class Greeting {
    greet(): void {
        console.log("Hello Ajay!!!")
    }
    exp():void{
        console.log("I'm Typescript Object Orientation")
    }
}
var obj = new Greeting();
obj.greet()
obj.exp()
*/
//Variable Declartion Example
/*
var name= "John";
var score1: number = 50;
var score2: number = 42.50
var sum = score1 + score2
console.log("name: " + name)
console.log("first score: " + score1)
console.log("second score: " + score2)
console.log("sum of the scores: " + sum)

*/
//Type Assertion Example that convert type of variable
/*
var nme:string="1"
var num:number=<number><any>nme
console.log(num);
*/
//Inferred Typing in Typescript
/*
var num = 2;    // data type inferred as  number
console.log("value of num " + num);
num = "12";// it give error
console.log(num);

*/
/*
            //Scope Example
var global_num = 12          //global variable
class Numbers {
    num_val = 13;             //class variable
    static sval = 10;         //static field

    storeNum(): void {
        var local_num = 14;    //local variable
    }
}
console.log("Global num: " + global_num)
console.log(Numbers.sval)   //static variable
var obj = new Numbers();
console.log("Global num: " + obj.num_val)

*/
/*
var x: number = 4
var y = -x;
console.log("value of x: ", x);   //outputs 4
console.log("value of y: ", y);   //outputs -4

*/
/*
            //Conditonal Statement
var num: number = -2
var result = num > 0 ? "positive" : "non-positive"
console.log(result)
            //Type of Operator
var num = "12"
console.log(typeof num);   //output: number

*/
/*              //function with optional parameter concept
function disp_ditl(id:number,name:string,mail_id?:string)
{
  console.log("id:-", id)
  console.log("name: ", name)
  if(mail_id!=undefined)
  {
      console.log("email_id:" ,mail_id)
  }
}
disp_ditl(123,"ajay")
disp_ditl(123,"ak","ajay014yadav@gmail.com")
*/
/*
            //Rest Function
function addNumbers(...nums: number[]) {
    var i;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum)
}
addNumbers(1, 2, 3)
addNumbers(10, 10, 10, 10, 10)

            //Default Parameter  example
function cal_disc(price:number,rate:number=0.50)
{
    var discount=price*rate;
    console.log("discount ",discount)
}
cal_disc(100)
cal_disc(1000,0.3)



//Anonymous Function Example
var msg = function (a: number, b: number) {
    return a * b
};
console.log(msg(10, 20));

//Anonymous Recursive function
(function () {
    var x = "Hello!!";
    console.log(x)
})()

//Lambda Function
var foo = (x: number) => 10 + x
console.log(foo(100))

*/
//Parameter type interface
var msg = function (x) {
    if (typeof x == "number") {
        console.log(x + " is numberic");
    }
    if (typeof x == "string") {
        console.log(x, "string type");
    }
};
msg(11);
msg("hello");
