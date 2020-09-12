var box = document.getElementsByClassName('box');
function cake() {
    box[0].style.backgroundImage = "url('./media/cake.gif')";
    box[0].textContent = "";
}
function brain() {
    box[1].style.backgroundImage = "url('./media/brain.gif')";
    box[1].textContent = "";
}
function hard() {
    box[2].style.backgroundImage = "url('./media/hard.gif')";
    box[2].textContent = "";
}
function normal(){
    box[0].style.backgroundImage = "none";
    box[1].style.backgroundImage = "none";
    box[2].style.backgroundImage = "none";
    box[0].style.backgroundColor = "white";
    box[1].style.backgroundColor = "white";
    box[2].style.backgroundColor = "white";
    box[0].textContent = "Easy";
    box[1].textContent = "Medium";
    box[2].textContent = "Hard";
}





