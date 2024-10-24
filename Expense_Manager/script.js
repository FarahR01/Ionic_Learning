// Step 1: Select all needed DOM elements
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");
const expenseTitle = document.getElementById("expenseTitle");
const expenseAmount = document.getElementById("expenseAmount");
const expenseList = document.getElementById("expenseList");
const totalExpense = document.getElementById("totalExpense");

let total = 0;

// Step 2: Add event listener to the "Add" button
btnAdd.addEventListener("click", () => {
  // Fetch the input values
  const title = expenseTitle.value;
  const amount = parseFloat(expenseAmount.value);

  // Validate inputs
  if (!title.trim() || isNaN(amount) || amount <= 0) {
    showAlert("Please enter valid expense details");
    return;
  }

  // Step 3: Add the new expense to the list
  const newExpense = document.createElement("ion-item");
  newExpense.textContent = `${title}: ${amount} $`;
  expenseList.appendChild(newExpense);

  // Step 4: Update the total expense
  total += amount;
  totalExpense.textContent = `${total.toFixed(2)} $`;

  // Clear inputs after adding
  expenseTitle.value = "";
  expenseAmount.value = "";
});

// Step 5: Clear the input fields when "Clear" is clicked
btnClear.addEventListener("click", () => {
  expenseTitle.value = "";
  expenseAmount.value = "";
});

// Helper function to show alert using Ionic's alert component
function showAlert(message) {
  const alert = document.createElement("ion-alert");
  alert.header = "Error";
  alert.message = message;
  alert.buttons = ["OK"];
  document.body.appendChild(alert);
  alert.present();
}
