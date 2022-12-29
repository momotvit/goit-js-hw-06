

const categoriesItemEl = document.querySelectorAll('.item');
console.log(`Number of categories:`, categoriesItemEl.length);

categoriesItemEl.forEach(item => {
    const itemHeading = item.firstElementChild.textContent;
    const itemQuantity = item.querySelectorAll('li').length;

    console.log(`Category:`,itemHeading);
    console.log(`Elements:`, itemQuantity);
    return;
});

