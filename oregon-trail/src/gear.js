class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  }


  checkForValidity() {
    if(this.type === 'food' || this.type === 'ammunition' || this.type === 'clothes') {
      return `Great, we\'ll need lots of ${this.type}!`;
    } else {
      return `I don\`t think a ${this.type} will help us.`
    }
  }
}

module.exports = Gear;
