$(document).ready(function() {
    const quant = 140;
    const user = "Usuária:";

    const buttonTweetElement = $("#buttonTweet");
    const postElement = $("#post");
    const countElement = $("#count");


    buttonTweetElement.click((e) => {
        e.preventDefault();

        $("#timeLine").prepend(
            `
            <article class="tweets">           
            <p class="font-weight-bold">${user}</p>
            <p> ${postElement.val()}</p>
            <div>${moment().format('HH:mm')}</div>
            </article>
            `
        )

        postElement.val("");
        countElement.html("140");
        buttonTweetElement.attr("disabled","");       
    });

    buttonTweetElement.click(() => {
        let tweets = $("#timeLine article").length;
        $("#numberTweets").html(tweets);
    });
  
    postElement.keyup(() => {
        postNull();
        counter();
        resize();
        counterColor();
    });

    function postNull() {
        if (postElement.val() !== "" && postElement.val().length <= 140){
            buttonTweetElement.removeAttr("disabled","");
        } else {
            buttonTweetElement.attr("disabled","");
        }
    }

    function counter() {
        let resto = quant - postElement.val().length;
        countElement.html(resto);
    }

    function resize() {
        postElement.css({"height":"auto", "padding":"0"});
        postElement.css({"height": postElement.prop("scrollHeight") + "px"});
    }

    function counterColor() {
        if (postElement.val().length < 120) {
            countElement.css({"color":"rgb(32, 32, 32)"});
        } 
        if (postElement.val().length >= 120) {
            countElement.css({"color":"orange"});
        }
        if (postElement.val().length >= 130) {
            countElement.css({"color":"red"});
        }
        if (postElement.val().length > 140) {
            countElement.css({"color":"grey"});
        } 
    }
});
