let miDiv = document.getElementById("uno");
miDiv.style.backgroundImage = "url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHZ5bTE1cDRpNWpreGN4eGk2aDJoZG93YTkxYWwwZWN6Zzl2czNiOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SnctJfY81x2XC/giphy.gif')";

function left(){
    miDiv.style.left = "0px";
}

function right(){
    miDiv.style.left = "500px";
}

function up(){
    miDiv.style.top = "0px";
}

function down(){
    miDiv.style.top = "500px"; 
}

function back(){
    miDiv.style.left = "300px";
    miDiv.style.top = "300px";
}