"use strict"

import {ShoppingList} from "./foodList.js";


//INIT VAR
const btnDelAll = document.getElementById("delete");

const btnDel1 = document.getElementById("deleteOne");

const popupDel1Food = document.getElementById("popup");
const closeDel1FoodPopupIcon = document.querySelector("span[title='annuler']");

const btnDel1Submit = document.getElementById("btnDelete");
const inputDel1Food = document.getElementById("toDelete");

const btnSubmitFood = document.getElementById("submit");
const inputAddFood = document.getElementById("toAdd");
//const inputNumberAddFood = document.getElementById("toAddNumber");

const foodList = document.getElementsByClassName("list")[0];

// INIT ShoppingList Class
const shoppingList = new ShoppingList({
    foodList: foodList,
    inputAddFood: inputAddFood,
    inputDelFood: inputDel1Food,
    popupDelFood: popupDel1Food
});

// INIT LISTENER
btnDelAll.addEventListener("click", () => shoppingList.delAll())

btnDel1.addEventListener("click", ()=> popupDel1Food.classList.remove("hide"));
closeDel1FoodPopupIcon.addEventListener("click", () => popupDel1Food.classList.add("hide"));

btnDel1Submit.addEventListener("click", () => shoppingList.delFood())
inputDel1Food.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        e.preventDefault();
        shoppingList.delFood();
    }
})

btnSubmitFood.addEventListener("click", () => shoppingList.addFood())
inputAddFood.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        e.preventDefault();
        shoppingList.addFood();
    }
})



