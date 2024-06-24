// Place questions outside of DOMContentLoaded so they can be accessed by all functions

//Game Questions as Objects with Booleans

const questions = [
    {
        question: "Joey played Dr. Drake Ramoray on which soap opera show?",
        answers: [
            { text: "Days of our Lives", correct: true },
            { text: "Knots Landing", correct: false },
            { text: "Dallas", correct: false },
            { text: "Dynasty", correct: false }
        ]
    },
    {

        question: "How many times did Ross get divorced?",
        answers: [
            { text: "Four Times", correct: false },
            { text: "Three Times", correct: true },
            { text: "Twice", correct: false },
            { text: "Once", correct: false }
        ]
    },
    {
        question: "Phoebe's scientist boyfriend David worked in what city?",
        answers: [
            { text: "Yemen", correct: false },
            { text: "Paris", correct: false },
            { text: "Minsk", correct: true },
            { text: "London", correct: false }
        ]

    },
    {
        question: "What is Chandler Bing's middle name?",
        answers: [
            { text: "Muriel", correct: true },
            { text: "Sue", correct: false },
            { text: "Joseph", correct: false },
            { text: "Bong", correct: false }
        ]
    },
    {
        question: "Will & Rosss co-founded what club in high school?",//this question is too long - change?
        answers: [
            { text: "The I Hate Rachel Green Club.", correct: true },
            { text: "The Maths Whizz Kidz Club", correct: false },
            { text: "The Paleontology Rocks Club", correct: false },
            { text: "The Way/No Way Club", correct: false }
        ]
    },
    {
        question: "Which of Joey's sisters did Chandler fool around with?",
        answers: [
            { text: "Mary Therese", correct: false },
            { text: "Gina", correct: false },
            { text: "Mary Angela", correct: true },
            { text: "Veronica", correct: false }
        ]
    },
    {
        question: "Monica categorizes her towels into how many categories?",
        answers: [
            { text: "6", correct: false },
            { text: "4", correct: false },
            { text: "8", correct: false },
            { text: "11", correct: true }
        ]
    },
    {
        question: "What form of self-defense does Ross try to teach Rachel and Phoebe?",
        answers: [
            { text: "Jiu-Jitsu", correct: false },
            { text: "Unagi", correct: true },
            { text: "Karate", correct: false },
            { text: "Taekwondo", correct: false }
        ]
    },
    {
        question: "What do Monica and Chandler name their twins?",
        answers: [
            { text: "Emma and Ben", correct: false },
            { text: "Chandler and Leslie", correct: false },
            { text: "Erica and Jack", correct: true },
            { text: "Janice and Richard", correct: false }
        ]
    },
    {
        question: "Who was Rachel's prom date?",
        answers: [
            { text: "Ross", correct: false },
            { text: "Chip Matthews", correct: true },
            { text: "Tag Jones", correct: false },
            { text: "Barry Farber", correct: false }
        ]
    },

];

//Use DomContentLoaded event instead of window.onload
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("rules").style.display = "block";

    //Add event listener to click Ok Button and remove rules page
    document.getElementById("rulesOk").addEventListener("click", function () {
        document.getElementById("rules").style.display = "none";
        startQuiz();

    });


    //Start Quiz Function
    function startQuiz() {
        const questionElement = document.getElementById("question");
        const submitButton = document.querySelector(".nxt-btn");

        let currentQuestion = 0;
        let score = 0;

        //use shuffle array method so questions aren't missed 
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }



    function showQuestion() {
        //shuffleArray(questions);
        const question = questions[currentQuestion];
        // Display question
        questionElement.innerText = question.question;

        // Display answers
        //  Get list of answer buttons and add event listener
        const answerButtons = document.querySelectorAll(".ans-btn");
        //question.answers.
        answerButtons.forEach((button, index) => {
            button.innerHTML = question.answers[index].text;
            button.removeEventListener("click", selectAnswer);
            button.addEventListener("click", selectAnswer);
            /*answerButtons[index].innerHTML = answer.text;
            answerButtons[index].addEventListener("click", selectAnswer);*/

        });
    }



    //If correct answer is selected, add to score
    function selectAnswer(event) {
        const answerText = event.target.innerText;
        const answer = questions[currentQuestion].answers.find(a => a.text === answerText);

        if (answer.correct) {
            score++;


        }
        currentQuestion++;

        if (currentQuestion < questions.length) {
            // Check if question has already been asked
            //questions.splice(currentQuestion - 1, 1);
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        const resultContainer = document.getElementById("results");
        resultContainer.innerHTML = `  
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${questions.length}</p>
    `;
        submitButton.innerHTML = "Play Again?"; //Change next button text to play again
    }


    submitButton.addEventListener("click", function () {
        if (submitButton.innerHTML === "Play Again?") {
            resetQuiz();
        } else {
            showQuestion();
        }
    });


    //start quiz over again
    function resetQuiz() {
        currentQuestion = 0;
        score = 0;
        shuffleArray(questions);
        showQuestion();
        submitButton.innerHTML = "Next Question";
    }



    //Shuffle questions when quiz starts
    shuffleArray(questions);
    //Start quiz
    showQuestion();
} // Closing bracket for startQuiz

}); //Closing brackets for DOMContentLoaded
