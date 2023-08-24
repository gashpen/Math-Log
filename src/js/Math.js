/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import Character from './Chararcter';

export default class MathGame extends Character {
  hit(value, stoned) {
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
    if (stoned === true) {
      this.attack -= Math.log(value) * 5;
      if (this.attack < 0) {
        this.attack = 0;
      }
    }
  }
}
