import React from 'react'
import ReactPlayer from 'react-player'

import './About.css'

const About = () => {
  return (
    <div className='About-App'>
      <div id='base'>
        <dl id='gallery'>
          <dt className='defTitle'>
            <img src='./images/sports/basketball.png' alt='Step 1 Thumbnail' />
            <p className='classWhite'>Step 1</p>
          </dt>
          <dd className='def-def'>
            <ReactPlayer
              playing
              muted
              url='https://vimeo.com/341307338'
              alt='Step 1'
            />
            <div className='classBg'>
              <h2>Step 1</h2>
              <p>
              Each player will pick/purchase squares on the 10x10 game board before game day. Find many people that want to participate. While 100 players is the ideal situation, you can still play the game with much fewer people. Ask each of your players if they’d like to purchase more than one square.
              </p>
            </div>
          </dd>

          <dt className='defTitle'>
            <img src='./images/sports/football.png' alt='Step 2 Thumbnail' />
            <p className='classWhite'>Step 2</p>
          </dt>
          <dd className='def-def'>
            <ReactPlayer
              playing
              muted
              url='https://vimeo.com/235907937'
              alt='Step 2'
            />
            <div className='classBg'>
              <h2>Step 2</h2>
              <p>
              On game day the top and side rows will receive a randomly generated numbers from 0-9 corresponding to the Home and Away teams. Every square on the board will represent a potential score outcome for the game.
              </p>
            </div>
          </dd>

          <dt className='defTitle'>
            <img src='./images/sports/baseball.png' alt='Step 3 Thumbnail' />
            <p className='classWhite'>Step 3</p>
          </dt>
          <dd className='def-def'>
            <ReactPlayer
              playing
              muted
              url='https://vimeo.com/144990585'
              alt='Step 3'
            />
            <div className='classBg'>
              <h2>Step 3</h2>
              <p>
              The person whose numbers match up with the points outcome of each quarter is the winner for that quarter. Award them their money (or another prize of your choosing) congratulate them and repeat with the winner of each quarter until the end of the game
              </p>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  )
}

export default About
