const pry = require('pryjs')

export default class Pantry {
  constructor(){
    this.stock = {}
  }

  stockCheck(ingredientName){
    return this.stock[ingredientName] || 0
  }

  restock(ingredientName, amount){
    if(this.stockCheck(ingredientName)){
      this.stock[ingredientName] += amount
    } else {
      this.stock[ingredientName] = amount
    }
  }
}
