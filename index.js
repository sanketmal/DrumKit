// document.querySelector(".w.drum").addEventListener("click", function(){
//     var audioCrash = new Audio('./sounds/crash.mp3');
//     audioCrash.play();
// });
// document.querySelector(".a.drum").addEventListener("click", function(){
//     var audioKickBass = new Audio('./sounds/kick-bass.mp3');
//     audioKickBass.play();
// });
// document.querySelector(".s.drum").addEventListener("click", function(){
//     var audioSnare = new Audio('./sounds/snare.mp3');
//     audioSnare.play();
// });
// document.querySelector(".d.drum").addEventListener("click", function(){
//     var audioTom1 = new Audio('./sounds/tom-1.mp3');
//     audioTom1.play();
// });
// document.querySelector(".j.drum").addEventListener("click", function(){
//     var audioTom2 = new Audio('./sounds/tom-2.mp3');
//     audioTom2.play();
// });
// document.querySelector(".k.drum").addEventListener("click", function(){
//     var audioTom3 = new Audio('./sounds/tom-3.mp3');
//     audioTom3.play();
// });
// document.querySelector(".l.drum").addEventListener("click", function(){
//     var audioTom4 = new Audio('./sounds/tom-4.mp3');
//     audioTom4.play();
// });

// Alternative Method

for(var i =0 ; i<document.querySelectorAll(".drum").length ; i++)
{
    document.getElementsByClassName("drum")[i].addEventListener("click",function(){
        this.style.color ="white";
        console.log(this);
        var buttonInnerHtml = this.innerHTML;
        console.log(buttonInnerHtml);
        buttonAnimation(this.innerHTML);
        switch (buttonInnerHtml) {
            case "w":
                var audioCrash = new Audio('./sounds/crash.mp3');
                audioCrash.play();
                break;
            case "a":
                var audioKickBass = new Audio('./sounds/kick-bass.mp3');
                audioKickBass.play();
                break;
            case "s":
                var audioSnare = new Audio('./sounds/snare.mp3');
                audioSnare.play();
                break;
            case "d":
                var audioTom1 = new Audio('./sounds/tom-1.mp3');
                audioTom1.play();
                break;
            case "j":
                var audioTom2 = new Audio('./sounds/tom-2.mp3');
                audioTom2.play();
                break;
            case "k":
                var audioTom3 = new Audio('./sounds/tom-3.mp3');
                audioTom3.play();
                break;
            case "l":
                var audioTom4 = new Audio('./sounds/tom-4.mp3');
                audioTom4.play();
                break;    
            default: console.log(buttonInnerHtml);
                break;
        }
        
    });
}
function buttonAnimation (currentKey)
{
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}