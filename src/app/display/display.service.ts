import {Game} from '../game/game';
import { interval, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class DisplayService {
  grid(): Observable<boolean[][]> {
      let nextState = [
        [false, false, false, true, false, false, false, false, false, false],
        [false, false, false, true, false, false, false, false, false, false],
        [false, false, false, false, true, false, false, false, false, false],
        [false, false, true, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false]
      ];
    return interval(1000).pipe(map( _ => nextState = new Game(nextState).NextGen()));
    }
  }

