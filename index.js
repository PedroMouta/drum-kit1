
//for clicking the buttons
var buttons = document.querySelectorAll(".box");
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        switch (this.innerHTML) {
            case "W":
                new Audio('sounds/tom-1.mp3').play();
                break;

            case "A":
                new Audio('sounds/tom-2.mp3').play();
                break;

            case "S":
                new Audio('sounds/tom-3.mp3').play();
                break;

            case "D":
                new Audio('sounds/tom-4.mp3').play();
                break;

            case "J":
                new Audio('sounds/snare.mp3').play();
                break;

            case "K":
                new Audio('sounds/crash.mp3').play();
                break;

            case "L":
                new Audio('sounds/kick-bass.mp3').play();
                break;

            default: alert("Error, Error!");
        }
    });
}

//for pressing the keys

document.addEventListener("keydown", function (e) {

    switch (e.key) {
        case "w":
            new Audio('sounds/tom-1.mp3').play();
            document.querySelector(".box-1").classList.toggle("active");
            //document.querySelector(".box-1").style.backgroundColor = "white"
            //document.querySelector(".box-1").style.opacity = "0.5"
            break;
         
        case "a":
            new Audio('sounds/tom-2.mp3').play();
            document.querySelector(".box-2").classList.toggle("active");
            break;

        case "s":
            new Audio('sounds/tom-3.mp3').play();
            document.querySelector(".box-3").classList.toggle("active");
            break;

        case "d":
            new Audio('sounds/tom-4.mp3').play();
            document.querySelector(".box-4").classList.toggle("active");
            break;

        case "j":
            new Audio('sounds/snare.mp3').play();
            document.querySelector(".box-5").classList.toggle("active");
            break;

        case "k":
            new Audio('sounds/crash.mp3').play();
            document.querySelector(".box-6").classList.toggle("active");
            break;

        case "l":
            new Audio('sounds/kick-bass.mp3').play();
            document.querySelector(".box-7").classList.toggle("active");
            break;

        default: console.log("Another key was pressed!");
    }
});













// old javascript written....

/*function test() {
    var a = document.getElementsByClassName("box-1")[0];
    a.innerHTML = "Audio"
    a.style.fontSize = "50px"
    a.style.backgroundColor = "white"
    a.style.opacity = "0.5";
}*/


// - playing audios immediately, without waiting for them to finish
/*
function crash() {
    var audio = document.getElementById("crash")
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
}

function kickBass() {
    var audio = document.getElementById("kickbass")
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
}

function snare() {
    var audio = document.getElementById("snare")
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
}

function tom1() {
    var audio = document.getElementById("tom1")
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
}

function tom2() {
    var audio = document.getElementById("tom2")
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
}

function tom3() {
    var audio = document.getElementById("tom3")
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
}

function tom4() {
    var audio = document.getElementById("tom4")
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
}

// - key pressing
*/