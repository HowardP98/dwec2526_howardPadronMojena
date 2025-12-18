const character = document.getElementById("character");

document.addEventListener("keydown" , move);

let initialPositionX = 300;
let initialPositionY = 300;
const characterSize = 200; 

function move(e){
   
    switch(e.key){
        case "ArrowLeft":  
            initialPositionX -= 50;
            if (initialPositionX < 0) {
            initialPositionX = 0;
            }
            break;
        case "ArrowRight": 
            initialPositionX += 50;
            if (initialPositionX > window.innerWidth - characterSize) {
            initialPositionX = window.innerWidth - characterSize;
            }
            break;
        case "ArrowUp":    
            initialPositionY -= 50;
            if (initialPositionY < 0) {
            initialPositionY = 0;
            }
            break;
        case "ArrowDown": 
            initialPositionY += 50;
            if (initialPositionY > window.innerHeight - characterSize) {
            initialPositionY = window.innerHeight - characterSize;
            }
            break;
            }
    
    character.style.left = initialPositionX + "px";
    character.style.top = initialPositionY + "px";
}