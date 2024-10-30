function formatCurrency(value, currency) {
    var parts = new Intl.NumberFormat(navigator.language, { style: 'currency', currency }).formatToParts(value);
    
    var symbol = parts.find(p => p.type === 'currency').value;
    var separator = parts.find(p => p.type === 'group')?.value || ''; // Use optional chaining
    var decimal = parts.find(p => p.type === 'decimal')?.value || '';

    return {
        formattedValue: parts.map(p => p.value).join(''),
        symbol,
        separator,
        decimal
    };
}

const currencies = ['USD', 'EUR', 'CHF', 'GBP', 'JPY'];

currencies.forEach(currency => {
    const result = formatCurrency(10000, currency);
    console.log(`Currency: ${currency}`);
    console.log(`Formatted Value: ${result.formattedValue}`);
    console.log(`Currency Symbol: ${result.symbol}`);
    console.log(`Group Separator: ${result.separator}`);
    console.log(`Decimal Separator: ${result.decimal}`);
    console.log('---');
});
