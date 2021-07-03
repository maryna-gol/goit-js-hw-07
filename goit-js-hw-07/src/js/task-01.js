const totalCategories = document.querySelectorAll('.item');
console.log(`В списке ${totalCategories.length} категории.`);

const title = document.querySelectorAll("h2").forEach(el => {
    console.log(`Категория: ${el.textContent}`);
    console.log(`Количество элементов: ${el.nextElementSibling.children.length}`);   
});   









