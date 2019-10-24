let time = 120;
let intervalId = setInterval(count, 1000);

function count() {
    time--;
    $(".seconds").text(time);
    if (time === 0) {
        clearInterval(intervalId);
    }
};

 
