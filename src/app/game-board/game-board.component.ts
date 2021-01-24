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

  constructor() { }

  ngOnInit(): void {
    console.log(this.queens);
  }

  toggleQueen(row: any, column: any) {
    for (var x in this.queens) {
      for (var y in this.queens[x]) {
        console.log(this.queens[x][y],'value');
        console.log(x,'x',row);
        console.log(y,'y',column);
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
  }

}
