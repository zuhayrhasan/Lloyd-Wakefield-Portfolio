import React, { PureComponent } from 'react';
import '../styles/home.css';

import Lloyd from '../images/lloyd.jpg';

export default class Home extends PureComponent {

  render() {
    return (
      <>
        <div class="landing-container">
          <div class="title-box">
            <div class="title-text">Lloyd.
              <div class="text-block"></div>
            </div>
          </div>
          <div class="image-box">
            <div class="title-image">
              <img src={Lloyd} alt="LLoyd"></img>
              <div class="image-block"></div>
            </div>
          </div>
        </div>
        <div class="second-container"></div>
      </>
    );
  }
}