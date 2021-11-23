"use strict"

import {ShoppingList} from  "./foodList.js";

const btnDel1 = document.getElementById("deleteOne");
const btnDelAll = document.getElementById("delete");
const btnSubmitFood = document.getElementById("submit");
const inputAddFood = document.getElementById("toAdd");
const btnDel1Submit = document.getElementById("btnDelete");
const inputDelFood = document.getElementById("toDelete");
const popupDeleteFood = document.getElementById("popup");
const closeDelFoodPopupIcon = document.querySelector("span[title='annuler']");
const foodList = document.getElementsByClassName("list")[0];


const shoppingList = new ShoppingList({
    foodList : foodList,
    inputAddFood: inputAddFood,
    inputDelFood: inputDelFood,
    popupDelFood: popupDeleteFood
});

btnDel1.addEventListener("click", function (e) {
    popupDeleteFood.classList.remove("hide");
})

closeDelFoodPopupIcon.addEventListener("click", function (e){
    popupDeleteFood.classList.add("hide");
})

btnDelAll.addEventListener("click", function (e) {
    e.preventDefault();
    shoppingList.delAll();
})

btnDel1Submit.addEventListener("click", function (e) {
    e.preventDefault();
    shoppingList.delFood();
})
btnSubmitFood.addEventListener("click", function (e){
    e.preventDefault();
    shoppingList.addFood();
})



