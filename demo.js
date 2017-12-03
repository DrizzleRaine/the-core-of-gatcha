import {Gatcha, Dice} from './main.js'

const gatcha = new Gatcha([
  new Dice([0.5,0.5], ['S', '']),
  new Dice([0.5,0.5], ['S', '']),
  new Dice([0.5,0.5], ['S', '']),
  new Dice([0.5,0.5], ['S', '']),
  new Dice([1], ['レア'])
]);

const r = gatcha.mawasu();
console.log(r.probability); // ===> 0.125
console.log(r.name); // ==> 'SSSレア', etc
