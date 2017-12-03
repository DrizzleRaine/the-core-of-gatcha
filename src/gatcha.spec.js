import Gatcha from './gatcha.js';
import GatchaResult from './gatcha_result.js';
import Dice from './dice.js';
import Mocha from 'mocha';
import Chai from 'chai';

const assert = Chai.assert;

describe('ガチャ', () => {
  it('何もないガチャを回す', () => {
    const gatcha = new Gatcha([]);
    const result = gatcha.mawasu();
    assert(result instanceof GatchaResult, 'Result should be GatchaResult. Got: '+typeof(result));
  });
  it('確率がちょうど半々のガチャを回す', () => {
    const gatcha = new Gatcha([new Dice([0.5, 0.5], ['ぞい', 'ぞい'])]);
    const result = gatcha.mawasu();
    assert(result.probability === 0.5, 'ガチャの確率は当たるにせよ外れるにせよ、半々のはず。');
  });
});
