import React from 'react'
import ReactPlayer from 'react-player'

import './About.css'

const About = () => {
  return (
    <div className='About-App'>
      <div id='base'>
        <dl id='gallery'>
          <dt>
            <img src='./images/minifruit/basketball.png' alt='Step 1 Thumbnail' />
          </dt>
          <dd>
            <ReactPlayer
              playing
              muted
              url='https://vimeo.com/341307338'
              alt='Step 1'
            />
              Step 1
          </dd>

          <dt>
            <img src='./images/minifruit/football.png' alt='Step 2 Thumbnail' />
          </dt>
          <dd>
            <ReactPlayer
              playing
              muted
              url='https://vimeo.com/235907937'
              alt='Step 2'
            />
          Step 2
          </dd>

          <dt>
            <img src='./images/miniFruit/baseball.png' alt='Step 3 Thumbnail' />
          </dt>
          <dd>
            <ReactPlayer
              playing
              muted
              url='https://vimeo.com/144990585'
              
              alt='Step 3'
            />
          Step 3
          </dd>
        </dl>
      </div>
    </div>
  )
}

export default About
