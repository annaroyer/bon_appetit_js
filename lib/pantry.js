const pry = require('pryjs')

export default class Pantry {
  constructor(){
    this.stock = {}
  }

  stockCheck(ingredientName){
    return this.stock[ingredientName] || 0
  }
}
