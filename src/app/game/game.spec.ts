import {Game} from './game';



describe('A rule', () => {
  it('any living cell with two or less living neighbours die', () => {
    const game = new Game([
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, true, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false]]);
    expect(game.NextGen()[2][2]).toBe(false, 'Should be dead');


  });
});


describe('A rule', () => {
  it('any living cell with two or three living neighbours lives on to the next gen', () => {
    const game = new Game([
      [false, false, false, false, false],
      [false, false, true, false, false],
      [false, false, true, true, false],
      [false, false, false, false, false],
      [false, false, false, false, false]]);
    expect(game.NextGen()[2][2]).toBe(true, 'lives on');


  });
});



describe('A rule', () => {
  it('any living cell with three or more live neighbours die of over population', () => {
    const game = new Game([
      [false, false, false, false, false],
      [false, true, true, true, false],
      [false, true, true, true, false],
      [false, false, false, false, false],
      [false, false, false, false, false]]);
    expect(game.NextGen()[2][2]).toBe(false, 'dies');


  });
});




describe('A rule', () => {
  it('any dead cell with exactly 3 live neighbours comes alive', () => {
    const game = new Game([
      [false, false, false, false, false],
      [false, true, false, false, false],
      [false, true, false, false, false],
      [false, false, false, true, false],
      [false, false, false, false, false]]);
    expect(game.NextGen()[2][2]).toBe(true, 'alive');



  });
});
