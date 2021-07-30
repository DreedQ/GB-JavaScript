'use strict'
// Задача №1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать createElement / appendChild)
var arrAbc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function creareChessDesk() {
    for (let x = 0; x < 9; x++) {
        const row = document.body.appendChild(document.createElement('tr'));
        for (let y = 0; y < 9; y++) {
            const col = row.appendChild(document.createElement('td'));
            col.style.width = '50px';
            col.style.height = '50px';
            col.style.textAlign = 'center';
            col.style.verticalAlign = 'middle';
            if (x % 2 == 0 && y % 2 != 0 && x != 0 && y != 0) {
                col.style.backgroundColor = 'black';
            } else if (x % 2 != 0 && y % 2 == 0 && x != 0 && y != 0) {
                col.style.backgroundColor = 'black';
            } else if (x == 0 && y != 0) {
                col.textContent = arrAbc[y - 1];
                col.style.backgroundColor = '#ffeaea';
            } else if (y == 0 && x != 0) {
                col.textContent = x;
                col.style.backgroundColor = '#ffeaea';
            };
        };
    };
};
creareChessDesk()

// Задача2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 2.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

let bicycle = {
    name: 'bicycle',
    price: 12950,
    'count in storage': 13,
    manufacture: 'GTD',
    color: ['black', 'grey', 'yellow'],
    sex: ['male', 'female']
};
let ball = {
    name: 'ball',
    price: 2250,
    'count in storage': 211,
    manufacture: 'Addio',
    color: ['black-red', 'grey', 'red-yellow'],
};
let sneekers = {
    name: 'sneekers',
    price: 3500,
    'count in storage': 65,
    manufacture: 'Nikas',
    color: ['black', 'white', 'white-black'],
    sex: ['male', 'female']
};
let socks = {
    name: 'socks',
    price: 94.99,
    'count in storage': 102,
    manufacture: 'Nikasorro',
    color: ['black', 'white', 'white-black'],
    sex: ['male', 'female']
};

let Product = [
    bicycle,
    ball,
    sneekers,
    socks,
]
let cart = [bicycle, socks, socks, ball, ball, ball, sneekers];

function sumOfPriсeItem() {
    let result = 0;
    cart.forEach(element => { result += element.price });
    if (result == 0) {
        return 'Корзина пуста';
    } else return 'В корзине: ' + cart.length + ' товаров на сумму ' + result + ' рублей'
};

let cartString = document.createElement('span');
let cartContainer = document.getElementsByClassName('catalog');
cartString.textContent = sumOfPriсeItem(cart);
document.body.appendChild(cartString);


// Задача3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
// 3.1. Создать массив товаров (сущность Product);

// Массив создан в предыдущем задании

// 3.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.

let ProductList = document.querySelector('.catalog');

function outCatalog() {
    Product.forEach(element => {
        let item = ProductList.appendChild(document.createElement('article'))
        item.textContent = 'Наименование: ' + String(element.name) + ' Цена: ' + String(element.price) + ' Цвет: ' + String(element.color);
        console.log(item)
        return item;
    });
}
outCatalog(Product);