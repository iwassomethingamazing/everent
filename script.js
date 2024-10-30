const searchBar = document.querySelector('.search-bar');

searchBar.addEventListener('input', function() {
    const filter = searchBar.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const text = product.textContent.toLowerCase();
        product.style.display = text.includes(filter) ? 'block' : 'none';
    });
});
