class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.brokeCount = 0;
  }


  break() {
    this.broken = true;
    this.brokeCount +=1;
  }

  repair() {
    if(this.brokeCount <2) {
      this.broken = false;
      this.brokeCount += 1;
    } else {
      return `This ${this.type} has seen better days, we\'ll need a brand new one!`
    }
  }

  pop() {
  this.break();
  }
}

module.exports = Part;
