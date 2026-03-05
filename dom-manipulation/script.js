// Array of quote objects
const quotes = [
{
text: "The only limit to our realization of tomorrow is our doubts of today.",
category: "Motivation"
},
{
text: "Life is what happens when you're busy making other plans.",
category: "Life"
},
{
text: "Do not watch the clock. Do what it does. Keep going.",
category: "Inspiration"
}
];

// Select DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteButton = document.getElementById("newQuote");

// Function to display a random quote
function displayRandomQuote() {

const randomIndex = Math.floor(Math.random() * quotes.length);

const randomQuote = quotes[randomIndex];

quoteDisplay.innerHTML = `"${randomQuote.text}" - ${randomQuote.category}`;

}

// Event listener for the button
newQuoteButton.addEventListener("click", displayRandomQuote);


// Function to add a new quote
function addQuote() {

const quoteText = document.getElementById("newQuoteText").value;

const quoteCategory = document.getElementById("newQuoteCategory").value;

const newQuote = {
text: quoteText,
category: quoteCategory
};

quotes.push(newQuote);

// clear inputs
document.getElementById("newQuoteText").value = "";
document.getElementById("newQuoteCategory").value = "";

}