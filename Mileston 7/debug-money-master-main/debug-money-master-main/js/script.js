const calculateExpense = () => {
  const income = document.querySelector("#income").value;
  const newIncome = parseFloat(income);
  // console.log(newIncome);
  const food = document.querySelector("#food").value;
  const newFood = parseFloat(food);
  // console.log(newFood);

  const rent = document.querySelector("#rent").value;
  const newRent = parseFloat(rent);
  // console.log(newRent);

  const clothes = document.querySelector("#clothes").value;
  const newCloth = parseFloat(clothes);
  // console.log(newCloth);


  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense = newFood + newRent + newCloth;
// console.log(expense);
  // calculate balance
  const balance = parseInt(newIncome) - expense;
  // console.log(balance);
  //   validate income
  if (expense > income.value) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  const income = document.querySelector("#income").value;
const newIncome = parseFloat(income);
  // calculate saving amount
  const savePercentage = document.getElementById("save").value;

  const newSavePercentage = parseFloat(savePercentage);
  const balance = document.getElementById("balance").innerText;

  console.log(typeof newSavePercentage);
//   Validate saving percentage value

  if (savePercentage < 0) {
    alert("Provide positive saving value");
  }
  const savingAmount = (newSavePercentage / 100) * newIncome;

  // calculate remaining balance
  // const newBalance = parseFloat(balance);
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};
