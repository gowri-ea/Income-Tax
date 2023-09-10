document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("taxForm");
    const incomeInput = document.getElementById("income");
    const resultDiv = document.getElementById("result");
    const incomeDisplay = document.getElementById("incomeDisplay");
    const taxDisplay = document.getElementById("taxDisplay");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const income = parseInt(incomeInput.value);
        let tax;

        if (income < 500000) {
            tax = 0;
        } else if (income >= 500000 && income <= 1000000) {
            tax = 0.2 * income;
        } else {
            tax = 0.3 * income;
        }

        incomeDisplay.textContent = income;
        taxDisplay.textContent = tax.toFixed(2);

        resultDiv.classList.remove("hidden");
    });
});
