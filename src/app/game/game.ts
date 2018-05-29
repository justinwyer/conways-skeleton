
type Cell = boolean;

export class Game {

  protected _Grid: Cell[][];
  constructor(private Grid: Cell[][]) {
      this._Grid = Grid;
  }

  NextGen() {
    return this.RewriteGame();

  }


 // Method to write the next generation of population
  protected RewriteGame() {
    const rowSize: number = this._Grid.length;
    const ColSize: number = this._Grid[0].length;
    const newState: Cell[][] = [];
    for (let i = 0 ; i < rowSize; ++i) { // loop through the row
      newState.push([]);
      for (let j = 0; j < ColSize; ++j) { // loop through the column

        const jPlus1 =  (j + 1 > ColSize - 1) ? 0 : j + 1;
        const jMinus1 =  (j - 1 < 0 ) ? ColSize - 1 : j - 1;
        const iPlus1 =  (i + 1 > rowSize - 1) ? 0 : i + 1;
        const iMinus1 =  (i - 1 < 0 ) ? rowSize - 1 : i - 1;
        let liveNeighbours = 0;
        const currentState = this._Grid[i][j];
        liveNeighbours = (liveNeighbours +  ((this._Grid[iMinus1][jMinus1]) ? 1 : 0 ));
        liveNeighbours = (liveNeighbours +  ((this._Grid[iMinus1][j]) ? 1 : 0));
        liveNeighbours = (liveNeighbours +  ((this._Grid[iMinus1][jPlus1]) ? 1 : 0));
        liveNeighbours = (liveNeighbours +  ((this._Grid[i][jMinus1]) ? 1 : 0));
        liveNeighbours = (liveNeighbours +  ((this._Grid[i][jPlus1]) ? 1 : 0));
        liveNeighbours = (liveNeighbours +  ((this._Grid[iPlus1][jMinus1]) ? 1 : 0));
        liveNeighbours = (liveNeighbours +  ((this._Grid[iPlus1][j]) ? 1 : 0));
        liveNeighbours = (liveNeighbours +  ((this._Grid[iPlus1][jPlus1]) ? 1 : 0));

        if (liveNeighbours < 2 && currentState) {
              newState[i].push(false);
        } else if (liveNeighbours >= 2 && liveNeighbours <= 3  && currentState) {
          newState[i].push(true);
        } else if ( liveNeighbours > 3  && currentState) {
          newState[i].push(false);
        } else if ( liveNeighbours === 3  && (currentState === false)) {
          newState[i].push(true);
        }  else {
          newState[i].push(currentState);
        }


      }
    }
    return newState;

}


  }

