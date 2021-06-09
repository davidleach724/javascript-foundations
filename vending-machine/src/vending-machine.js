class VendingMachine {
  constructor(vendingMachine) {
    this.id = vendingMachine.id;
    this.isBroken = vendingMachine.isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    for (var i=0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snack.name) {
        return `Sorry, that snack is already stocked! Try adding a different snack.`
      }
    }
    this.snacks.push(snack);
  }

  purchaseSnack(snack, paid) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snack) {
        if (this.snacks[i].itemsInStock === 0) {
          return `Sorry, no items in stock. Try another item.`
        }
        if (this.snacks[i].price <= paid) {
          this.snacks[i].itemsInStock--;
          return `Success! Here is $${paid - this.snacks[i].price} back!`
        } else {
          return `Sorry, not enough payment. Please add more money.`
        }
      }
    }
  }
}

module.exports = VendingMachine;
