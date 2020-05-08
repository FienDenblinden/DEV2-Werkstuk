"use strict";

class Cocktail {
    constructor(htmlElement) {
        this.test = [];
        this.htmlElement = document.getElementById("result");
    }
    async fetch() {
        const api = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
        const json = await api.json();
        console.log("api laden", json);
    }

    async init() {
        this.fetch();
        this.htmlInladen();

    }

    htmlInladen() {
        console.log(this.htmlElement);
    }
}


const cocktailWeergeven = new Cocktail();
console.log(cocktailWeergeven.init());