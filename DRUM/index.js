
var len = document.querySelectorAll(".drum").length;//selecting with class.. .calssName

for(var i=0;i<len;i++){
document.querySelectorAll("button")[i].addEventListener("click",function handleclick(){
  //anonymous function...
  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();
  var exp = this.innerHTML;
  make_sound(exp);
  buttonAnimation(exp);
});
}

document.addEventListener("keydown",function(event){
make_sound(event.key);
buttonAnimation(event.key);
});

function make_sound(x){
  switch (x) {
    case 'w':
              var crash =  new Audio("sounds/crash.mp3");
              crash.play();
              break;
    case 'a':
              var kick=  new Audio("sounds/kick-bass.mp3");
              kick.play();
              break;
    case 's':
              var snare =  new Audio("sounds/snare.mp3");
              snare.play();
              break;
    case 'd':
              var tom1 =  new Audio("sounds/tom-1.mp3");
              tom1.play();
              break;
    case 'j':
              var tom2 =  new Audio("sounds/tom-2.mp3");
              tom2.play();
              break;
    case 'k':
              var tom3 =  new Audio("sounds/tom-3.mp3");
              tom3.play();
              break;
    case 'l':
              var tom4 =  new Audio("sounds/tom-4.mp3");
              tom4.play();
              break;
    default:  console.log(exp);

  }
}

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}
