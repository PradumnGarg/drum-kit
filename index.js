
var numberofkeys=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofkeys;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
          var buttonl=this.innerHTML;
          playAudio(buttonl);
          buttonanimation(buttonl);
      
    });

}

document.addEventListener("keydown",function(event){
playAudio(event.key);
buttonanimation(event.key);

});


function playAudio(l){
    switch(l){
        case "w":var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
     
       case "a":var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

                case "s":var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
                    
                case "d":var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
                
                case "j":var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
                
                case "k":var kickbass=new Audio("sounds/kick-bass.mp3");
                kickbass.play();
                break;
                
                case "l":var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;

                default:alert("No such button exits");
                              break;
                
                        
    }
}

function buttonanimation(keey){
    var classgot=document.querySelector("."+keey);
    classgot.classList.toggle("pressed");
}