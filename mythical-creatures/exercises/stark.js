var Direwolf = require('./direwolf');

class Stark {
  constructor(stark) {
    if(!stark){return}
    this.name = stark.name;
    this.location = stark.area || 'Winterfell';
    this.safe = false;
  }

  sayHouseWords()  {
    if(!this.safe) {
      return `Winter is Coming`;
    } else {
      return `The North Remembers`;
    }
  }

  callDirewolf(name, home) {
    console.log(name, home);
    var direwolf = new Direwolf(name, home);
    // return direwolf;
  }
}

module.exports = Stark;
