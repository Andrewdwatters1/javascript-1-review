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


function outerFunc(name) {
  function innerFunc() {
    console.log('Hello, ' + name)
  }
  return innerFunc;
}

var outerFuncReference = outerFunc('John')
var outerFuncReference2 = outerFunc('James')

outerFuncReference()
outerFuncReference2()

//scope
var globalScopeVariable = 'I am a string that is in the global scope'

function scopeChecker() {
  var scopeCheckerVar = 'I am at the top of the function scope'
  function innerScopeFunction() {
    var innerScopeVariable = 'I am a string that is in local scope'
    function evenMoreInnerScopeFunction() {
      console.log('Inner scope check', innerScopeVariable, scopeCheckerVar, globalScopeVariable)
      var innerInnerVariable = 'I am at the bottom of the scope tree'
    }
    evenMoreInnerScopeFunction()
  }
  innerScopeFunction()
}

scopeChecker()


//Lexical Scope
function lexicalExample() {
  var someVariable = 'Hello'

  function variableChanger() {
    var someVariable = 'Not hello'
  }
  variableChanger()
}
lexicalExample()


//Let keyword and block scope
if(true) {
  let john = 'John'
}

if(true) {
  var john = 'John'
}


//variables
//var is a keyword.. you use to it to assign labels and values
//Variables must start with $, _, or a letter not a number
var num = 1;
var string = 'Hello'
var boolean = true;
var noValue = null;
var undefinedValue = undefined;
var notANumber = NaN;

//if statements
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
