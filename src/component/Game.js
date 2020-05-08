import React, { Component } from 'react'
import Board from './Board'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      para:this.props.match.params.id
    }
  }
  
    render() {
      const player = this.state.para=="ai"?"ai":(this.state.para=="friend")?"friend":"";
        return (
          <div className="game">
            <div className="game-board">
            <Board player={player}/>
            </div>
          </div>
        );
      }
}
export default Game;
