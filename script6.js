'use strict'
// Задача №1. Доработать модуль корзины.
// a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
// b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
const product = {
    settings: {
        productItem: 'article',
        productItemContainer: '.catalog',
        buttonBuy: 'prodict__btn'
    },
    catalog: {
        bicycle: {
            name: 'bicycle',
            price: 14000,
            'count in storage': 13,
            manufacture: 'GTD',
            color: ['black', 'grey', 'yellow'],
            sex: ['male', 'female'],
            'id': 116,
        },
        ball: {
            name: 'ball',
            price: 1100,
            'count in storage': 211,
            manufacture: 'Addio',
            color: ['black-red', 'grey', 'red-yellow'],
            sex: 'unisex',
            'id': 9188,
        },
        sneekers: {
            name: 'sneekers',
            price: 3500,
            'count in storage': 65,
            manufacture: 'Nikas',
            color: ['black', 'white', 'white-black'],
            sex: ['male', 'female'],
            'id': 18,
        },
        socks: {
            name: 'socks',
            price: 100,
            'count in storage': 102,
            manufacture: 'Nikasorro',
            color: ['black', 'white', 'white-black'],
            sex: ['male', 'female'],
            'id': 7011,
        },
    },
    init() {
        this.productItemsRender();


        document.querySelector('.catalog').addEventListener('click', (event) => {
            if (event.target.className != 'catalog__btn') return;
            // return event.target.id;
            this.getItemById(event.target.id);
            // console.log(event.target.id);
        });

    },

    productItemsRender() {
        for (const item in this.catalog) {
            let productItem = `<h4>Наименование: ${this.catalog[item]['name']} </h4>
                <p>Цена: ${this.catalog[item]['price']} рублей</p>
                <p>Количество на складе: ${this.catalog[item]['count in storage']} штук</p>
                <p>Возможные цвета: ${this.catalog[item]['color']} </p>
                <p>Пол: ${this.catalog[item]['sex']} </p> 
                <div class='catalog__btn' id='${this.catalog[item].id}'>Buy now!</div>`
            let productList = document.querySelector('.catalog').insertAdjacentHTML('afterbegin', '<article>' + `${productItem}` + '</article>');

        };
    },

    getItemById(id) {
        for (let item in this.catalog) {
            if (this.catalog[item].id == id)
            // return this.catalog[item];
                cart.addItemToCart(this.catalog[item]);

        };
        // console.log(this.catalog[item]);
    },

};

product.init();





const cart = {
    itemToBuy: [
        /*{
                name: 'ball',
                price: 1100,
                'count in storage': 211,
                manufacture: 'Addio',
                color: ['black-red', 'grey', 'red-yellow'],
                sex: 'unisex',
                id: 9188,
            }, {
                name: 'sneekers',
                price: 3500,
                'count in storage': 65,
                manufacture: 'Nikas',
                color: ['black', 'white', 'white-black'],
                sex: ['male', 'female'],
                id: 18,
            }, */
    ],
    init() {
        this.cartItemRender();
        this.cartPriceRender();
        // document.querySelector('.cart').insertAdjacentHTML('beforeend', `<article>${this.}</article>`)
    },
    cartItemRender() {
        let cartItemContainer = document.querySelector('.cart');
        cartItemContainer.innerHTML = '';
        // let cartItem = cartItemContainer.insertAdjacentHTML('afterbegin', `<article>${cartItem}</article>`)
        for (const item in this.itemToBuy) {
            let cartItem = `<h4>Наименование: ${this.itemToBuy[item]['name']}</h4>
                <p>Цена:   ${this.itemToBuy[item]['price']} рублей</p>
                <p>Количество на складе:  ${this.itemToBuy[item]['count in storage']} штук</p>
                <p>Возможные цвета:  ${this.itemToBuy[item]['color']}</p>
                <p>Пол: ${this.itemToBuy[item]['sex']}</p> 
                <p>Количество: ${this.itemToBuy[item]['quantity']}</p> `

            cartItemContainer.insertAdjacentHTML('beforeend', `<article>${cartItem}</article>`)
        };
    },

    addItemToCart(good) {
        let cartAdded;
        if (good)
            cartAdded = this.itemToBuy.find((item) => good.id === item.id);
        if (cartAdded) {
            cartAdded.quantity++;
        } else {
            this.itemToBuy.push({...good, quantity: 1 });
        };
        this.cartItemRender();
        this.cartPriceRender();
    },

    cartFinalPrice() {
        let sumPrice = 0;
        this.itemToBuy.forEach(element => {
            sumPrice += element.price * element.quantity;
        });
        return sumPrice
    },

    cartFinalItems() {
        let sumOfItems = 0;
        this.itemToBuy.forEach(element => {
            sumOfItems += element.quantity;
        });
        return sumOfItems;
    },

    cartPriceRender() {
        let notification = document.querySelector('.cart').appendChild(document.createElement("div"));

        if (this.cartFinalItems() == 0) {
            console.log(this.cartFinalItems())
            notification.insertAdjacentHTML('afterend', `<article>В корзине пока ничего нет(.</article>`)
        } else return notification.insertAdjacentHTML('afterend', `<article>В корзине ${this.cartFinalItems()} товаров на сумму ${this.cartFinalPrice()} рублей.</article>`)
    },
};
cart.init();



// Задача №2 *У товара может быть несколько изображений. Нужно:
// a. Реализовать функционал показа полноразмерных картинок товара в модальном окне
// b. Реализовать функционал перехода между картинками внутри модального окна ("листалка")