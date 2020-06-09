document.addEventListener("DOMContentLoaded", function() {
    setTimer();
    incrementCountWithPlusBotton();
    decrementCountWithMinusBotton();
    likeIndividualCounter();
    pauseCounter();
    commentSubmission();
});

const counter = document.getElementById('counter');
let seconds = 0;
let setCounter;

const renderTimer = () => {
    seconds++;
    counter.innerHTML = seconds;
};

function setTimer() {    
    setCounter = setInterval(renderTimer, 1000);
}

function incrementCountWithPlusBotton() {
    const plusButton = document.getElementById('plus');
    plusButton.addEventListener("click", function() {
        counter.innerHTML = seconds + 1;
        // console.log("you clicked the plus button");
    });
}

function decrementCountWithMinusBotton() {
    const minusButton = document.getElementById('minus');
    minusButton.addEventListener("click", function() {
        counter.innerText = seconds - 1;
        // console.log("you clicked the minus button");
    });
}

function likeIndividualCounter() {
    const likesContainer = document.querySelector(".likes");
    const heartButton = document.getElementById('heart');
    heartButton.addEventListener("click", function() {
        let currentCount = document.getElementById(`${counter.innerText}`);
        currentCount ? currentCount.firstElementChild.innerText++ :
        likesContainer.innerHTML += `<li id=${counter.innerText}>Number ${counter.innerText} got <span id=${counter.innerText}>1</span> like(s).</li>`
        // console.log("you clicked the heart button");
    });
}

function pauseCounter() {
    const pauseButton = document.getElementById("pause");
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const heartButton = document.getElementById('heart');
    pauseButton.addEventListener("click", function() {
        if (pauseButton.innerText === "pause") {
            clearInterval(setCounter);
            plusButton.disabled = true;
            minusButton.disabled = true;
            heartButton.disabled = true;
            pauseButton.innerText = "resume";
        } else if (pauseButton.innerText === "resume") {
            plusButton.disabled = false;
            minusButton.disabled = false;
            heartButton.disabled = false;
            pauseButton.innerText = "pause";
            setInterval(renderTimer, 1000);
        }
        // console.log("you clicked the pause button");
    });
}

function commentSubmission() {
    const commentForm = document.getElementById("comment-form");
    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const commentInput = document.getElementById("comment-input");
        alert("you have submitted the comment!");
        commentInput.value = "";
    });
}
