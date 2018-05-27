import {Game} from './game';

describe('A game', () => {
  it('should have a size', () => {
    expect(new Game(5, 5).size()).toBe(25, 'size should be 25 for a 5 by 5 game');
    expect(new Game(6, 6).size()).toBe(36, 'size should be 36 for a 6 by 6 game');
  });
});
