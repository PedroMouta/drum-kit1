var buttons = document.querySelectorAll(".box");
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        switch (this.innerHTML) {
            case "W":
                new Audio('sounds/tom-1.mp3').play();
                animation(".box-1");
                break;

            case "A":
                new Audio('sounds/tom-2.mp3').play();
                animation(".box-2");
                break;

            case "S":
                new Audio('sounds/tom-3.mp3').play();
                animation(".box-3");
                break;

            case "D":
                new Audio('sounds/tom-4.mp3').play();
                animation(".box-4");
                break;

            case "J":
                new Audio('sounds/snare.mp3').play();
                animation(".box-5");
                break;

            case "K":
                new Audio('sounds/crash.mp3').play();
                animation(".box-6");
                break;

            case "L":
                new Audio('sounds/kick-bass.mp3').play();
                animation(".box-7");
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
            animation(".box-1");
            break;

        case "a":
            new Audio('sounds/tom-2.mp3').play();
            animation(".box-2");
            break;

        case "s":
            new Audio('sounds/tom-3.mp3').play();
            animation(".box-3");
            break;

        case "d":
            new Audio('sounds/tom-4.mp3').play();
            animation(".box-4");
            break;

        case "j":
            new Audio('sounds/snare.mp3').play();
            animation(".box-5");
            break;

        case "k":
            new Audio('sounds/crash.mp3').play();
            animation(".box-6");
            break;

        case "l":
            new Audio('sounds/kick-bass.mp3').play();
            animation(".box-7");
            break;

        default: console.log("Another key was pressed!");
    }
});

function animation(box) {
    document.querySelector(box).classList.add("active");

    // higher order function setTimeout();
    setTimeout(function () {
        document.querySelector(box).classList.remove("active");
    }, 100)
}
