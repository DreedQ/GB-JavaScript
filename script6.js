'use strict'
// Задача №1. Доработать модуль корзины.
// a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
// b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
const product = {
    catalog: {
        bicycle: {
            name: 'bicycle',
            price: 14000,
            'count in storage': 13,
            manufacture: 'GTD',
            color: ['black', 'grey', 'yellow'],
            sex: ['male', 'female']
        },
        ball: {
            name: 'ball',
            price: 1100,
            'count in storage': 211,
            manufacture: 'Addio',
            color: ['black-red', 'grey', 'red-yellow'],
        },
        sneekers: {
            name: 'sneekers',
            price: 3500,
            'count in storage': 65,
            manufacture: 'Nikas',
            color: ['black', 'white', 'white-black'],
            sex: ['male', 'female']
        },
        socks: {
            name: 'socks',
            price: 100,
            'count in storage': 102,
            manufacture: 'Nikasorro',
            color: ['black', 'white', 'white-black'],
            sex: ['male', 'female']
        },
    },
    renderCatalog() {
        for (let item in this.catalog) {
            let productItem = document.createElement('article');
            let productList = document.querySelector('.catalog').appendChild(productItem);
            productItem.innerHTML += item + `<div class="buy__item">BUY!</div><br>`;
            for (let key in this.catalog[item]) {
                productItem.innerHTML += key + " : " + this.catalog[item][key] + `<br>`;
            }
        };
    },

    init(product) {
        let buttonBuy = document.querySelectorAll('article');
        buttonBuy.forEach(element => {
            element.addEventListener('click', (event) => {
                addItemToCartClick(event);
            });
        });

        function addItemToCartClick(event) {
            if (event.target.className != 'buy__item') {
                return;
            } else cart.addToCartItem();
            console.log(event);
        };
    },
};
product.renderCatalog();
product.init();

let cartString = document.createElement('span');
let cartContainer = document.querySelector('.cart');
cartContainer.appendChild(cartString);




const cart = {
    itemToBuy: [{
        name: 'sneekers',
        price: 3500,
        'count in storage': 65,
        manufacture: 'Nikas',
        color: ['black', 'white', 'white-black'],
        sex: ['male', 'female']
    }, {
        name: 'ball',
        price: 1100,
        'count in storage': 211,
        manufacture: 'Addio',
        color: ['black-red', 'grey', 'red-yellow'],
    }, ],

    sumOfPriсeItem() {
        let result = 0;
        let qwantity = 0;
        for (const good in this.itemToBuy) { result += this.itemToBuy[good].price };
        for (let i in this.itemToBuy) {
            qwantity += 1;
        };
        if (result == 0) {
            cartString.innerHTML = 'Корзина пуста';
        } else cartString.innerHTML = 'В корзине:' + qwantity + ' товаров на сумму ' + result + ' рублей'
    },
    renderCart() {
        for (let item in this.itemToBuy) {
            let productItem = document.createElement('article');
            let cartList = document.createElement('div').appendChild(productItem);
            cartContainer.appendChild(cartList);
            for (let key in this.itemToBuy[item]) {
                productItem.innerHTML += key + " : " + this.itemToBuy[item][key] + `<br>`;
            };
        };
    },
    addToCartItem() {
        this.itemToBuy.push(product.catalog.ball);
        console.log(cart.itemToBuy);
        console.log(product.catalog.ball);

        cartContainer = '';
        this.renderCart();
    },
};
cart.renderCart();
cart.sumOfPriсeItem();


// Задача №2 *У товара может быть несколько изображений. Нужно:
// a. Реализовать функционал показа полноразмерных картинок товара в модальном окне
// b. Реализовать функционал перехода между картинками внутри модального окна ("листалка")