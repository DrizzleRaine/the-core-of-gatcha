export default class GatchaResult {
  /**
   * 
   * @param {number} probability
   * @param {string} title 
   */
  constructor(probability, name) {
    this.probability = probability;
    this.name = name;
  }
};