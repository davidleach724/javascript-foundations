class Settler {
  constructor(settler) {
    this.name = settler.name;
    this.age = settler.age;
    this.nationality = settler.nationality || 'unknown';
    this.status = 'healthy';
    this.ailments = [];
    this.distressLevel = 0;
  }

  experienceDistress(injury) {
    this.distressLevel +=1;
    if(this.distressLevel > 3) {
      return
    }
    this.ailments.push(injury);
    if(this.distressLevel === 1) {
      this.status = 'fair';
    }
    if(this.distressLevel ===2) {
        this.status = 'poor';
    }
    if(this.distressLevel ===3) {
      this.status = 'dead';
    }
  }

    heal() {
      if(this.status === 'dead') {
        return `Sorry, we can\'t heal a corpse. ${this.name} needs a proper burial!`
      }
      this.ailments = [];
      this.status = 'healthy';
    }
}

module.exports = Settler;
