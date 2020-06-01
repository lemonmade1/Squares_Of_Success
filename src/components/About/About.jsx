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
            <p className='classBg'>Step 1</p>
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
            <p className='classBg'>Step 2</p>
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
            <p className='classBg'>Step 3</p>
          </dd>
        </dl>
      </div>
    </div>
  )
}

export default About
