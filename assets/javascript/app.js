$(document).ready(function() {

let time = 120;
let intervalId = setInterval(count, 1000);
let correctAnswers = 0;
let incorrectAnswers = 0;
let unansweredQuestions =0;

function count() {
    time--;
    $(".seconds").text(time);
    if (time === 0) {
        clearInterval(intervalId);
    };
};

const answerKey = ["#q1o4", "#q2o1", "#q3o3", "#q4o2", "#q5o1", "#q6o3", "#q7o4", "#q8o1", "#q9o2", "#q10o1"];

const questionNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

$(".last-button").click(function(){
    event.preventDefault();
    for (i=0; i< answerKey.length; i++) {
        let correctAnswerSelected = $(answerKey[i]).is(":checked");
        let questionAnswered = $('[name="question-'+ questionNumbers[i] +'"]').is(":checked");
        if ( correctAnswerSelected === true) {
            correctAnswers++;
        };
        if ( questionAnswered === true && correctAnswerSelected === false) {
            incorrectAnswers++;
        };
        if ( questionAnswered === false) {
            unansweredQuestions++;
        };
    };
  });
});
 
