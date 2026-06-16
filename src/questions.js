export const questions = [
  {
    id: 1,
    text: "What is the primary purpose of the JavaScript 'Array.prototype.map()' method?",
    answers: [
      "To create a new array with the results of calling a function on every element.",
      "To modify the original array by filtering out unwanted elements.",
      "To execute a function once for each array element without returning a value.",
      "To check if at least one element in the array passes a specific test."
    ]
  },
  {
    id: 2,
    text: "Which keyword is used to declare a block-scoped variable that can be reassigned?",
    answers: [
      "let",
      "const",
      "var",
      "assign"
    ]
  },
  {
    id: 3,
    text: "What does the 'typeof' operator return when checking the value 'null'?",
    answers: [
      "object",
      "null",
      "undefined",
      "string"
    ]
  },
  {
    id: 4,
    text: "How do you write an arrow function that implicitly returns the string 'Hello'?",
    answers: [
      "const greet = () => 'Hello';",
      "const greet = () => { 'Hello' };",
      "const greet = () => return 'Hello';",
      "const greet = function() => 'Hello';"
    ]
  },
  {
    id: 5,
    text: "Which of the following methods converts a JSON string into a JavaScript object?",
    answers: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toObject()",
      "JSON.convert()"
    ]
  },
  {
    id: 6,
    text: "What is the correct way to check if a property exists in an object?",
    answers: [
      "'propertyName' in obj",
      "obj.hasOwnProperty('propertyName')",
      "obj.includes('propertyName')",
      "Both 'in' operator and 'hasOwnProperty' are correct."
    ]
  },
  {
    id: 7,
    text: "Which array method adds one or more elements to the end of an array and returns the new length?",
    answers: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ]
  },
  {
    id: 8,
    text: "What is the output of 'console.log(2 + '2')' in JavaScript?",
    answers: [
      "'22'",
      "4",
      "NaN",
      "TypeError"
    ]
  },
  {
    id: 9,
    text: "Which HTML5 feature allows JavaScript to run scripts in background threads?",
    answers: [
      "Web Workers",
      "Service Workers",
      "Web Sockets",
      "LocalStorage"
    ]
  },
  {
    id: 10,
    text: "What does the '===' operator check for?",
    answers: [
      "Equality of both value and type.",
      "Equality of value only.",
      "Equality of reference only.",
      "Assignment of a value to a variable."
    ]
  },
  {
    id: 11,
    text: "Which method removes the first element from an array and returns that removed element?",
    answers: [
      "shift()",
      "unshift()",
      "pop()",
      "splice()"
    ]
  },
  {
    id: 12,
    text: "What is the primary use case of the JavaScript 'Set' object?",
    answers: [
      "To store unique values of any type.",
      "To map keys to values.",
      "To store ordered lists with duplicate entries.",
      "To create immutable objects."
    ]
  },
  {
    id: 13,
    text: "How do you catch errors in asynchronous code using async/await?",
    answers: [
      "Surround the code with a try...catch block.",
      "Append a .catch() method to the function call.",
      "Use the throw keyword on the async function.",
      "Asynchronous code cannot throw catchable errors."
    ]
  },
  {
    id: 14,
    text: "What is the value of 'this' inside a standard arrow function?",
    answers: [
      "It is lexically inherited from the enclosing execution context.",
      "It always points to the global window object.",
      "It points to the HTML element that triggered the event.",
      "It is strictly undefined."
    ]
  },
  {
    id: 15,
    text: "Which method is used to combine two or more strings without modifying the existing strings?",
    answers: [
      "concat()",
      "join()",
      "append()",
      "attach()"
    ]
  },
  {
    id: 16,
    text: "What is a closure in JavaScript?",
    answers: [
      "A function combined with references to its surrounding state.",
      "A method used to close database connections.",
      "A built-in object used to secure private data.",
      "A way to terminate a loop prematurely."
    ]
  },
  {
    id: 17,
    text: "Which expression yields true if the variable 'x' is an array?",
    answers: [
      "Array.isArray(x)",
      "typeof x === 'array'",
      "x instanceof Array",
      "Both Array.isArray(x) and x instanceof Array are valid."
    ]
  },
  {
    id: 18,
    text: "What is the purpose of the 'Promise.all()' method?",
    answers: [
      "To resolve only when all input promises have resolved.",
      "To resolve as soon as the first input promise resolves.",
      "To run promises sequentially instead of in parallel.",
      "To automatically catch all errors in an array of promises."
    ]
  },
  {
    id: 19,
    text: "Which keyword is used to skip the current iteration of a loop and move to the next one?",
    answers: [
      "continue",
      "break",
      "skip",
      "return"
    ]
  },
  {
    id: 20,
    text: "What does DOM stand for in web development?",
    answers: [
      "Document Object Model",
      "Data Object Management",
      "Digital Order Module",
      "Document Orientation Menu"
    ]
  }
];

export default questions;
