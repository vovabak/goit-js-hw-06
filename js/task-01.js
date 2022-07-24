const categoriesRef = document.querySelector('#categories');
const categoriesItemsRef = document.querySelectorAll('.item');

function calculateCategories(categories) {
    console.log('Number of categories: ', categories.children.length);
}

function logCatagoriesNameAndNumberOfItems(items) {
    for (let item of items) {
        console.log('Category: ', item.firstElementChild.textContent);
        console.log('Elements: ', item.lastElementChild.children.length);
    }    
}

calculateCategories(categoriesRef)
logCatagoriesNameAndNumberOfItems(categoriesItemsRef)