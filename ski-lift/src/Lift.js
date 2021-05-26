var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(skier, ticket) {
    var skiBum = new Skier(skier);
    if(!ticket) {
      return `Sorry, ${skiBum.name}. You need a lift ticket!`
    }
    if(this.limit > this.skiers.length) {
      this.skiers.push(skiBum);
    } else {
      return `Sorry, ${skiBum.name}. Please wait for the next lift!`
    }
  }

    startLift() {
      if(this.skiers.length === this.limit) {
        this.safetyBar = 'down';
      } else {
        var skiNeed = this.limit - this.skiers.length;

        if(skiNeed ===1) {
          return `We still need 1 more skier!`;
        } else {
          return `We still need ${skiNeed} more skiers!`;
        }

      }
      }


    }

module.exports = Lift;
