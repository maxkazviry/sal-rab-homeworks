// Задание 4.1. Вывод карточек товаров

function parseProducts(json){
    // Аргументом функции является JSON

    // Преобразуйте строку json, переданную как аргумент функции,
    let data = JSON.parse(json); 
    // в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data
    // Верните как результат функции свойство products объекта data
    return data.products; 
}

// Напишите функцию renderProductsCards(json)
function renderProductsCards(json){
    this.clearProducts();
    let products = this.parseProducts(json);
    let length = this.products.length;
}
// Аргументом функции является JSON
// Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
// Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
// Запишите в переменную length значение свойства products.length
for (i=0; i<length; i++) {
    this.addProduct(products[i]);
  }
// Напишите цикл, в котором перебираете все products от 0 до (length - 1)
// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
