import GatchaResult from "./gatcha_result.js";

export default class Dice {
  /**
   * 
   * @param {number[]} probabilities 
   * @param {string[]} names 
   */
  constructor(probabilities, names) {
    this.probabilities = probabilities;
    this.names = names;
    if(this.names.length !== this.probabilities.length) {
      throw new Error("names.length !== probabilities.length");
    }
    this.length = this.probabilities.length;
  }
  /**
   * @returns {GatchaResult}
   */
  choice()  {
    let prob = Math.random();
    for(let i = 0; i < this.probabilities.length; i++) {
      prob -= this.probabilities[i];
      if(prob < 0){
        return new GatchaResult(this.probabilities[i], this.names[i]);
      }
    }
    return new GatchaResult(this.probabilities[this.length-1], this.names[this.length-1]);
  }
};