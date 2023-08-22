/* eslint-disable no-unused-vars */
import Math from './Math';

class Magican extends Math {
  constructor(name) {
    super(name);

    this.name = name;
    this.type = 'Magican';
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }
}
