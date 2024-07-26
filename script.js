const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const existBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');

startBtn.onclick = ()=>{
    popupInfo.classList.add('active');
    main.classList.add('active');
}

existBtn.onclick = ()=>{
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = ()=>{
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    //showQuestions(0);
    //questionCount(1);
}

/*let questionCount = 0;
let questionNumb = 1;

const nextBtn = document.querySelector('.next-btn');

/*nextBtn.onclick = ()=>{
    if (questionCount < questions.length-1){
        questionCount++;
        showQuestions(questionCount);

        //questionNumb++;
        //questionCount(questionNumb);
    }
    else{
        console.log('Question Completed');
    }
   
   
}

//const optionList = document.querySelector('.option-list');

//getting question and option from array
/*function showQuestions(index){
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;
    optionList.innerHTML = optionTag;    
    
   
}

/*function questionCount(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}*/