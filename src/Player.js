import React, { Component } from 'react';
import paper from '../src/assets/paper.png'
import rock from '../src/assets/rock.jpg'
import scissors from '../src/assets/scissors.png'

const Player = ({weapon}) => {
  return (
    <div className="player'">
      <img className="player-image"
      src={
        weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
      }alt="rock paper scissors"
      />
    </div>
  )

}

export default Player;