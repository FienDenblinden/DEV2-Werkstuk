"use strict";

class Firebase {
    constructor() {
        this.db = firebase.firestore();
        this.collection = this.db.collection("Collectie");
    }
    convertQuerySnapshotToRegularArray = (querySnapshot) => querySnapshot.docs.map((item) => ({
        id: item.id,
        ...item.data()
    }));

    async render() {
        this.nameCocktail.onSnapshot((querySnapshot) => {
            // = this.convertQuerySnapshotToRegularArray(querySnapshot);

        })
    }

    firebaseCollection() {
        this.nameCocktail.add({
            nameCocktail: "",
            imageCocktail: "",
        });
    }
}

// Inspiratie gehaald uit werkcollege over firebase


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

        console.log("fotos", this.strDrinkThumb);
        // console.log(this.element);

    }

}

class Lijst {
    constructor(drink) {
        this.strDrink = drink.strDrink;
        this.strDrinkThumb = drink.strDrinkThumb;

    }
}



const cocktailWeergeven = new Cocktail();
console.log(cocktailWeergeven.init());

const firebase = new Firebase();
console.log("firebase test",firebase);