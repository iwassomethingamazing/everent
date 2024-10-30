// Currency balances based on country
const moneyBalances = {
    'US': { value: 29.99, currency: 'USD' }, // United States Dollar
    'UK': { value: 25.00, currency: 'GBP' }, // British Pound
    'EU': { value: 27.00, currency: 'EUR' }, // Euro
    'JP': { value: 3000.00, currency: 'JPY' }, // Japanese Yen
    'CH': { value: 35.00, currency: 'CHF' }, // Swiss Franc
    'AU': { value: 40.00, currency: 'AUD' }, // Australian Dollar
    'CA': { value: 32.50, currency: 'CAD' }, // Canadian Dollar
};

// Function to get the user's country (for example purposes)
function getUserCountry() {
    // This is a placeholder. You can replace it with a geolocation API or similar.
    return 'CH'; // Change this value to test different countries
}

// Function to set the money value in the HTML
function setMoneyValue() {
    const userCountry = getUserCountry();
    const balance = moneyBalances[userCountry] || { value: 0, currency: 'USD' }; // Default to USD if country not found
    document.getElementById('moneyValue').innerText = `${balance.currency} ${balance.value.toFixed(2)}`; // Format as currency
}

// Call the function when the page loads
window.onload = setMoneyValue;
