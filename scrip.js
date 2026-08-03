const flashcards = [
    {
        question: "Qual a capital do Brasil?",
        answer: "Brasília"
    },
    {
        question: "Quanto é 7 × 8?",
        answer: "56"
    },
    {
        question: "Quem descobriu o Brasil?",
        answer: "Pedro Álvares Cabral"
    },
    {
        question: "Qual é a linguagem usada para estilizar páginas web?",
        answer: "CSS"
    }
];

let index = 0;

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const card = document.getElementById("card");

function showCard(){
    question.textContent = flashcards[index].question;
    answer.textContent = flashcards[index].answer;
    card.classList.remove("flip");
}

showCard();

card.addEventListener("click", () => {
    card.classList.toggle("flip");
});

function nextCard(){
    index = (index + 1) % flashcards.length;
    showCard();
}