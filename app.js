 const currentDate = document.getElementById("currentDate");

if (currentDate) {
    const today = new Date();

    currentDate.textContent = today.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

let chartData = {
    Food: 35,
    Shopping: 25,
    Travel: 20,
    Bills: 20,
    Entertainment: 15
};

const chartCanvas = document.getElementById("expenseChart");

let expenseChart = null;

if (chartCanvas) {

    expenseChart = new Chart(chartCanvas, {

        type: "doughnut",

        data: {

            labels: [
                "Food",
                "Shopping",
                "Travel",
                "Bills",
                "Entertainment"
            ],

            datasets: [{
                data: [
                    chartData.Food,
                    chartData.Shopping,
                    chartData.Travel,
                    chartData.Bills,
                    chartData.Entertainment
                ],

                backgroundColor: [
                    "#4F46E5",
                    "#EF4444",
                    "#22C55E",
                    "#F59E0B",
                    "#06B6D4"
                ],

                borderWidth: 0
            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    position: "bottom"
                }

            }

        }

    });

}

let totalIncome =
    Number(localStorage.getItem("totalIncome")) || 0;

let totalExpense =
    Number(localStorage.getItem("totalExpense")) || 0;

const totalIncomeText =
    document.getElementById("totalIncome");

const totalExpenseText =
    document.getElementById("totalExpense");

const balanceText =
    document.getElementById("balance");

const transactionList =
    document.getElementById("transactionList");

const incomeTable =
    document.getElementById("incomeTable");

const expenseTable =
    document.getElementById("expenseTable");

if (totalIncomeText)
    totalIncomeText.textContent = "₹" + totalIncome;

if (totalExpenseText)
    totalExpenseText.textContent = "₹" + totalExpense;

if (balanceText)
    balanceText.textContent = "₹" + (totalIncome - totalExpense);

const incomeBtn =
    document.querySelector(".income-btn");

const incomeModal =
    document.getElementById("incomeModal");

const closeBtn =
    document.querySelector(".close-btn");

const saveBtn =
    document.querySelector(".save-btn");

const incomeAmount =
    document.getElementById("incomeAmount");

const incomeCategory =
    document.getElementById("incomeCategory");

const incomeDate =
    document.getElementById("incomeDate");

const incomeNotes =
    document.getElementById("incomeNotes");

const expenseBtn =
    document.querySelector(".expense-btn");

const expenseModal =
    document.getElementById("expenseModal");

const closeExpenseBtn =
    document.querySelector(".close-expense-btn");

const expenseSaveBtn =
    document.querySelector(".expense-save-btn");

const expenseAmount =
    document.getElementById("expenseAmount");

const expenseCategory =
    document.getElementById("expenseCategory");

const expenseDate =
    document.getElementById("expenseDate");

const expenseNotes =
    document.getElementById("expenseNotes");

    if (incomeBtn && incomeModal) {

    incomeBtn.addEventListener("click", function () {
        incomeModal.style.display = "flex";
    });

}

if (closeBtn && incomeModal) {

    closeBtn.addEventListener("click", function () {
        incomeModal.style.display = "none";
    });

}

window.addEventListener("click", function (event) {

    if (event.target === incomeModal) {
        incomeModal.style.display = "none";
    }

});

if (saveBtn) {

    saveBtn.addEventListener("click", function () {

        const amount = Number(incomeAmount.value);

        if (amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        totalIncome += amount;

        localStorage.setItem("totalIncome", totalIncome);

        if (totalIncomeText)
            totalIncomeText.textContent = "₹" + totalIncome;

        if (balanceText)
            balanceText.textContent = "₹" + (totalIncome - totalExpense);

        if (transactionList) {

            transactionList.innerHTML =
            `
            <div class="transaction">
                <strong>${incomeCategory.value}</strong><br>
                ₹${amount}<br>
                ${incomeDate.value}<br>
                ${incomeNotes.value}
                <hr>
            </div>
            ` + transactionList.innerHTML;

        }

        if (incomeTable) {

            incomeTable.innerHTML =
            `
            <tr>
                <td>${incomeDate.value}</td>
                <td>${incomeCategory.value}</td>
                <td>₹${amount}</td>
                <td>${incomeNotes.value}</td>
            </tr>
            ` + incomeTable.innerHTML;

        }

        incomeAmount.value = "";
        incomeCategory.selectedIndex = 0;
        incomeDate.value = "";
        incomeNotes.value = "";

        incomeModal.style.display = "none";

    });

}
if (expenseBtn && expenseModal) {

    expenseBtn.addEventListener("click", function () {
        expenseModal.style.display = "flex";
    });

}

if (closeExpenseBtn && expenseModal) {

    closeExpenseBtn.addEventListener("click", function () {
        expenseModal.style.display = "none";
    });

}

window.addEventListener("click", function (event) {

    if (event.target === expenseModal) {
        expenseModal.style.display = "none";
    }

});

if (expenseSaveBtn) {

    expenseSaveBtn.addEventListener("click", function () {

        const amount = Number(expenseAmount.value);

        if (amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        totalExpense += amount;

        localStorage.setItem("totalExpense", totalExpense);

        if (totalExpenseText)
            totalExpenseText.textContent = "₹" + totalExpense;

        if (balanceText)
            balanceText.textContent = "₹" + (totalIncome - totalExpense);

        if (transactionList) {

            transactionList.innerHTML =
            `
            <div class="transaction">
                <strong>${expenseCategory.value}</strong><br>
                -₹${amount}<br>
                ${expenseDate.value}<br>
                ${expenseNotes.value}
                <hr>
            </div>
            ` + transactionList.innerHTML;

        }

        if (expenseTable) {

            expenseTable.innerHTML =
            `
            <tr>
                <td>${expenseDate.value}</td>
                <td>${expenseCategory.value}</td>
                <td>-₹${amount}</td>
                <td>${expenseNotes.value}</td>
            </tr>
            ` + expenseTable.innerHTML;

        }

        expenseAmount.value = "";
        expenseCategory.selectedIndex = 0;
        expenseDate.value = "";
        expenseNotes.value = "";

        expenseModal.style.display = "none";

    });

}
const reportIncome = document.getElementById("reportIncome");
const reportExpense = document.getElementById("reportExpense");
const reportBalance = document.getElementById("reportBalance");
const reportSavings = document.getElementById("reportSavings");

if (reportIncome)
    reportIncome.textContent = "₹" + totalIncome;

if (reportExpense)
    reportExpense.textContent = "₹" + totalExpense;

if (reportBalance)
    reportBalance.textContent = "₹" + (totalIncome - totalExpense);

if (reportSavings) {

    let savings = 0;

    if (totalIncome > 0) {
        savings = ((totalIncome - totalExpense) / totalIncome) * 100;
    }

    reportSavings.textContent = savings.toFixed(1) + "%";
}

const reportCanvas = document.getElementById("reportChart");

if (reportCanvas) {

    new Chart(reportCanvas, {

        type: "bar",

        data: {

            labels: [
                "Income",
                "Expenses",
                "Balance"
            ],

            datasets: [{

                label: "Finance Report",

                data: [
                    totalIncome,
                    totalExpense,
                    totalIncome - totalExpense
                ],

                backgroundColor: [
                    "#22C55E",
                    "#EF4444",
                    "#4F46E5"
                ]

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    display: false
                }

            }

        }

    });

}