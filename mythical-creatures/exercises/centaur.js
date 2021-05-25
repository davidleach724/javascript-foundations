class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.crankyNumber = 0;
  }

  shootBow() {
    if(this.cranky|| !this.standing) {
      return `NO!`;
    }
    this.crankyNumber++;
    if(this.crankyNumber === 3) {
      this.cranky = true;
    }
    return `Twang!!!`;
  }

  run() {
    if(this.cranky || !this.standing) {
      return `NO!`;
    }
    this.crankyNumber++;
    if(this.crankyNumber === 3) {
      this.cranky = true;
    }
    return `Clop clop clop clop!!!`
  }

  sleep() {
    if(this.standing) {
      return `NO!`
    } else {
      this.cranky = false;
      return `ZZZZ`
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    this.cranky = false;
    if(this.layingDown) {
      return `Not while I\'m laying down!`
    }
  }
}

module.exports = Centaur;
