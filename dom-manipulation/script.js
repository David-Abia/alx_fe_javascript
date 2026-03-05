// =======================
// Quotes Array
// =======================
let quotes = [
  { text: "Believe in yourself.", category: "Motivation" },
  { text: "Knowledge is power.", category: "Education" },
  { text: "Stay positive.", category: "Mindset" }
];

// =======================
// Show Random Quote
// =======================
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const display = document.getElementById("quoteDisplay");
  display.textContent = `"${quote.text}" — (${quote.category})`;
}

// =======================
// Create Add Quote Form (Dynamic DOM)
// =======================
function createAddQuoteForm() {
  const container = document.getElementById("formContainer");

  // Wrapper div
  const formDiv = document.createElement("div");

  // Input for quote text
  const textInput = document.createElement("input");
  textInput.id = "newQuoteText";
  textInput.type = "text";
  textInput.placeholder = "Enter a new quote";

  // Input for category
  const categoryInput = document.createElement("input");
  categoryInput.id = "newQuoteCategory";
  categoryInput.type = "text";
  categoryInput.placeholder = "Enter quote category";

  // Add button
  const addBtn = document.createElement("button");
  addBtn.textContent = "Add Quote";
  addBtn.addEventListener("click", addQuote);

  // Append elements
  formDiv.appendChild(document.createElement("br"));
  formDiv.appendChild(textInput);
  formDiv.appendChild(document.createElement("br"));
  formDiv.appendChild(categoryInput);
  formDiv.appendChild(document.createElement("br"));
  formDiv.appendChild(addBtn);

  container.appendChild(formDiv);
}

// =======================
// Add Quote Function
// =======================
function addQuote() {
  const text = document.getElementById("newQuoteText").value.trim();
  const category = document.getElementById("newQuoteCategory").value.trim();

  if (text === "" || category === "") {
    alert("Please fill both fields.");
    return;
  }

  const newQuote = { text, category };
  quotes.push(newQuote);

  // Clear inputs
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";

  alert("Quote added successfully!");
}

// =======================
// Event Listener
// =======================
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Create form on page load
createAddQuoteForm();
