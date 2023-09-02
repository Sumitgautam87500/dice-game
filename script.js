
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imga ="images/dice" + randomNumber1 + ".png";
var changeImg = document.querySelectorAll("img")[0];
changeImg.setAttribute("src", imga);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imga2 ="images/dice" + randomNumber2 + ".png";
var changeImg2 = document.querySelectorAll("img")[1];
changeImg2.setAttribute("src", imga2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 win";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 win";
}else {
    document.querySelector("h1").innerHTML="Draw!";   
}

