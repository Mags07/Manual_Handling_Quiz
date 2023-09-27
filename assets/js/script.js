//Code guide followed from; https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=CodingNepal

//questions, options and answers from https://www.test-questions.com/manual-handling-test-01.php
const questions = [{
        question: "What is the general guideline of maximum weight for lifting and lowering at work?",
        answers: [{
                option: "15kg",
                correct: false
            },
            {
                option: "20kg",
                correct: false
            },
            {
                option: "25kg",
                correct: true
            },
            {
                option: "30kg",
                correct: false
            }
        ]
    },

    {
        question: "What should you do if you discover a better way of lifting a load than the method currently in place?",
        answers: [{
                option: "Ignore the current method and carry on with your own method?",
                correct: false
            },
            {
                option: "Ask your colleagues if they think it is a good idea and if yes, start using it.",
                correct: false
            },
            {
                option: "Carry on using the method that is already in place and forget about your own idea.",
                correct: false
            },
            {
                option: "Discuss your idea with your supervisor.",
                correct: true
            }
        ]
    },

    {
        question: "What is the first step of manual handling before attempting to lift a load?",
        answers: [{
                option: "The colour of the box.",
                correct: false
            },
            {
                option: "Check the weight, and shape of the load.",
                correct: true
            },
            {
                option: "If the box has the delivery details on it.",
                correct: false
            },
            {
                option: "Check out what is in the box",
                correct: false
            }
        ]
    },

    {
        question: "Which part of your body are you most likely to injure if you lift heavy loads",
        answers: [{
                option: "Your back",
                correct: true
            },
            {
                option: "Your knees",
                correct: false
            },
            {
                option: "Your legs",
                correct: false
            },
            {
                option: "Your neck",
                correct: false
            }
        ]
    },

    {
        question: "If a staff member discovers she is pregnant, should she…",
        answers: [{
                option: "Hide this for as long as possible, but avoid heavy lifting.",
                correct: false
            },
            {
                option: "Tell her colleagues, so they can help her incase she needs to lift something heavy.",
                correct: false
            },
            {
                option: "Tell the supervisor so they can conduct a risk assessment, create a safer environment and safer tasks for the pregnant employee.",
                correct: true
            },
            {
                option: "Continue as normal.",
                correct: false
            }
        ]
    },

    {
        question: "What should you do if you need to lift a load that blocks your view?",
        answers: [{
                option: "Ask a colleague to walk beside you and give you instruction.",
                correct: false
            },
            {
                option: "Ask a colleague to help carry the load and ensure you both can see ahead.",
                correct: true
            },
            {
                option: "Ask a colleague to walk in front of you and warn others when you are approaching.",
                correct: false
            },
            {
                option: "Ask another colleague to carry it instead.",
                correct: false
            }
        ]
    },

    {
        question: "What should you do if the load is too heavy for you to carry on your own, and there are no colleagues around to help, and the load cannot be divided into smaller parts?",
        answers: [{
                option: "Pick up the load and run to move it faster.",
                correct: false
            },
            {
                option: "Use a fork-lift, even though you have no training on how to use one.",
                correct: false
            },
            {
                option: "Drag the load on the ground.",
                correct: false
            },
            {
                option: "Do not attempt to move the load unless you find a safe way to move it.",
                correct: true
            }
        ]
    },

    {
        question: "How should you position yourself if you need to lift a load from the ground?",
        answers: [{
                option: "Feet as wide as possible, legs bent, back bent.",
                correct: false
            },
            {
                option: "Feet slightly apart, legs straight, back bent.",
                correct: false
            },
            {
                option: "Feet slightly apart, legs bent, back straight.",
                correct: true
            },
            {
                option: "Feet close together, legs bent, back straight. ",
                correct: false
            }
        ]
    },

    {
        question: "Who should decide what weight is safe for you to lift in your work environment?",
        answers: [{
                option: "Your supervisor",
                correct: false
            },
            {
                option: "You and your supervisor",
                correct: false
            },
            {
                option: "You",
                correct: true
            },
            {
                option: "The Health and Safety Authority of Ireland (HSA)",
                correct: false
            }
        ]
    },

    {
        question: "You need to move a load which is heavier on one side than the other. How do you pick it up?",
        answers: [{
                option: "With the heavier side away from you.",
                correct: false
            },
            {
                option: "With the heavier side on your strong arm.",
                correct: false
            },
            {
                option: "With the heavier side on your weak arm.",
                correct: false
            },
            {
                option: "With the heavier side towards you.",
                correct: true
            },
        ]
    }
]

//Selecting elements by declaring constants.
const startButton = document.querySelector(".start_btn");
const nextButton = document.querySelector(".next_btn");
const questionElement = document.querySelector("#question");
const optionsElement = document.querySelector(".options");
const resultContainer = document.querySelector(".result");

//Shuffling the questions, so there is a variety for returning visitors.
let shuffledQuestions;
let currentQuestionIndex;

// Event listener for the start button, which then displays the quiz instead
function customAddEventListener(){
    startButton.addEventListener("click", startQuiz)
}

document.addEventListener("DOMContentLoaded", () => {
    customAddEventListener();
});

function startQuiz() {
    startButton.style.display = "none"
    startButton.classList.add("hide");
    questionElement.parentElement.classList.remove("hide")
    // instructionsContainer.classList.add("hide");
    // resultsContainer.classList.add("hide");
    // quizContainer.style.display = "block";
    questionIndex = 0;
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    loadQuestion();
    nextButton.addEventListener("click", () => {
        questionIndex++;
    });
    }

function loadQuestion() {
    reset()
    showQuestion(shuffleQuestions[questionIndex])
    }

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.option[0]
            console.log(answer.option[0]);
        document.body.insertBefore(button, optionsElement);
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

//   function setStatusClass(element, correct) {
//     clearStatusClass(element)