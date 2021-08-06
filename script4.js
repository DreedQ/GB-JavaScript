'use strict';
// Задача №1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

// Увы громостко и нечитамо

function getObjFromNum(n) {
    var obj = {};
    let units;
    let dozens;
    let hundreds;
    if (n > 999 || n < 0) {
        console.log('Wrong number, enter between 0 and 999.');
        return obj;
    } else if ((units = n - getDozens(n - (getHundreds(n) * 100)) * 10 - getHundreds(n) * 100) > 0) {
        obj.units = units;
    } else obj.units = 0;

    if ((dozens = getDozens(n - (getHundreds(n) * 100))) > 0) {
        obj.dozens = dozens;
    } else obj.dozens = 0;

    if ((hundreds = getHundreds(n)) > 0) {
        obj.hundreds = hundreds;
    } else obj.hundreds = 0;
    return obj;
}

function getHundreds(n) {
    return Math.floor(n / 100);
}

function getDozens(n) {
    return Math.floor(n / 10)
}

// Задача №2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.

let bicycle = {
    price: 1000,
    'count in cart': 3,
    'count in storage': 13,
    manufacture: 'GTD',
    color: ['black', 'grey', 'yellow'],
    sex: ['male', 'female']
};
let ball = {
    price: 250,
    'count in cart': 2,
    'count in storage': 211,
    manufacture: 'Addio',
    color: ['black-red', 'grey', 'red-yellow'],
};
let sneekers = {
    price: 199,
    'count in cart': 6,
    'count in storage': 65,
    manufacture: 'Nikas',
    color: ['black', 'white', 'white-black'],
    sex: ['male', 'female']
};
let socks = {
    price: 4.99,
    'count in cart': 13,
    'count in storage': 102,
    manufacture: 'Nikasorro',
    color: ['black', 'white', 'white-black'],
    sex: ['male', 'female']
};

let cart = [
    bicycle,
    ball,
    sneekers,
    socks,
]

//не понял,  как из обьекта или массива записать/изменить пару ключ-значание в другой обьект. Текущую реализацию считаю рабочей но яно "костылями".

// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

function sumOfPriсeInCart(cart) {
    let result = 0;
    for (const item in cart) {
        if (Object.hasOwnProperty.call(cart, item)) {
            result += cart[item].price * cart[item]['count in cart']
        }
    }
    return result;
}
sumOfPriсeInCart(cart);

// Задача №3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.