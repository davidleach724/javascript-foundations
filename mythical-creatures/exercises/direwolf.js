var Stark = require('./stark');

class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || `Beyond the Wall`;
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if(this.home === stark.location &&
       this.starksToProtect.length < 2) {
         this.huntsWhiteWalkers = false;
         stark.safe = true;
         this.starksToProtect.push(stark);
    }
  }

  leave (stark) {
    this.starksToProtect = [];
    stark.safe = false;
  }
}

module.exports = Direwolf;
