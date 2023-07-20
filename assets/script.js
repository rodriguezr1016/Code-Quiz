var mainEl = document.querySelector("main");
var startButton = document.querySelector("#startButton");
var timeEl = document.querySelector("#count");
var h2EL = document.querySelector("h2");
var rulesEl = document.querySelector('#rules');
var timeLeft = 45;
var questions = [];
var right1El= document.querySelector("#right1");
var bodyEl= document.querySelector('body');
var listEl= document.querySelector('#lists');
var score= 0;
var wrong1= document.getElementById('#questionChoices1');
var wrong2= document.getElementById('#questionChoices2');
var wrong3= document.getElementById('#questionChoices3');
var startTimer = function(){
    var interval= setInterval(function(){
        timeLeft--;
        timeEl.textContent = "Time Left: " +timeLeft;
        if(timeLeft===0){
            clearInterval(interval);
            sendMessage();
        }
    }, 1000);
}
function addRight1() {
    var li = document.createElement("li");
    var button1= document.createElement("button");
    function addId(){
        return button1.setAttribute("id", "rightAnswer");

    }
    addId()
    button1.appendChild(document.createTextNode("None of the above"));
    li.appendChild(button1);
    list1.appendChild(li);
    var rightAnswer= document.querySelector('#rightAnswer');
   rightAnswer.addEventListener('click', function(){
    nextQuestion();
   })
};
function addRight2() {
    var li = document.createElement("li");
    var button1= document.createElement("button");
    function addId(){
        return button1.setAttribute("id", "rightAnswer");

    }
    addId()
    button1.appendChild(document.createTextNode("title"));
    li.appendChild(button1);
    list2.appendChild(li);
    var rightAnswer= document.querySelector('#rightAnswer');
   rightAnswer.addEventListener('click', function(){
    nextQuestion1();
   })
};
function addRight3() {
    var li = document.createElement("li");
    var button1= document.createElement("button");
    function addId(){
        return button1.setAttribute("id", "rightAnswer");

    }
    addId()
    button1.appendChild(document.createTextNode("false"));
    li.appendChild(button1);
    list3.appendChild(li);
    var rightAnswer= document.querySelector('#rightAnswer');
   rightAnswer.addEventListener('click', function(){
    score++;
    endOfQuiz();
   })
};
var nextQuestion = function(){
    h2EL.innerHTML= "Which of the following is an example of metadata of a website?";
    score++;
    list2.innerHTML = choices2.join('');
    var ol = document.querySelector('#list2');
    for (var i = ol.children.length; i >= 0; i--) {
        ol.appendChild(ol.children[Math.random() * i | 0]);
        
    }
    list1.innerHTML="";
    addRight2();
    
};
var nextQuestion1 = function() {
    h2EL.innerHTML= "var is the only way you can create a variable.";
    score++;
    console.log(score);
    list3.innerHTML = choices3.join('');
    var ol = document.querySelector('#list3');
    for (var i = ol.children.length; i >= 0; i--) {
        ol.appendChild(ol.children[Math.random() * i | 0]);
        
    }
    list2.innerHTML="";
    addRight3();

};
startButton.addEventListener("click", function(target){
    startTimer();
    h2EL.innerHTML= " Which of the following is a valid HTML tag?"
    h2EL.setAttribute("style", "padding-left:0%; background: var(--theme);color:white; border-radius: 10px");
    list1.innerHTML = choices1.join('');
    var ol = document.querySelector('#list1');
    addRight1();
    for (var i = ol.children.length; i >= 0; i--) {
        ol.appendChild(ol.children[Math.random() * i | 0]);
    }
    if(target==wrong1){
        timeLeft--;
    }
    startButton.setAttribute("style", "display: none");
    rulesEl.setAttribute("style", "display:none")
});
//question 1
var answers = ['h1', '< >', '<', '> p <',];
var choices1 = [];
var list1 = document.getElementById("list1");

answers.forEach(function(element) {
    choices1.push("<li>" + "<button class = 'questionChoices1'>" + element + "</button>" + "</li>");
});
//question 2
var answers2 = ['All of the above','body', 'h1 tag'];
var choices2 = [];
var list2 = document.getElementById("list2");

answers2.forEach(function(element) {
    choices2.push("<li>" + "<button class = 'questionChoices2'>" + element + "</button>" + "</li>");
});
//question 3
var answers3 = ['true'];
var choices3 = [];
var list3 = document.getElementById("list3");

answers3.forEach(function(element) {
    choices3.push("<li>" + "<button class = 'questionChoices3'>" + element + "</button>" + "</li>");
});
function displayMessage(type, message) {
    h2EL.textContent = message;
    h2EL.setAttribute("class", type);
  }
function endOfQuiz(){
h2EL.innerHTML="All Done!";
listEl.innerHTML="Enter Initials"
var input = document.createElement('input');
var submitbtn= document.createElement('button')
submitbtn.textContent="Submit"
input.setAttribute("id", "initials")
listEl.appendChild(input);
listEl.appendChild(submitbtn);
submitbtn.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = document.getElementById("initials").value;
    localStorage.setItem('initials', initials);
    
    
  });
};