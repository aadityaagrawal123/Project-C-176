let words = [
    {
    "inputs": 5,
    "category": "Name an indoor board game",
    "word": "Chess"
    },
    {
    "inputs": 6,
    "category": "Name the European country also known as 'The Hexagon' ",
    "word": "France"
    },
    {
    "inputs": 7,
    "category": "Name the planet after Mars",
    "word": "Jupiter"
    },
    {
    "inputs": 3,
    "category": "Name the pet animal belonging to lion family",
    "word": "Cat"
    },
    {
    "inputs": 5,
    "category": "Who is the king of fruits?",
    "word": "Mango"
    },
    {
    "inputs": 5,
    "category": "Name the largest animal on the Earth",
    "word": "Whale"
    },
    {
    "inputs": 6,
    "category": "Name the national game of India",
    "word": "Hockey"
    },
]
$(document).ready(function () {
    fillBlanks();
})

function fillBlanks() {

 const selectedWord = words[Math.floor(Math.random() * words.length)];

 $("#blanks").empty();

 for (let i = 0; i < selectedWord.inputs; i++) {
     let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
     $("#blanks").append(input_html)
 }

 $("#hint").html(selectedWord.category)


 var gameOver = false

 $(".clickable").click(function () {
     var correctGuess = false;      

     let id = $(this).attr("id");

     var life = parseInt($("#life").text())

     for (var i = 0; i < selectedWord.word.length; i++) {

         if (selectedWord.word.charAt(i).toLowerCase() == id) {
             if ((life > 0) && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {
                 $(".fill_blanks").eq(i).html(id);
                 correctGuess = true;

                 if ($("#blanks").text() === selectedWord.word.toLowerCase()) {
                     $("#result").text("Correct Guess, You Won!!")
                     $("#blanks").textColor() = "green"
                     correctGuess = true;
                     gameOver = true
                 }
             }                
         }
         
     }
    
     if ((life > 0) && (correctGuess!= true) && (gameOver != true)) {           
         life = life - 1
         $("#life").text(life)
     }
     else if (life == 0) {
         $("#result").text("Incorrect Guess, You Lost!!")
         $("#blanks").textColor() = "red"
     }

})
}

