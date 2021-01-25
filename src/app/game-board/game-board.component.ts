import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})

export class GameBoardComponent implements OnInit {

  queens: number[][] = new Array(8)
    .fill(0)
    .map(() => new Array(8)
      .fill(0)
    );
  rows = new Array(8);
  squares = new Array(8);

  queenCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleQueen(row: any, column: any) {
    for (var x in this.queens) {
      if (this.queens[row][column]) {
        this.queens[row][column] = 0;
        this.queenCount -= 1;
        return;
      }
      let diff = row - +x;
      if (this.queens[x][column + diff] || this.queens[x][column - diff]) {
        console.log('there is a queen diagonally from here');
        return;
      }
      for (var y in this.queens[x]) {
        if (this.queens[x][y] && x == row) {
          console.log('cannot place queen in this row');
          return;
        }
        if (this.queens[x][y] && y == column) {
          console.log('cannot place queen in this column');
          return;
        }
      }
    }
    this.queens[row][column] = 1;
    this.queenCount += 1;
  }

}
