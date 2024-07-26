const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option'));
const optionTexts = Array.from(document.getElementsByClassName('option-text'));
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

const quizData = [
    {
        numb: 1,
        question: "1.Where did we first meet?",
        options: ["a. plaza near standard","b. plaza near shoprite","c. plaza cosmetic","d. plaza near police station"],
        answer: 3
    },

    {
        numb: 2,
        question: "2.Where was our first kiss?",
        options: ["a. plaza", "b. mvusuludzp taxi rank", "c. at your room", "d. under the tree"],
        answer: 1
    },

    {
        numb: 3,
        question: "3.When was my first sleep over with you ?",
        options:["a. 9 Aug 2022","b. 10 Sept 2022","c. 13 Aug 2022","d. 16 Sept 2022"],
        answer: 2
    },

    {
        numb: 4,
        question: "4.What was i wearing the first time i came to you room?",
        options:["a. Black anime t-shirt","b. Grey t-shirt","c. Black and Blue t-shirt","d. White t-shirt"],
        answer: 2
    },

    {
        numb: 5,
        question: "5.the next day of the first sleep over what did we eat in the morning?",
        options:["a. Kota","b. left over","c. oats","d. tea"],
        answer: 2
    },

    {
        numb: 6,
        question: "6.ndi luimbo lwa nnyi lwo thoma u tsendela?",
        options:["a.Gusba","b. razy k","c.Prefix","d.Ramzeey"],
        answer: 3
    },
    {
        numb: 7,
        question: "7.when was our first date?",
        options:["a. 28 Aug 2022","b. 03 Sept 2022","c. 29 July 2022","d. 05 Oct 2022"],
        answer: 1
    },
    {
        numb: 8,
        question: "8.What was the first gift i have received from you?",
        options:["a. Chocolate,perfum and t-shirt","b. Anime t-shirt and candys","c. socks,perfum,candy&t-shirt","d. spheres"],
        answer: 2
    },
    {
        numb: 9,
        question: "9.how many letters and poems have you recieved from me so far?",
        options:["a. 7","b. 5","c. 8","d. 4"],
        answer: 0
    },
    {
        numb: 10,
        question: "10.Guess Mr D length how much isn't? ",
        options:["a. 7cm","b. 10cm","c. 15cm","d. 5cm"],
        answer: 2
    },
    {
        numb: 11,
        question: "11.what turn me on the most?",
        options:["a. kiss","b. touching boobs","c. slapping ass","d. hug"],
        answer: 1
    },
    {
        numb: 12,
        question: "12.same question which kiss turn me on the most?",
        options:["a. forehead kiss","b. neck kissig","c. lip kiss","d. kiss on my chest"],
        answer: 1
    },
    {
        numb: 13,
        question: "13.what do your boyfriend like to be called while we are doing it? ",
        options:["a. love","b. bestie","c. calid","d. daddy"],
        answer: 3
    },
    {
        numb: 14,
        question: "14. what do i love to do to you the most?",
        options:["a. slapping your ass","b. licking your p***y","c. fingering you","d. All of them"],
        answer: 3
    },
    {
        numb: 15,
        question: "15.what is my favorate sleeping position with you?",
        options:["a. when both of us face opposite direction","b. when we both face each other","c. when i'm behind you and my arms are on you boobs and mr d on you ass","d. when you're behind me and your hand is holding mr D"],
        answer: 2
    },
    {
        numb: 16,
        question: "16.what was the first game we played?",
        options:["a. 21 question","b. truth or dare","c. forbidden word","d. would you rather"],
        answer: 1
    },
    {
        numb: 17,
        question: "17.what was the last game we played?",
        options:["a. 21 question","b. truth or dare","c. forbidden word","d. would you rather"],
        answer: 2
    },
    
];


function showQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionElement.textContent = currentQuiz.question;

  options.forEach((option, index) => {
    optionTexts[index].textContent = currentQuiz.options[index];
    option.checked = false;
  });
}

function checkAnswer() {
  const selectedOption = options.find(option => option.checked);

  if (selectedOption) {
    const selectedOptionIndex = options.indexOf(selectedOption);
    const currentQuiz = quizData[currentQuestion];

    if (selectedOptionIndex === currentQuiz.answer) {
      score++;
    }
  }
}

function showResult() {
    resultElement.textContent = `You scored ${score} out of ${quizData.length}`;
    resultElement.style.display = 'block';
}

function nextQuestion() {
  checkAnswer();  
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

showQuestion();

submitButton.addEventListener('click', () => {
  nextQuestion();
});


/*let questions = [
    {
        numb: 1,
        question: "what is html",
        answer: "C. Hyper Text Markup Language",
        options: [
            "A. Hyper computer",
            "B. Hyper supermaket",
            "C. Hyper Text Markup Language",
            "D. Home text groth"
        ]
    },
    {
        numb: 2,
        question: "html stand for?",
        answer: "A. Hyper Text Markup Language",
        options: [
            "A. Hyper Text Markup Language",
            "B. Hyper supermaket",
            "C. Hyper computer",
            "D. Home text groth"
        ]
    },
    {
        numb: 3,
        question: "what is html stand for?",
        answer: "A. Hyper Text Markup Language",
        options: [
            "A. Hyper Text Markup Language",
            "B. Hyper supermaket",
            "C. Hyper computer",
            "D. Home text groth"
        ]
    },
    {
        numb: 4,
        question: "what is html stand for?",
        answer: "A. Hyper Text Markup Language",
        options: [
            "A. Hyper Text Markup Language",
            "B. Hyper supermaket",
            "C. Hyper computer",
            "D. Home text groth"
        ]
    },
    {
        numb: 5,
        question: "what is html stand for?",
        answer: "A. Hyper Text Markup Language",
        options: [
            "A. Hyper Text Markup Language",
            "B. Hyper supermaket",
            "C. Hyper computer",
            "D. Home text groth"
        ]
    }
];*/