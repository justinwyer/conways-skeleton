export class Game {
  constructor(private width: number, private height: number) {
  }

  size() {
    return this.width * this.height;
  }
}
