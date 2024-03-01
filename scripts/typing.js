var i = 0;
var txt = "Hey I am VoutouZ and I am a future developer. This Github Pages will be more relevant in some days. So, please comeback to check that 😉";
var speed = 50;

function typeWritter() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i)
        i++;
        setTimeout(typeWritter, speed)
    }
}
window.onload=function() {
    typeWritter();
}
