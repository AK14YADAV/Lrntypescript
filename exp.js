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
var x = 4;
var y = -x;
console.log("value of x: ", x); //outputs 4 
console.log("value of y: ", y); //outputs -4
//Conditonal Statement
var num = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result);
//Type of Operator
var num = "12";
console.log(typeof num); //output: number
