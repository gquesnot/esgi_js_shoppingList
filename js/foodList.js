import {Food} from  "./food.js";

export class ShoppingList {
    constructor(htmlPageElements) {
        this.htmlPageElements = htmlPageElements;
        this.foodList = this.loadFoodListFromLocalStorage();
    }

    removeByFoodName(nameToFind) {
        for (const [idx, food] of this.foodList.entries()) {
            if (food.name === nameToFind) {
                food.removeFromHtml();
                this.foodList.splice(idx, 1);
                this.saveFoodListInLocalStorage();
                return true;
            }
        }
        return false;
    }

    addFood() {
        let foodName = this.htmlPageElements.inputAddFood.value;

        let newFood =new Food(this.foodList.length, foodName, this.htmlPageElements.foodList);
        this.foodList.push(newFood);
        this.saveFoodListInLocalStorage();
    }

    delFood() {
        let foodName = this.htmlPageElements.inputDelFood.value;
        if (! this.removeByFoodName(foodName)){
            alert(`ERREUR: Le produit ${foodName} n'existe pas dans la liste de courses`);
        }
        this.htmlPageElements.popupDelFood.classList.add("hide");
    }


    delAll() {
        this.foodList.forEach(function (el, idx) {
            el.removeFromHtml();
        })
        this.foodList = [];
        this.saveFoodListInLocalStorage();

    }

    loadFoodListFromLocalStorage() {
        let foodList = [];
        let foodNameList = JSON.parse(localStorage.getItem("listeCourse")) ?? [];
        for (const [idx, foodName] of foodNameList.entries()){
            let newFood = new Food(idx, foodName,this.htmlPageElements.foodList);
            foodList.push(newFood);
        }
        return foodList;
    }

    saveFoodListInLocalStorage() {
        let foodNameList = [];
        this.foodList.forEach(el => {
            foodNameList.push(el.name);
        })
        localStorage.setItem("listeCourse", JSON.stringify(foodNameList));
    }
}
