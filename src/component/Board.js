import React, { Component } from 'react'
import Squares from './Squares';

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            isClickable: true
        }
    }
    handleClick(i) {
        if (!this.state.isClickable) {
            return;
        }
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
            isClickable: false
        },()=>{this.computerTurn(i)});
    }

    computerTurn=()=>{
        const squares = this.state.squares.slice(); 
        if (calculateWinner(squares)) {
            return;
        }
        let notFilled = [];
        let isAvailable = false;

        for (let i = 0; i < 9; i++) {
            if(this.state.squares[i]==null){
                notFilled.push(i);
                isAvailable = true;
            }
        }

        if (isAvailable) {
            setTimeout(() => { 
                var randomItem = notFilled[Math.floor(Math.random() * notFilled.length)];
                squares[randomItem] = this.state.xIsNext ? 'X' : 'O';
                this.setState({
                    squares: squares,
                    xIsNext: !this.state.xIsNext,
                    isClickable: true
                });
            }, 1000);
        }
    }

    renderSquare(i){
        return <Squares 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        />
    }

    restartGame=()=>{
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
            isClickable: true
        });
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        let ai=0;
        let user =0;
        let status = winner =='X'?user=1:(winner=='O')? ai=1:'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        let restart;
        if(winner){
            restart= <button onClick={this.restartGame}>Restart</button>;
        }
        return (
            <div className="game-container">
                <div className="status">
                    <p>
                        <span>Alex</span>
                        <button status-btn>{user+"-"+ai}</button>
                        <span>AI</span>

                    </p>
                </div>
                <div className="board">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <div className="restart-game">
                    <p>{user?'Alex won the game':(ai)?'AI won the game':''}</p>
                    {restart}
                </div>
            </div>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board;
