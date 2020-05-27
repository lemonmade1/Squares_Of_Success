import React from 'react';

import './About.css';

const About = () => {
  return (
    <div className="About-App">
      <div id="base">
        <dl id="gallery">
          <dt><img src="./images/minifruit/22.png" alt="Step 1 Thumbnail" /></dt>
          <dd><img src="./images/22.png" alt="Step 1" />Step 1</dd>

          <dt><img src="./images/minifruit/23.png" alt="Step 2 Thumbnail" /></dt>
          <dd><img src="./images/23.png" alt="Step 2" />Step 2</dd>

          <dt><img src="./images/minifruit/24.png" alt="Step 3 Thumbnail" /></dt>
          <dd><img src="./images/24.png" alt="Step 3" />Step 3</dd>
        </dl>
      </div>      
    </div>
  )
}

export default About;