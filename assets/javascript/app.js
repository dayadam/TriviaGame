$(document).ready(function () {

    $(".exam").hide();
    $(".results-container").hide();

    let time = 120;
    let intervalId = setInterval(count, 1000);

    function count() {
        time--;
        $(".seconds").text(time);
        if (time === 0) {
            clearInterval(intervalId);
        };
    };

    function reset() {
        time = 120;
        $(".seconds").text(time);
        intervalId = setInterval(count, 1000);
    };

    function startExam() {
        clearInterval(intervalId);
        $(".exam").show();
        $(".start-container").hide();
        reset();
    };

    $(".start-btn").click(startExam);

    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unansweredQuestions = 0;
    const answerKey = ["#q1o4", "#q2o1", "#q3o3", "#q4o2", "#q5o1", "#q6o3", "#q7o4", "#q8o1", "#q9o2", "#q10o1"];
    const questionNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

    function submitAnswers() {
        event.preventDefault();
        for (i = 0; i < answerKey.length; i++) {
            let correctAnswerSelected = $(answerKey[i]).is(":checked");
            let questionAnswered = $('[name="question-' + questionNumbers[i] + '"]').is(":checked");
            if (correctAnswerSelected === true) {
                correctAnswers++;
            };
            if (questionAnswered === true && correctAnswerSelected === false) {
                incorrectAnswers++;
            };
            if (questionAnswered === false) {
                unansweredQuestions++;
            };
        };
    };

    $(".last-button").click(submitAnswers);

});

