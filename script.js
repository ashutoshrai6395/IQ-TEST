document.addEventListener('DOMContentLoaded', function() {
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const quizSection = document.getElementById('quiz-section');
    const questionSection = document.getElementById('question-section');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const resultSection = document.getElementById('result-section');
    const scoreSpan = document.getElementById('score');
    const showAnswerBtn=document.getElementById('show-answers-btn');
    let score = 0;
    let currentQuestion = 0;
  
    // Questions data
    const questions = [
      {
        question: 'What comes next in the sequence: 2, 4, 8, 16, ___?',
        options: ['24','32','64'],
        answer: 2 // Index of the correct option
      },
      {
        question: 'If all roses are flowers and some flowers fade quickly, can it be logically concluded that some roses fade quickly?',
        options: ['True', 'False','irrelevant'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'If a shirt costs $20 after a 25% discount, what was its original price?',
        options: ['15$ ', '22$', '22.67$'],
        answer: 2 // Index of the correct option
      },
      {
        question: 'Tree is to leaf as flower is to ___?',
        options: ['Petal', 'Stem', 'Plant'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'A bat and a ball together cost $1.10. The bat costs $1 more than the ball. How much does the ball cost?',
        options: ['0.05$', '0.10$', '0.20$'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'If "PENCIL" is written as "LNEPIC," how is "SCHOOL" written?',
        options: [' LCOOHS', 'LCOSHO', 'LCSHOO'],
        answer: 1 // Index of the correct option
      },
      {
        question: 'Which country is known as the "Land of the Rising Sun"?',
        options: ['Japan', 'South Korea', 'China'],
        answer: 0 // Index of the correct option
      },
      {
        question: 'Which city hosted the 2016 Summer Olympics?',
        options: ['Tokyo,Japan', 'Rio de Janeiro, Brazil', 'Beijing,China'],
        answer: 1 // Index of the correct option
      },
      {
        question: 'Which continent is home to the Sahara Desert?',
        options: ['North America', 'Asia ', 'Africa'],
        answer: 3 // Index of the correct option
      },
      {
        question: 'Which is the longest river in the world?',
        options: ['Amazon River', 'Nile River', 'Congo River'],
        answer: 1 // Index of the correct option
      },
    ];
  
    startQuizBtn.addEventListener('click', function() {
      quizSection.classList.add('hidden');
      questionSection.classList.remove('hidden');
      showQuestion();
    });
  
    nextQuestionBtn.addEventListener('click', function() {
      const selectedOption = document.querySelector('input[name="answer"]:checked');
      if (selectedOption) {
        const answer = parseInt(selectedOption.id.replace('option', ''));
        if (answer === questions[currentQuestion].answer) {
          score++;
        }
        selectedOption.checked = false;
        currentQuestion++;
        if (currentQuestion < questions.length) {
          showQuestion();
        } else {
          showResult();
        }
      }
    });
    showAnswersBtn.addEventListener('click', function() {
      // Show correct answers
      const answerContainer = document.getElementById('answers-container');
      answerContainer.innerHTML = ''; // Clear previous answers

      questions.forEach((question, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.textContent = `Q${index + 1}: ${question.options[question.answer]}`;
        answerContainer.appendChild(answerDiv);
      });

      // Hide the "Show Answers" button
      showAnswersBtn.style.display = 'none';
    });
  
    function showQuestion() {
      const question = questions[currentQuestion];
      const questionElem = document.querySelector('#question-section h2');
      const optionsContainer = document.getElementById('options-container');

  
      questionElem.textContent = question.question;
      optionsContainer.innerHTML = '';
  
      for (let i = 0; i < question.options.length; i++) {
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = 'answer';
        optionInput.id = 'option' + i;
  
        const optionLabel = document.createElement('label');
        optionLabel.htmlFor = 'option' + i;
        optionLabel.textContent = question.options[i];
  
        optionsContainer.appendChild(optionInput);
        optionsContainer.appendChild(optionLabel);
      }
    }
  
    function showResult() {
      questionSection.classList.add('hidden');
      resultSection.classList.remove('hidden');
      scoreSpan.textContent = score;
      

    }
  });
  