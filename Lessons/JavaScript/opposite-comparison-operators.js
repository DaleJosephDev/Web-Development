// Reference
var input = prompt("What course are you taking?")

var text1 = document.getElementById("text")
var innerLower = input.toLowerCase()

if(innerLower === "javascript for beginners") {
    text.innerHTML = "<strong> Welcome!</strong> to JavaScript for beginners"
} else{
    text.innerHTML = "Sorry :( YOU ARE IN THE WRONG COURSE. Please try entering another course."
}

// I made an if and else statement about scoring if totalscore is greater than 79 execute the text if it false excute the else statement it will also execute another text.
var answer = prompt("What's your exam score? ")
var test1 = document.getElementById("test")
var totalscore = answer.toLowerCase()

if(totalscore > 79){
    test.innerHTML = "<strong>Congratz!</strong> YOU PASSED THE EXAM, your going to graduate this year!"
}else{
    test.innerHTML = "<strong>Sorry :(</strong> YOU FAILED THE EXAM, better luck next time...."
}