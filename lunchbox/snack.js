class Snack {
  constructor(type) {
    this.deliciousLevel = 'extra';
    this.type = type;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
    this.isHealthy = true;
  }

  getEaten() {
    this.amount -= 10;
    if(this.amount <= 20) {
      this.cuttingItClose = true;
    }
  }

  checkForHealthy() {
    var snackName = this.type.toLowerCase();

    if(snackName.search('fruit') >= 0) {
      this.isHealthy = true;
      return true;
    } else {
      this.isHealthy = false;
      return false;
    }
  }
}

module.exports = Snack;
