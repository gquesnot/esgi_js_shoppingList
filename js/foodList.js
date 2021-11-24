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
        if (foodName){
            let newFood =new Food(this.foodList.length, foodName, this.htmlPageElements.foodList);
            this.foodList.push(newFood);
            this.saveFoodListInLocalStorage();
        }
        else{
            alert("ERREUR: Entrer un nom de produit valide");
        }
    }

    delFood() {
        let foodName = this.htmlPageElements.inputDelFood.value;
        if (foodName){

            if(!this.removeByFoodName(foodName)){
                alert(`ERREUR: Le produit ${foodName} n'existe pas dans la liste de courses`);
            }
            else{
                this.htmlPageElements.popupDelFood.classList.add("hide");
            }
        }
        else{
            alert("ERREUR: Entrer un nom de produit valide");
        }
    }


    delAll() {
        this.htmlPageElements.foodList.innerHTML = "";
        this.foodList = [];
        this.saveFoodListInLocalStorage();

    }

    loadFoodListFromLocalStorage() {
        let foodList = [];
        let foodNameList = localStorage.getItem("listeCourse");
        if (foodNameList){
            foodNameList = JSON.parse(foodNameList);
        }
        else{
            foodNameList= [];
        }
        for (const [idx, foodName] of foodNameList.entries()){

            let newFood = new Food(idx, foodName,this.htmlPageElements.foodList);
            foodList.push(newFood);
        }
        return foodList;
    }

    saveFoodListInLocalStorage() {
        let foodNameList = [];
        for (const food of this.foodList){
            foodNameList.push(food.name)
        }
        localStorage.setItem("listeCourse", JSON.stringify(foodNameList));
    }
}
