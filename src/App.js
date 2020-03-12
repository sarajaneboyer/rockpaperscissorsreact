import React, { Component } from 'react';
import './App.css';
import Player from './Player';


const weapons = ["rock", "paper", "scissors"]; 

class App extends Component {
  state = {
    Player1: weapons[0],
    Player2: weapons[0],
    Winner: '',
  }

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval( () => {
      counter++;
      this.setState({
        player2: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      });
      if(counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100);
  };

  render() {
    const { Player1, Player2, Winner } = this.state;
    return (
      <>
        <h1> Rock - Paper - Scissors </h1>
        <div>
          <Player weapon={Player1} />
          <Player weapon={Player2} /> 
        </div>
        <div>
          <button className="weaponBtn">ROCK</button>
          <button className="weaponBtn">PAPER</button>
          <button className="weaponBtn">SCISSORS</button>
        </div>
        <div className="winner">winner</div>

        <button type='button' onClick={this.startGame}>Start</button>  
      </>
    )
  }
}

export default App;
