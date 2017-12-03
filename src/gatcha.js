import Dice from './dice.js';
import GatchaResult from './gatcha_result.js';

export default class Gatcha {
  /**
   * 
   * @param {Dice[]} dices 
   */
  constructor(dices) {
    /** @private */
    this.dices_ = dices;
  }
  /**
   * @returns {Title}
   */
  mawasu() {
    let prob = 1.0;
    let name = '';

    for(let i = 0; i < this.dices_.length; i++) {
      const dice = this.dices_[i];
      const r = dice.choice();
      if(r.name !== '') {
        prob *= r.probability;
        name += r.name;
        }
    }
    return new GatchaResult(prob, name);
  }
}