var random1 = Math.floor(Math.random()*6)+1;
var randomImg = "dice" + random1 + ".png";
var imgSrc = "../images/" + randomImg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imgSrc);
var random2 = Math.floor(Math.random()*6)+1;
var randomImg2 = "dice" + random2 + ".png";
var imgSrc2 = "../images/" + randomImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imgSrc2);

image1.onclick = () => {
  location.reload()
}
image2.onclick = () => {
  location.reload()
}

if(random1>random2)
{
  document.querySelector("h1").innerHTML = "🚩 PLAYER 1 WINS!";
}
else if(random2>random1)
{
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS 🚩!";
}
else{
  document.querySelector("h1").innerHTML = "DRAW!";
}
