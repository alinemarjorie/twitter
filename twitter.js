const postElement = document.getElementById("post");
const countElement = document.getElementById("count");
const buttonTweetElement = document.getElementById("buttonTweet");
const quant = 140;
const user = "Usuária:"

//Postar
buttonTweetElement.addEventListener("click", postTweet);

function postTweet(event) {
    event.preventDefault();
    
    let paragraph = document.createElement("p");
    paragraph.className = "tweets";
    paragraph.innerHTML = user + "<br>" + (postElement.value + "<br>" + moment().format('HH:mm'));
    document.getElementById('timeLine').prepend(paragraph);
    postElement.value = "";
    counterTweets();
    keyup();
}

//Chamando função
postElement.addEventListener("keyup", keyup);

function keyup() {
    limiteTextArea();
    postNull();
    countColor();
    autoResize();
}

//Contador
function limiteTextArea() {
    let resto = quant - postElement.value.length;
    countElement.innerHTML = resto;
}

//Bloquear botão
function postNull() {
    if (postElement.value !== "" && postElement.value.length <= 140){
        buttonTweetElement.removeAttribute("disabled","");
    } else {
        buttonTweetElement.setAttribute("disabled","");
    }
}

//Mudar cor
function countColor() {
    if (postElement.value.length < 120) {
        countElement.style.color = "rgb(32, 32, 32)";
    } 
    if (postElement.value.length >= 120) {
        countElement.style.color = "orange";
    }
    if (postElement.value.length >= 130) {
        countElement.style.color = "red";
    }
    if (postElement.value.length > 140) {
        countElement.style.color = "grey";
    } 
}

//Redimensionar área do texto
function autoResize() {
    postElement.style.cssText = "height:auto; padding:0";
    postElement.style.cssText = "height:" + postElement.scrollHeight + "px";
}

//Contar tweets
function counterTweets() {
    let tweets = document.getElementById("timeLine").childElementCount;
    document.getElementById("numberTweets").innerHTML = tweets;
}
