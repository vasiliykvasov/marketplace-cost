'use strict';

/**
 * Логи
 * @type {boolean} true: выводить, false: не выводить
 */
let logs = true;
if(logs){console.log('wholesale-price.js');}

/**
 * Отладка
 * @type {boolean} true: включена, false: выключена
 */
let debug = true;

export class WholesalePrice {
    constructor(value) {
        this.value = value;
        this.input.value = this.value;
        this.input.addEventListener('input', (event) => {
            this.value = this.input.value;
            console.log(this);
        })
        return this;
    }
    input = document.querySelector('.wholesale-price__number');
    value = new Number();
}