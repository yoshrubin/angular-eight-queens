import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})

export class GameBoardComponent implements OnInit {

  rows = new Array(8);
  squares = new Array(8);

  constructor() { }

  ngOnInit(): void {
  }

  toggleQueen(row: any, square: any) {
    console.log(row, square);
  }

}
