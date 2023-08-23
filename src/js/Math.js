/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import Character from './Chararcter';

export default class Math extends Character {
  get attack() {
    return this.attack;
  }

  set attack(value) {
    switch (value) {
      case 5:
        this.attack = 60 * (this.attack / 100);
        break;
      case 4:
        this.attack = 70 * (this.attack / 100);
        break;
      case 3:
        this.attack = 80 * (this.attack / 100);
        break;
      case 2:
        this.attack = 90 * (this.attack / 100);
        break;
      case 1:
        this.attack = 100 * (this.attack / 100);
        break;
    }
  }

  get stoned() {
    return this.attack;
  }

  set stoned(value) {
    this.attack -= Math.log(value) * 5;
  }
}
