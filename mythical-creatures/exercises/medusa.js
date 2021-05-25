var Person = require("./person");
var Statue = require("./statue");

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
   var victimP = new Person(victim.name);
   var victimS = new Statue(victim.name);

   if(this.statues.length < 3) {
        this.statues.push(victimS);
        return
   }
   if(this.statues.length === 3) {
     var person = new Person(this.statues[0].name);
     person.mood = `relieved`;
     this.statues.shift();
     this.statues.push(victimS);

     return person;
   }
  }
}

module.exports = Medusa;
