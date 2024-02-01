document.addEventListener("DOMContentLoaded", function () {
const questions = [
    {
      question: "What does DOM stand for in JavaScript?",
      options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Digital Object Model"],
      answer: "a"
    },
    {
      question: "Explain the difference between `let`, `const`, and `var` in variable declaration.",
      options: [
        "`let` is block-scoped, `const` is block-scoped, and `var` is function-scoped.",
        "`let` is function-scoped, `const` is block-scoped, and `var` is block-scoped.",
        "`let` is block-scoped, `const` is function-scoped, and `var` is function-scoped.",
        "`let` is globally scoped, `const` is block-scoped, and `var` is function-scoped."
      ],
      answer: "a"
    },
    {
      question: "What is the purpose of the `this` keyword in JavaScript?",
      options: ["Refers to the current object.", "Refers to the previous object.", "Refers to the next object.", "Refers to the parent object."],
      answer: "a"
    },
    {
      question: "What is the use of the `typeof` operator in JavaScript?",
      options: ["Checks if a variable is defined.", "Returns the data type of a variable.", "Checks if a variable is a function.", "Returns the length of a variable."],
      answer: "b"
    },
    {
      question: "How do you declare and initialize an array in JavaScript?",
      options: ["`var array = {}`", "`var array = []`", "`var array = new Array()`", "`var array = [1, 2, 3]`"],
      answer: "d"
    },
    {
      question: "Explain the difference between `==` and `===` in JavaScript.",
      options: ["`==` compares values and types, `===` compares values only.", "`==` compares values only, `===` compares values and types.", "`==` is for assignment, `===` is for comparison.", "`==` is for strict comparison, `===` is for loose comparison."],
      answer: "b"
    },
    {
      question: "What is a closure in JavaScript?",
      options: ["A function that has access to variables from its outer scope.", "A function that is immediately invoked.", "A function with no parameters.", "A function that returns an object."],
      answer: "a"
    },
    {
      question: "How can you prevent a variable from being modified in JavaScript?",
      options: ["Use `let` keyword.", "Use `const` keyword.", "Use `var` keyword.", "Use `final` keyword."],
      answer: "b"
    },
    {
      question: "Describe the purpose of the `setTimeout` and `setInterval` functions.",
      options: [
        "`setTimeout` executes a function after a specified delay, `setInterval` repeats a function at a specified interval.",
        "`setTimeout` repeats a function at a specified interval, `setInterval` executes a function after a specified delay.",
        "`setTimeout` and `setInterval` are used interchangeably.",
        "`setTimeout` and `setInterval` both execute a function after a specified delay."
      ],
      answer: "a"
    },
    {
      question: "What is event delegation in JavaScript?",
      options: ["Binding an event directly to an element.", "Delegating events to parent elements.", "Preventing events from propagating.", "Triggering multiple events simultaneously."],
      answer: "b"
    },
    
  ];



const startBtn = document.querySelector(".start-btn button")
const exitBtn = document.querySelector(".exit-btn  button")
const contBtn = document.querySelector(".cont-btn button")
const quizContainer = document.querySelector(".question-container")
const answerBtns = document.querySelector(".answer-btns")
const timer =  document.getElementById("timer")
const questionCount = document.querySelector(".question-count span")
const submitBtn = document.querySelector(".submit-btn")
const success = document.querySelector(".success")
const  finalScore = document.querySelector("#score")    





let currentQuestionIndex = 0
let score = 0
let timeLeft = 20



startBtn.addEventListener("click", startQuiz)





function startQuiz() {
    startBtn.parentElement.display  = 'block'
    showRules();
}


function showRules() {
    const rules = document.querySelector(".rules")
    rules.style.display="block"
    startBtn.parentElement.display  ="none"

    

}

function continueQuiz() {
    rules.style.display ="none"
    
}





function showSuccess() {
    success.style.display = "none"

}





})