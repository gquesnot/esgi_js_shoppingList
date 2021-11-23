"use strict"

import {ShoppingList} from  "./foodList.js";

const btnDelAll = document.getElementById("delete");

const btnDel1 = document.getElementById("deleteOne");

const popupDel1Food = document.getElementById("popup");
const closeDel1FoodPopupIcon = document.querySelector("span[title='annuler']");

const btnDel1Submit = document.getElementById("btnDelete");
const inputDel1Food = document.getElementById("toDelete");

const btnSubmitFood = document.getElementById("submit");
const inputAddFood = document.getElementById("toAdd");

const foodList = document.getElementsByClassName("list")[0];


const shoppingList = new ShoppingList({
    foodList : foodList,
    inputAddFood: inputAddFood,
    inputDelFood: inputDel1Food,
    popupDelFood: popupDel1Food
});


btnDelAll.addEventListener("click", function (e) {
    e.preventDefault();
    shoppingList.delAll();
})


btnDel1.addEventListener("click", function (e) {
    popupDel1Food.classList.remove("hide");
})

closeDel1FoodPopupIcon.addEventListener("click", function (e){
    popupDel1Food.classList.add("hide");
})

btnDel1Submit.addEventListener("click", function (e) {
    e.preventDefault();
    shoppingList.delFood();
})


btnSubmitFood.addEventListener("click", function (e){
    e.preventDefault();
    shoppingList.addFood();
})



