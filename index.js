//Detecting Button Press
var allButtons = document.querySelectorAll(".drum");

for (var i = 0; i < allButtons.length; i++) {

    allButtons[i].addEventListener("click", function() {
        var textContent = this.textContent;
        makeSound(textContent);
        buttonAnimation(textContent);
    })

}

//Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "f":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
    
        default:
            console.log(key, key==="j");
            break;
    }
}

// Add Animation to Button
function buttonAnimation(currentkey){
    var activeButton = document.querySelector(`.${currentkey}`);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}


// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();