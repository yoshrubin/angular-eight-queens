import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})

export class GameBoardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    const board = document.getElementById('board');
    this.renderBoard(board);
  }

  renderBoard(board: any) {
    for (var i = 0; i < 8; ++i) {
      var row = document.createElement('DIV')
      row.className = 'row'
      row.style.display = 'flex';
      row.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse';
      for (var j = 0; j < 8; ++j) {
        var square = document.createElement('DIV')
        square.className = 'square'
        square.style.backgroundColor = j % 2 === 0 ? 'white' : 'black'
        square.style.height = '100px'
        square.style.width = '100px'
        row.appendChild(square)
      }
      board.appendChild(row)
    }
  }

}
