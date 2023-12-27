// console.log("hello world");


// values and variables in javascript

/*
// we want to display output 
var myName = 'inam yadav'; //single quotes or double quotes doesn't 

//browser pr jakr baarbaar likhna na pade console m that's why we are using terminal/vs code
// for displaying output on console we will use another method that's console.log();

console.log(myName);
*/


/*practise
var _myName = "inam";               //valid
var _1my__Name ="yadav";            //valid
var 1myName = "enam";               //invalid
var $myName = 'inamyadav';          //valid
var myName% = "mahii";              //invalid
*/



// datatypes in javascript

/* 
six data types that are primitives :
undefined: typeofinstance === "undefined";
Boolean: typeofinstance === "boolean";
Number: typeofinstance === "number"
String: typeofinstance === "string"
BigInt: typeofinstance === "bigint" // ECMAScript 2020
Symbol: typeofinstance === "symbol"
*/



//typeof operator: we want to know the datatype of that value which we have assigned at time of variable declaration
// console.log(typeof(myName));



/* Practise
console.log(10+"20");               //concatenation(number+string)
console.log(9-"5");                 // JS Bug1 - (number-string)
console.log("java"+"Script");       //concatenation(string+string)
console.log(" "+" ");               //concatenation of two empty strings
console.log(" "+0);
console.log("vinod"-"thapa");       //(string-string) = NaN :- not a number
console.log(true+true);             //in js : true=1 & false=0
console.log(true+false);
console.log(false+true);
console.log(false-true);
*/



//Interview Question 1
// difference between null and undefined
/*
if we are assigning null value to a variable then it is null 
and if we are only creating variable not assigning any value to the variable then it is undefined
*/


/*
var iAmUseless = null;              //useless 
console.log(iAmUseless);
console.log(typeof(iAmUseless));    //Ans: object
// JS Bug2 - datatype of null is object

var iAmStandBy;
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));
*/


//Interview Question 2
//what is NaN ?
/*
NaN is a property of the global object.                 'dom vs bom'
in other words , it is a variable in global scope.
the initial value of NaN is Not-A-Number.
*/



/*
var myPhoneNumber = 789456;
var myName = "inam";
console.log(isNaN(myPhoneNumber));     //ans: false
console.log(isNaN(myName));            //ans: true 

if(isNaN(myName)==true){
    console.log("please enter valid number no.");
}
*/




/* expressions and operators
- assignment operators 
- arithmetic operators
- comparison operators
- logical operators
- string concatenation (operators)
- conditional(ternary) operator
*/

/* Assignment operators
an assignment operator assigns a value to its left operand based on the 
value of its right operand. the simple assignment operator is equal(=).
*/

/*
var x=5;
var y=5;
console.log("is both the x and y are equal or not" + x ==y ); //ans:false  
//reason = string concatentaion ke liye ek extra + operator use kr rahe hai which will give you wrong result
console.log( x ==y );       //ans : true

// we will discuss open this when we learn ES6
console.log(`is both the x and y are equal: ${x==y}`); //es6 code ans: true
*/


/* Arithmetic operators
an arithmetic operator takes numerical values (either literals or variables)
as their operands and returns a single numerical value.
*/
/*
console.log(3+3);
console.log(10-5);
console.log(20/5); //division operator
console.log(5*6);

console.log("remainder operator" + 81%8);
*/

/* string concatenation
the concatenation operator(+) concatenates two string values together ,
returning another string that is the union of the two operand strings. 
*/


// challenge time 
// what will be the output of 3**3? 
// what will be the output when we add a number and a string?
// write a program to swap two numbers?
// write a program to swap two numbers without using third variable?



// sol 1
/*
console.log(3**3); //3*3*3 = 27
// exponentiation operator(**): calculates the base to the exponent power that is base^exponent.
// 2**3 returns 8
// 10 ** -1 returns 0.1
*/


//sol 3
/*
var a=5;
var b=10;
*/

/*
// output a=10;b=5;
var c=b;//c=10
b=a;//b=5;
a=c;
console.log("the value of a is "+ a); //ans :- a = 10
console.log("the value of b is "+ b); // ans :- b=5  */



//sol 4
/*
a =a +b; // a=15
b=a-b; // b=5
a = a-b;//a = 10
console.log("the value of a is "+ a); //ans :- a = 10
console.log("the value of b is "+ b); // ans :- b=5
*/



//what is the difference between == vs === ?
//== checks the value of the variables 
// while === checks the value as well as datatype of the variables. 

// sol 
/*
var num1 =5;
var num2 ='5';
console.log(typeof(num1));   // ans: number
console.log(typeof(num2));   // ans: string
console.log(num2);   //5 

console.log(num1 == num2);   //ans: true
console.log(num1 === num2);  //ans: false
*/



/* control statement and loops

- if...else
- switch statement
- while loop
- do-while loop
- for loop
- for in loop
- for of loop
- conditional(ternary) operator
*/


/* if...else
the if statement executes a statement if a specified condition is truthy.
if the condition is falsy , another statement can be executed.
*/     
// what is truthy and falsy values in javascript

// we have total 5 falsy values in javascript: 0,"",undefined,NaN,false is falsy values.





// if(/*score = 0*/0){
//     console.log("OMG, we loss the game");
// }
// else{
//     console.log("yay, we won the game");
// }





//output: else statement


// if else ka shorter version
// variablename = (condition) ? value1:value2 /*if true : value1 and if false :value2 */



// conditional(ternary) operator
// the conditional(ternary)operator is the only javascript operator that takes three operands

/*
var age=17;
if(age>=18){
    console.log("you can vote.");
}
else{
    console.log("you can't vote.");
}
// output: you can't vote.
console.log((age>=18)?"you can vote.":"you can't vote.");//you can't vote
*/


//switch statement
/*evaluates an expression, matching the expression's value to a case clause,
and executes statements associated with that case.*/

/*
var area = "circle";
var pi=3.142,l=5,b=4,r=3;
switch(area){
    case'circle':
    console.log("the area of the circle is:"+ pi*r**2); // nested if-else block
    case'triangle':
    console.log("the area of the circle is:"+ (l*b)/2);
    case'rectangle':
    console.log("the area of the circle is:"+ (l*b));
    default:
        console.log("please enter valid data");//last else block
}
*/



//do-while loop
/*
var num =0;
do{
    debugger
    console.log(num);
    num++;
}while(num<=10);
*/



// functions in javascript
/* functions: 
-function definition
-calling a function
-function parameter
-function arguments
-function expressions
-return keyword
-anonymous function 
*/