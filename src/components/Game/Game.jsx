import React, { Component } from 'react';

import Board from '../Board/Board';


import './Game.css';

function boardComplete(squares) {

  const lines = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
  ];

  for (let i = 0; i < lines.length; i++) {

    // eslint-disable-next-line
    const a = lines[i];

    // NEED CONDITIONAL STATEMENT TO DECLARE WHEN BOARD IS FULL
    // if (squares[a]) {
    //   return "Board Full!";
    // }
  }
  return null;
}

class Game extends Component {

  state = {
    history: [
      {
        squares: Array(100).fill(null),
      }
    ],
    stepNum: 0,
    xIsNext: true,
  }


  handleClick(i) {

    // ENSURES THAT IF "WE GO BACK", ALL FUTURE HISTORY WILL BE DELETE
    const history = this.state.history.slice(0, this.state.stepNum + 1);
    const current = history[history.length - 1]
    const squares = current.squares.slice();

    if (boardComplete(squares) || squares[i]) {
      return;
    }

    squares[i] = 'X';
    // squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNum: history.length,
      xIsNext: !this.state.xIsNext,
    });
    alert(`You clicked: Square ${squares}`)
  }

  jumpTo(step) {
    this.setState({
      stepNum: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {

    const history = this.state.history;
    const current = history[this.state.stepNum];
    const boardFull = boardComplete(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? ` Square picked # ${move}` : `Back to Blank Board`;

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (boardFull) {
      status = `boardFull: ${boardFull}`;
    } else {
      // NEED TO PLACE PLAYER NAME HERE
      // status = 'Next player: ' + (this.state.xIsNext ? `${name}` : `O`);
    }

    return (
      <div className="container">
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
            <div className="game-info">
              <div>{status}</div>
              <ol>{moves}</ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;