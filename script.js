function formatCurrency(value) {
    const userLocale = navigator.language; // Get the user's locale
    const currency = new Intl.NumberFormat(userLocale, { style: 'currency' }).resolvedOptions().currency; // Determine the currency from locale
    
    // Format the value with the user's currency
    const formattedValue = new Intl.NumberFormat(userLocale, { style: 'currency', currency }).format(value);
    return formattedValue;
}

const valueToDisplay = 10000; // Change this value as needed

// Format the value and update the span
const formattedMoney = formatCurrency(valueToDisplay);
document.getElementById('moneyValue').textContent = formattedMoney;

// Optional: Log the formatted value to the console
console.log(`Formatted Value: CHF{formattedMoney}`);
