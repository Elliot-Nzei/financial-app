# dashboard.js placeholder
document.addEventListener('DOMContentLoaded', function() {
    // Load the financial data from localStorage (or from the backend in the future)
    const financialData = JSON.parse(localStorage.getItem('financialData'));
    if (financialData) {
        document.getElementById('total-spent').textContent = `$${financialData.totalSpent.toFixed(2)}`;
        document.getElementById('money-saved').textContent = `$${financialData.moneySaved.toFixed(2)}`;
        document.getElementById('highest-recurring').textContent = financialData.highestRecurring;
    }
});
