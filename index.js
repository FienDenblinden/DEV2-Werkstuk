"use strict";

class Cocktail {
    constructor(htmlElement) {
        this.drinks = [];
        this.htmlElement = document.getElementById("result");
        this.element = document.getElementById("cocktails");
    }

    async init() {
        this.fetch();
        this.htmlInladen();

    }

    async fetch() {
        const api = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
        const json = await api.json();
        console.log("api laden", json);
        this.drinks = json.drinks.map(drink => {
            return new Lijst(drink);
        })
        console.log(this.drinks);
        let htmlString = `<option>Select a cocktail</option>`;
        this.drinks.forEach((drink) => {
            htmlString +=
                `<option value="${drink.strDrink}">${drink.strDrink}</option>`;
        })
        this.element.innerHTML = htmlString;
    }
    htmlInladen() {

        // console.log(this.element);

    }

}

class Lijst {
    constructor(drink) {
        this.strDrink = drink.strDrink;
    }
}



const cocktailWeergeven = new Cocktail();
console.log(cocktailWeergeven.init());