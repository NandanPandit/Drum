let numberOfButton = document.querySelectorAll(".drum").length;

/*
for(let i = 0; i<numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // onclick to sound generated
        var audios = this.innerText;
        console.log(audios);
        switch (audios) {
            case "w":
                var audioElement = new Audio("./sounds/tom-1.mp3");
                audioElement.play();
                break;
            case "a":
                var audioElement = new Audio("./sounds/snare.mp3");
                audioElement.play();
                break;
            case "s":
                var audioElement = new Audio("./sounds/kick-bass.mp3");
                audioElement.play();
                break;
            case "d":
                var audioElement = new Audio("./sounds/crash.mp3");
                audioElement.play();
                break;
            case "j":
                var audioElement = new Audio("./sounds/tom-4.mp3");
                audioElement.play();
                break;
            case "k":
                var audioElement = new Audio("./sounds/tom-3.mp3");
                audioElement.play();
                break;
            case "l":
                var audioElement = new Audio("./sounds/tom-2.mp3");
                audioElement.play();
                break;
        
            default:
                console.log(audios);
        }
    });
    
}
*/

//click then drum create sound.
for (let i = 0; i < numberOfButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let onKeyPressButton = this.innerText;
        makeASound(onKeyPressButton);
    })
}
//onkeyPress button
document.addEventListener("keypress",function (event) {
    let pressKey = event.key;
    
    switch (pressKey) {
        case "w":
            var audioElement = new Audio("./sounds/tom-1.mp3");
            audioElement.play();
            break;
        case "a":
            var audioElement = new Audio("./sounds/snare.mp3");
            audioElement.play();
            break;
        case "s":
            var audioElement = new Audio("./sounds/kick-bass.mp3");
            audioElement.play();
            break;
        case "d":
            var audioElement = new Audio("./sounds/crash.mp3");
            audioElement.play();
            break;
        case "j":
            var audioElement = new Audio("./sounds/tom-4.mp3");
            audioElement.play();
            break;
        case "k":
            var audioElement = new Audio("./sounds/tom-3.mp3");
            audioElement.play();
            break;
        case "l":
            var audioElement = new Audio("./sounds/tom-2.mp3");
            audioElement.play();
            break;
    
        default:
            console.log(pressKey);
    }
})