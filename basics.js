//Var is used to declare a variable.
var string1 = "Hello"
//Let is used to declare a variable 
let string2; 
//Const is a readonly variable
const year = 2022;

//#region VAR vs LET
/* 
 If you want your code to run in older browser, you must use var.
 
1. Redeclaration
 VAR allows to 'redeclare' a variable. Let doesn't.
A.
 var x = 10;
 var x = 11; >> This is allowed

 B.
 let y = 1;
 let y = 2; >> This would throw an error

2. Global Scope
A. LET
{
  let x = 1;
}
// x Can't be used here because it's not global

B. VAR
{
  var x = 2;
}
y = x; //Can be used here because it's global

*/
//#endregion

//Types of Variables
var stringType = "Im a string";
var intType = 10;
var floatType = 10.2;
var boolType = true // false
