function formatCurrency(value, currency) {
    var parts = new Intl.NumberFormat(navigator.language, { style: 'currency', currency }).formatToParts(value);
    
    var formattedValue = parts.map(p => p.value).join('');
    return formattedValue;
}

const currencies = ['USD', 'EUR', 'CHF', 'GBP', 'JPY'];
const valueToDisplay = 10000; // Change this value as needed
const selectedCurrency = 'USD'; // Change this to desired currency

// Format the value and update the span
const formattedMoney = formatCurrency(valueToDisplay, selectedCurrency);
document.getElementById('moneyValue').textContent = formattedMoney;

// Optional: Log the formatted value to the console
console.log(`Formatted Value: ${formattedMoney}`);
