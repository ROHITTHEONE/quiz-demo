var questions = [{
	"question" : "What is question?",
	"option1" : "option1 is this",
	"option2" : "option2 is this",
	"option3" : "option3 is this",
	"option4" : "option4 is this",
	"answer" : "2"
}, {
	"question" : "What is question?",
	"option1" : "option1 is this",
	"option2" : "option2 is this",
	"option3" : "option3 is this",
	"option4" : "option4 is this",
	"answer" : "4"
}, {
	"question" : "What is question?",
	"option1" : "option1 is this",
	"option2" : "option2 is this",
	"option3" : "option3 is this",
	"option4" : "option4 is this",
	"answer" : "4"
}, {
	"question" : "What is question?",
	"option1" : "option1 is this",
	"option2" : "option2 is this",
	"option3" : "option3 is this",
	"option4" : "option4 is this",
	"answer" : "4"
}, {
	"question" : "What is question?",
	"option1" : "option1 is this",
	"option2" : "option2 is this",
	"option3" : "option3 is this",
	"option4" : "option4 is this",
	"answer" : "4"
}, {
	"question" : "What is question?",
	"option1" : "option1 is this",
	"option2" : "option2 is this",
	"option3" : "option3 is this",
	"option4" : "option4 is this",
	"answer" : "4"
}, {
	"question" : "What is question?",
	"option1" : "option1 is this",
	"option2" : "option2 is this",
	"option3" : "option3 is this",
	"option4" : "option4 is this",
	"answer" : "4"
}, {
	"question" : "What is question?",
	"option1" : "option1 is this",
	"option2" : "option2 is this",
	"option3" : "option3 is this",
	"option4" : "option4 is this",
	"answer" : "4"
}, {
	"question" : "What is question?",
	"option1" : "option1 is this",
	"option2" : "option2 is this",
	"option3" : "option3 is this",
	"option4" : "option4 is this",
	"answer" : "4"
}, {
	"question" : "What is question?",
	"option1" : "option1 is this",
	"option2" : "option2 is this",
	"option3" : "option3 is this",
	"option4" : "option4 is this",
	"answer" : "4"
}];


var currentQuestion = 0;
var score = 0;
var totQuestion = questions.length;

var container = document.getElementById('quizContainer');
var questionEl  = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextBtn = document.getElementById('nextBtn');
var prevBtn = document.getElementById('prevBtn');
var prog = document.getElementById('prog');
var resultCont = document.getElementById('result');
var score = document.getElementById('score');
var arr_index = 0;
var right_index = 0;
var wrong_index = 0;

var arr = new Array(totQuestion);
var right_arr = new Array(totQuestion);
var wrong_arr = new Array(totQuestion);

function loadQuestion (questionIndex) {
	if(questionIndex > 0) {
		prevBtn.style.display = '';
	} else {
		prevBtn.style.display = 'none';
	}
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
	prog.textContent = 'Question ' + (questionIndex + 1) + ' / ' + totQuestion;
}

function loadNextQues() {
	var selectedOption = document.querySelector('input[type=radio]:checked');

	if(!selectedOption) {
		alert("Please select an option!");
		return;
	}
	var answer = selectedOption.value;
	arr[arr_index] = answer;
	arr_index++;
	if(questions[currentQuestion].answer == answer) {
		score += 10;
		right_arr[right_index] = currentQuestion;
		right_index++;
	} else {
		wrong_arr[wrong_index] = currentQuestion;
		wrong_index++;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestion-1) {
		nextBtn.textContent = 'Finish';
	}
	if(currentQuestion == totQuestion) {
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Total Score : ' + score;
	}
	loadQuestion(currentQuestion);
}

function loadPrevQues() {
	currentQuestion--;
	if(arr[currentQuestion] == questions[currentQuestion].answer) {
		score -= 10;
	}

	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
