//This is a function declaration
function myFunctionDeclaration () {
  console.log('This is myFunctionDeclaration firing');
}

//This is a function invokation. It's how we actually use the function and get a return value
myFunctionDeclaration()

//function expression
var funcExpression = function() {
  console.log('I am the func expression')
}

//returning a function from a function
function outerFunc() {
  function innerFunc() {
    console.log('Hello')
  }
  return innerFunc;

}

var outerFuncReference = outerFunc()
var outerFuncReference2 = outerFunc()

outerFuncReference()
outerFuncReference2()

//callbacks (passing a function to another function to use)
function test(cb) {
  return cb()
}

function hello() {
  console.log('hello')
}
test(hello)

//scope
var globalScopeVariable = 'I am a string that is in the global scope'

function scopeChecker() {

  var scopeCheckerVar = 'I am at the top of the function scope'

  function innerScopeFunction() {

    var innerScopeVariable = 'I am a string that is in local scope'

    function evenMoreInnerScopeFunction() {
      var innerInnerVariable = 'I am at the bottom of the scope tree'
      console.log('Inner scope check', innerScopeVariable, scopeCheckerVar, globalScopeVariable)
    }
    evenMoreInnerScopeFunction()
  }
  innerScopeFunction()
}

scopeChecker()


// Lexical Scope
var someVariable = 'hello'

function lexicalExample() {
  var someVariable = 'Hello'

  function variableChanger() {
    // console.log('Some variable', someVariable)
    var someVariable = 'Not hello'
  }
  variableChanger()
}
lexicalExample()


// //Let keyword and block scope
if(true) {
  let john = 'John'
}
if(true) {
  var john = 'John'
}
console.log(john, 'john')


// //variables
// //var is a keyword.. you use to it to assign labels and values
// //Variables must start with $, _, or a letter not a number
var num = 1; //Number
var string = 'Hello' //String
var boolean = true; //Boolean
var noValue = null; //Null
var undefinedValue = undefined; //undefined
var notANumber = NaN; //Technically a Number

//if statements
//Some examples of falsy values
//null
//undefined
//false 
//0
//NaN
//''
if(true) {
  console.log('I will always fire no matter what')
}

if(false) {
  console.log('I will never fire')
}

var trueChecker = true;

if(trueChecker) {
  console.log('I will fire because the variable evaluates to true')
}

if(!trueChecker) {
  console.log('Even though true checker is true, the bang checks for the opposite. So this is really checking to see if trueChecker is false.')
}

var num = 4;
var num2 = 5;

var added = num + num2;

if(added) {
  console.log('added evaluates to true', added)
}
