# ガチャ〜〜〜〜〜〜ガチャ！ガチャ！！

ガチャは悪い文明！粉砕する！！

## the-core-of-gatcha

ガチャの「確率と格」を出すところ **だけ** の実装。

```js
import {Gatcha, Dice} from 'the-core-of-gatcha'

const gatcha = new Gatcha([
  new Dice([0.5,0.5], ['S', '']),
  new Dice([0.5,0.5], ['S', '']),
  new Dice([0.5,0.5], ['S', '']),
  new Dice([0.5,0.5], ['S', '']),
  new Dice([1], ['レア'])
]);

const r = gatcha.mawasu();
console.log(r.probability);
console.log(r.name); // ==> 'SSSレア', etc


```