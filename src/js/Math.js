/* eslint-disable no-unused-vars */
import Character from './Chararcter';

class Math extends Character {
  get attack() {
    return this.attack;
  }

  set attack(value) {
    if (value === 5) {
      this.attack = 60 * (this.attack / 100);
    }
    if (value === 4) {
      this.attack = 70 * (this.attack / 100);
    }
    if (value === 3) {
      this.attack = 80 * (this.attack / 100);
    }
    if (value === 2) {
      this.attack = 90 * (this.attack / 100);
    }
    if (value === 1) {
      this.attack = 100 * (this.attack / 100);
    }
  }

  get stoned() {
    return this.attack;
  }

  set stoned(value) {
    this.attack -= Math.log(value) * 5;
  }
}
