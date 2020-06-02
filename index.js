"use strict";


class Firebase {
    constructor(apiKey, projectId) {
        firebase.initializeApp({
            apiKey,
            projectId,
        });
        this.database = firebase.firestore();
        this.fileStorage = firebase.storage().ref();
    }
    convertQuerySnapshotToRegularArray(querySnapshot) {
        return querySnapshot.docs.map((item) => ({
            id: item.id,
            ...item.data()
        }));
    }
}
// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyBLQd845Nh1sD0XvwMzesC4-ct0ZujOM_U",
    authDomain: "dev2-werkstuk-da5d0.firebaseapp.com",
    databaseURL: "https://dev2-werkstuk-da5d0.firebaseio.com",
    projectId: "dev2-werkstuk-da5d0",
    storageBucket: "dev2-werkstuk-da5d0.appspot.com",
    messagingSenderId: "325667458532",
    appId: "1:325667458532:web:4166537645db05448d8bf1",
    measurementId: "G-MBLG3JCJSS"
};
// Initialize Firebase
// Inspiratie gehaald uit werkcollege over firebase + google


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

// const firebase = new Firebase();
// console.log("firebase test", firebase);