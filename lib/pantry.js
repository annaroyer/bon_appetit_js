
export default class Pantry {
  constructor(){
    this.stock = {}
  }

  stockCheck(ingredientName){
    return this.stock[ingredientName] || 0
  }

  restock(ingredientName, amount){
    this.stock[ingredientName] = this.stockCheck(ingredientName) + amount
  }

  addToShoppingList(recipe){
    this.shoppingList = Object.assign({}, recipe.ingredients)
  }
}
