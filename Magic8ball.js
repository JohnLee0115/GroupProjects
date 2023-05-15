var eightballAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var butt = document.querySelector(".output");

function answerme(){
    var answers = Math.floor(Math.random()*eightballAnswers.length);
    butt.innerText = eightballAnswers[answers];




// var eightball = document.getElementsByClassName(".output");

// function consultball() {
//     var answers = Math.floor(Math.random()*eightballAnswers.length);
//     if (answers === eightballAnswers.length) {
//         answers--;
//     }
//     eightball.innertext = eightballAnswers[answers];

    
    // var answers = Math.floor(Math.random()*eightballAnswers.length);
    // if (answers === eightballAnswers.length) {
    //     answers--;
    // }

    // var output = document.getElementsByClassName(".output");
    // output.innerText = eightballAnswers[answers];
    // console.log( eightballAnswers[answers]);
}